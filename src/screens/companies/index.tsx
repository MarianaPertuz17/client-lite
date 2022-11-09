import styles from './styles.module.css';
import { IGuestData } from '../../interfaces';
import { NavBar } from '../../components/navBar';


export function Companies () {

  return (
    <>
      <NavBar/>
      <div className={styles.container}>
        <h2 className={styles.h2}>Currently, these companies are available:</h2>
      </div>
    </>
    
  )
}