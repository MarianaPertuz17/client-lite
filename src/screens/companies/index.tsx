import styles from './styles.module.css';
import { NavBar } from '../../components/navBar';
import { useEffect, useState } from 'react';
import { List } from '../../components/list';
import { guestService } from '../../services/guestService';
import { ItemAttributes } from '../../interfaces';
import { useNavigate } from 'react-router-dom';


export function Companies () {

  const [ companies, setCompanies ] = useState<ItemAttributes[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) navigate('/login');
    else fetchCompanies(); 
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
        <h3 className={styles.h3}>Currently, these companies are available:</h3>
        <List list={companies}/>
      </div>
    </>
    
  )
}