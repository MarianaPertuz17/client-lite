import { AltNavBar } from '../../components/altNavBar';
import styles from './styles.module.css';
import { FormEvent, useState } from 'react';
import { IGuestData, IForm } from '../../interfaces';

const initialForm : IGuestData = {
  email: '',
  password: '',
}

export function SignUp ({postGuest}: IForm) {

  const [ formData, setFormData ] = useState(initialForm);

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
      <form className={styles.form} onSubmit={handleSubmit}>
        <input placeholder ='E-mail' name='email' value={formData.email} onChange={handleChange}/>
        <input placeholder ='Password' name='password' value={formData.password} onChange={handleChange}/>
        <button className={styles.signUpButton} type='submit'>Sign up</button>
      </form>
    </div>
    </>
    
  )
}