import styles from './styles.module.css';
import { NavBar } from '../../components/navBar';
import { useEffect, useState } from 'react';
import { List } from '../../components/list';
import { guestService } from '../../services/guestService';
import { ItemAttributes } from '../../interfaces';
import { useParams } from 'react-router-dom'
import { Header } from '../../components/companyHeader';
import { ItemsTable } from '../../components/itemsTable';


export function Inventory () {
  const [ company, setCompany ] = useState<ItemAttributes>();
  const { nit } = useParams();

  useEffect(() => {
    fetchCompany();
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
  return (
    <div style={{height:'20vh'}}>
    {company?.products && <ItemsTable items={company.products}/>}
    </div>
  )
}