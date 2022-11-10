import styles from './styles.module.css';
import { NavBar } from '../../components/navBar';
import { DashboardItem } from '../../components/dashboardItem';
import companyIcon from '../../assets/images/company-icon.png';
import plusIcon from '../../assets/images/plus-icon.png';


export function Dashboard () {

  return (
    <>
      <NavBar/>
      <div className={styles.container}>
        <div className={styles.optionsBar}>
          <h3>Reports</h3>
          <DashboardItem icon={companyIcon} title='Explore companies'/>
          <DashboardItem icon={plusIcon} title='Add new company'/>
        </div>
        <div>
          <h2 className={styles.h2}>Currently, these companies are available:</h2>

        </div>
        
      </div>
    </>
    
  )
}