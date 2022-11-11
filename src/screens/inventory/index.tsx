import styles from './styles.module.css';
import { NavBar } from '../../components/navBar';
import { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { guestService } from '../../services/guestService';
import { ItemAttributes } from '../../interfaces';
import { useNavigate, useParams } from 'react-router-dom'
import { ItemsTable } from '../../components/itemsTable';
import { ItemForm } from '../../components/itemForm';
import { adminService } from '../../services/adminService';

const initialForm : ItemAttributes = {
  productName: '',
  quantity: 0,
}

export function Inventory () {
  const [ company, setCompany ] = useState<ItemAttributes>();
  const [ formData, setFormData ] = useState(initialForm);
  const { nit } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) navigate('/login');
    else {
      if (localStorage.getItem('rol') === 'admin') fetchCompany();
      else navigate('/');
    }
  }, []);


  const fetchCompany = async() => {
    const loggedUserJSON = localStorage.getItem('token');
    if (loggedUserJSON && nit){
      const {res, error} = await guestService.getCompany(loggedUserJSON, nit);
      if (!error) {
        setCompany(res);
      } else alert(res);
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    createItem(formData);
  }

  const handleChange = ( e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData(prevState => ({...prevState, [name]: value}));
  }

  const createItem = async(item: ItemAttributes): Promise<any> => {
    const loggedUserJSON = localStorage.getItem('token');
    item.companyId = company?.NIT;
    if (loggedUserJSON){
      const {res, error} = await adminService.createItem(loggedUserJSON, item);
      if (!error){
        alert('Item added!');
        setFormData(initialForm);
        fetchCompany();
      } else alert(res);
    }
  }

  const toPDF = async() => {
    const loggedUserJSON = localStorage.getItem('token');
    if (loggedUserJSON && nit){
      await adminService.generatePDF(loggedUserJSON, nit);
    }
  }

  return (
    <div style={{height:'100vh'}}>
      <NavBar/>
      <div className={styles.container}>
        <div className={styles.optionsBar}>
          <h2>Add new item</h2>
          <ItemForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
        </div>
        <div className={styles.container__content}>
          <div className={styles.titleContainer}>
            <h1>Items from {company?.name}:</h1>
            <button className={styles.button} onClick={toPDF}>Print to PDF</button>
          </div>
          {company?.products && <ItemsTable items={company.products}/>}
        </div> 
      </div>
    </div>

  )
}