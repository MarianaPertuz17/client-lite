import styles from './styles.module.css';
import { NavBar } from '../../components/navBar';
import { DashboardItem } from '../../components/dashboardItem';
import companyIcon from '../../assets/images/company-icon.png';
import plusIcon from '../../assets/images/plus-icon.png';
import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { ItemAttributes } from '../../interfaces';
import { CompanyForm } from '../../components/companyForm';
import { guestService } from '../../services/guestService';
import { List } from '../../components/list';


const initialForm : ItemAttributes = {
  NIT: '',
  name: '',
  address: '',
  phone: '',
}

export function Dashboard () {

  const [ showCompanyForm, setShowCompanyForm ] = useState(false);
  const [ formData, setFormData ] = useState(initialForm);
  const [ companies, setCompanies] = useState<ItemAttributes[]>([]);

  useEffect(() => {
    fetchCompanies();
    console.log(companies)
  }, []);

  const fetchCompanies = async() => {
    const loggedUserJSON = localStorage.getItem('token');
    if (loggedUserJSON){
      const {res, error} = await guestService.getCompanies(loggedUserJSON);
      if (!error) setCompanies(res);
      else alert(res);
    }
  }


  const handleClick = (option: string) => {
    if (option === 'Explore companies') setShowCompanyForm(false);
    else setShowCompanyForm(true);
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormData(initialForm);
  }

  const handleChange = ( e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData(prevState => ({...prevState, [name]: value}));
    console.log(formData, 'la data')
  }

  return (
    <>
      <NavBar/>
      <div className={styles.container}>
        <div className={styles.optionsBar}>
          <h3>Reports</h3>
          <DashboardItem icon={companyIcon} title='Explore companies' handleClick={handleClick}/>
          <DashboardItem icon={plusIcon} title='Add new company' handleClick={handleClick}/>
        </div>
        <div className={styles.container__content}>
          { !showCompanyForm ? 
            <>
              <h1>Current companies</h1>
              <List list={companies} isAdmin={true}/>
            </>
            :
            <>
              <h1>Add new company</h1>
              <CompanyForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
            </>
            
          }
        </div>
        
      </div>
    </>
    
  )
}