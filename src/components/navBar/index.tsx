import styles from './styles.module.css';
import logo from '../../assets/images/logo_lite.png';
import profile from '../../assets/images/profile.png';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { routes } from '../../routes';
import { useEffect, useState } from 'react';
import { Dropdown } from '../dropDown';

export function NavBar () {

  const navigate = useNavigate();
  const [ showProfile, setShowProfile ] = useState(false);
  

  useEffect(() => {
    if (localStorage.getItem('token')) setShowProfile(true);
  }, []);

  const handleLogOut = () => {
    localStorage.clear();
    navigate('/');
    setShowProfile(false);
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.firstContainer}>
        <Link to={routes.HOME}>
          <img src={logo} alt='logo' className={styles.logo}/>
        </Link>
        <Link to={routes.COMPANIES} className={styles.span}>
          <span>Discover companies</span>
        </Link>
      </div>
      {showProfile ? 
        <div className={styles.buttonContainer}>
          <img src={profile} alt='logo' className={styles.profile}/>
          <Dropdown/>
          <button className={`${styles.button} ${styles.signUp}`} onClick={handleLogOut}>Log out</button>
        </div>
       :
        <div className={styles.buttonContainer}>
          <Link to={routes.LOGIN}>
            <button className={`${styles.button} ${styles.login}`}>Log in</button>
          </Link>
          <Link to={routes.SIGNUP}>
            <button className={`${styles.button} ${styles.signUp}`}>Sign up</button>
          </Link>
        </div>
      }
    </div>
  )
}