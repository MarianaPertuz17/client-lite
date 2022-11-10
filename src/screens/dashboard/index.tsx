import styles from './styles.module.css';
import { NavBar } from '../../components/navBar';
import { DashboardItem } from '../../components/dashboardItem';
import companyIcon from '../../assets/images/company-icon.png';
import plusIcon from '../../assets/images/plus-icon.png';
import { useState } from 'react';


export function Dashboard () {

  const [ showCompanyForm, setShowCompanyForm ] = useState(false);

  const handleClick = (option: string) => {
    if (option === 'Explore companies') setShowCompanyForm(false);
    else setShowCompanyForm(true);
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
        <div>
          { !showCompanyForm ? 
            <h2 className={styles.h2}>Currently, these companies are available:</h2>
            :
            <h2 className={styles.h2}>Showing form</h2>
          }
        </div>
        
      </div>
    </>
    
  )
}