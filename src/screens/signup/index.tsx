import styles from './styles.module.css';
import { FormEvent, useState } from 'react';
import { IGuestData } from '../../interfaces';
import { guestService } from '../../services/guestService';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../../components/navBar';

const initialForm : IGuestData = {
  email: '',
  password: '',
  passwordRepeat: ''
}

export function SignUp () {

  const [ formData, setFormData ] = useState(initialForm);
  const navigate = useNavigate();

  const arePasswordsEqual = formData.password === formData.passwordRepeat;
  const matchMessage = arePasswordsEqual ? '' : 'Password do not match';

  const postGuest = async (guest: IGuestData) => {
    const {res, error} = await guestService.postGuest(guest);
    if (!error) navigate('/');
    else alert(res);
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    postGuest(formData);
    setFormData(initialForm);
  }

  const handleChange = ( e: any) => {
    const { value, name } = e.target;
    setFormData(prevState => ({...prevState, [name]: value}));
  }

  return (
    <>
      <NavBar/>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <span className={styles.span}>Fill in the form to register as a guest user</span>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input className={styles.input} placeholder ='E-mail' name='email' value={formData.email} onChange={handleChange}/>
            <input className={styles.input} placeholder ='Password' name='password' type='password' value={formData.password} onChange={handleChange}/>
            <input className={styles.input} placeholder ='Confirm Password' name='passwordRepeat' type='password' value={formData.passwordRepeat} onChange={handleChange}/>
            <span className={styles.span}>{matchMessage}</span>
            <button className={styles.button} type='submit'>Sign up</button>
          </form>
        </div>     
      </div>
    </>
    
  )
}