import { AltNavBar } from '../../components/altNavBar';
import styles from './styles.module.css';

export function Login () {

  const handleSubmit = (e: any) => {
    e.preventDefault();
  }

  return (
    <>
      <AltNavBar/>
      <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input placeholder ='E-mail'/>
        <input placeholder ='Password'/>
        <button className={styles.loginButton} type='submit'>Log in</button>
      </form>
    </div>
    </>
    
  )
}