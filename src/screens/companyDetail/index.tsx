import styles from './styles.module.css';
import { NavBar } from '../../components/navBar';
import { useEffect, useState } from 'react';
import { List } from '../../components/list';
import { guestService } from '../../services/guestService';
import { ItemAttributes } from '../../interfaces';
import { useParams } from 'react-router-dom'
import { Header } from '../../components/companyHeader';


export function Company () {

  const [ company, setCompany ] = useState<ItemAttributes>();
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
    {company && 
      <>
        <NavBar/>
        <div className={styles.container}>
          <Header company={company}/>
          { company.products && company.products.length > 0 ? 
            <p className={styles.p}>This company has the following items:</p>
          : <p className={styles.p}>This company has no items yet</p>}
          
          {company.products && <List list={company.products}/>}
        </div>
      </>
    }
    </>    
  )
}