import { AltNavBar } from '../../components/altNavBar';
import styles from './styles.module.css';
import { FormEvent, useEffect, useState } from 'react';
import { IGuestData, IForm } from '../../interfaces';

const initialForm : IGuestData = {
  email: '',
  password: '',
  passwordRepeat: ''
}

export function SignUp ({postGuest}: IForm) {

  const [ formData, setFormData ] = useState(initialForm);

  const arePasswordsEqual = formData.password === formData.passwordRepeat;
  const matchMessage = arePasswordsEqual ? '' : 'Password do not match';

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
      <AltNavBar/>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <span className={styles.span}>Fill in the form to register as a guest user</span>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input className={styles.input} placeholder ='E-mail' name='email' value={formData.email} onChange={handleChange}/>
            <input className={styles.input} placeholder ='Password' name='password' type='password' value={formData.password} onChange={handleChange}/>
            <input className={styles.input} placeholder ='Confirm Password' name='passwordRepeat' type='password' value={formData.passwordRepeat} onChange={handleChange}/>
            <span className={styles.span}>{matchMessage}</span>
            <button className={styles.signUpButton} type='submit'>Sign up</button>
          </form>
        </div>     
      </div>
    </>
    
  )
}