import styles from './styles.module.css';
import { NavBar } from '../../components/navBar';
import { useEffect, useState } from 'react';
import { CompanyList } from '../../components/companiesList';
import { guestService } from '../../services/guestService';
import { ICompanyAttributes } from '../../interfaces';
import { useParams } from 'react-router-dom'
import { Header } from '../../components/companyHeader';


export function Company () {

  const [ company, setCompany ] = useState<ICompanyAttributes>();
  const { nit } = useParams()

  useEffect(() => {
    fetchCompany();
    console.log(company)
  }, []);

 
  const fetchCompany = async() => {
    const loggedUserJSON = localStorage.getItem('token');
    if (loggedUserJSON && nit){
      const {res, error} = await guestService.getCompany(loggedUserJSON, nit);
      if (!error) {
        console.log(res, 'tyin')
        setCompany(res);
      } else alert(res);
    }
  }

  return (
    <>
      <NavBar/>
      <div className={styles.container}>
        
        {company && 
          <Header company={company}/>
         
        }
      </div>
    </>
    
  )
}