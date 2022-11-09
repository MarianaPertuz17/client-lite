import styles from './styles.module.css';
import logo from '../../assets/images/logo_lite.png';
import { Link } from "react-router-dom";
import { routes } from '../../routes';

export function AltNavBar () {
  return (
    <div className={styles.container}>
      <div className={styles.firstContainer}>
        <Link to={routes.HOME}>
          <img src={logo} alt='logo' className={styles.logo}/>
        </Link>
      </div>
      <div className={styles.buttonContainer}>
        <Link to={routes.LOGIN}>
          <button className={`${styles.button} ${styles.login}`}>Log in</button>
        </Link>
        <Link to={routes.SIGNUP}>
          <button className={`${styles.button} ${styles.signUp}`}>Sign up</button>
        </Link>
      </div>
    </div>
  )
}