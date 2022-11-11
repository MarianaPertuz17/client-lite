import styles from './styles.module.css';
import { NavBar } from '../../components/navBar';
import { useEffect, useState } from 'react';
import { List } from '../../components/list';
import { guestService } from '../../services/guestService';
import { ItemAttributes } from '../../interfaces';


export function Companies () {

  const [ companies, setCompanies ] = useState<ItemAttributes[]>([]);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async() => {
    const loggedUserJSON = localStorage.getItem('token');
    if (loggedUserJSON){
      const {res, error} = await guestService.getCompanies(loggedUserJSON);
      if (!error) setCompanies(res);
      else alert(res);
    }
  }

  return (
    <>
      <NavBar/>
      <div className={styles.container}>
        <h2 className={styles.h2}>Currently, these companies are available:</h2>
        <List list={companies}/>
      </div>
    </>
    
  )
}