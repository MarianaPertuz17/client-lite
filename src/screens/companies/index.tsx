import styles from './styles.module.css';
import { NavBar } from '../../components/navBar';
import { useEffect, useState } from 'react';
import { CompanyList } from '../../components/companiesList';
import { guestService } from '../../services/guestService';
import { ICompanyAttributes } from '../../interfaces';


export function Companies () {

  const [ companies, setCompanies ] = useState<ICompanyAttributes[]>([]);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async() => {
    const {res, error} = await guestService.getCompanies();
    if (!error) setCompanies(prevState => [...prevState, res]);
    else alert(res);
  }

  return (
    <>
      <NavBar/>
      <div className={styles.container}>
        <h2 className={styles.h2}>Currently, these companies are available:</h2>
        <CompanyList list={companies}/>
      </div>
    </>
    
  )
}