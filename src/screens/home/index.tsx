import { NavBar } from '../../components/navBar';
import styles from './styles.module.css';

export function Home () {
  return (
    <>
      <NavBar/>
      <div className={styles.container}>
        <span>Home</span>
      </div>
    
    </>
    
  )
}