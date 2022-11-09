import styles from './styles.module.css';
import logo from '../../assets/images/logo_lite.png'

export function NavBar () {
  return (
    <div className={styles.container}>
      <img src={logo} alt='logo' className={styles.logo}/>
      <span>Navigation Bar</span>
    </div>
  )
}