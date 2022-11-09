import styles from './styles.module.css';
import { NavBar } from '../../components/navBar';


export function Dashboard () {

  return (
    <>
      <NavBar/>
      <div className={styles.container}>
        <h2 className={styles.h2}>Currently, these companies are available:</h2>
      </div>
    </>
    
  )
}