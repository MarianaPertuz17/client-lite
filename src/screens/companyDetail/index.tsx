import styles from './styles.module.css';
import { NavBar } from '../../components/navBar';
import { useEffect, useState } from 'react';
import { CompanyList } from '../../components/companiesList';
import { guestService } from '../../services/guestService';
import { ICompanyAttributes } from '../../interfaces';


export function Company () {

  // const [ companies, setCompanies ] = useState<ICompanyAttributes[]>([]);

  // useEffect(() => {
  //   fetchCompanies();
  //   console.log(companies)
  // }, []);

  // const fetchCompanies = async() => {
  //   const loggedUserJSON = localStorage.getItem('token');
  //   if (loggedUserJSON){
  //     const {res, error} = await guestService.getCompanies(loggedUserJSON);
  //     if (!error) setCompanies(res);
  //     else alert(res);
  //   }
  // }

  return (
    <>
      <NavBar/>
      <div className={styles.container}>
        <h2 className={styles.h2}>Currently, these companies are available:</h2>
        
      </div>
    </>
    
  )
}