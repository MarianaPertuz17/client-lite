import styles from './styles.module.css';
import logo from '../../assets/images/logo_lite.png';
import profile from '../../assets/images/profile.png';
import { Link, useNavigate } from "react-router-dom";
import { routes } from '../../routes';
import { useEffect, useState } from 'react';

export function NavBar () {

  const navigate = useNavigate();
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ isAdmin, setIsAdmin ] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) setIsLoggedIn(true);
    if (localStorage.getItem('rol') === 'admin') setIsAdmin(true);
    else setIsAdmin(false);
  }, []);

  const handleLogOut = () => {
    localStorage.clear();
    navigate('/');
    setIsLoggedIn(false);
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.firstContainer}>
        <Link to={routes.HOME}>
          <img src={logo} alt='logo' className={styles.logo}/>
        </Link>
        { isLoggedIn && 
          <Link to={routes.COMPANIES} className={styles.span}>
            <span>Discover companies</span>
          </Link>
        }
        { (isAdmin && isLoggedIn) && 
          <Link to={routes.DASHBOARD} className={styles.span}>
            <span>Dashboard</span>
          </Link>
        }
      </div>
      {isLoggedIn ? 
        <div className={styles.buttonContainer}>
          <img src={profile} alt='logo' className={styles.profile}/>
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