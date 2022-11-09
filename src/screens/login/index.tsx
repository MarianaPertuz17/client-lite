import { AltNavBar } from '../../components/altNavBar';
import styles from './styles.module.css';
import { useState, ChangeEvent, FormEvent } from 'react';
import { ILoginUserData, ILoginForm } from '../../interfaces';
import { RadioButtons } from '../../components/radioGroup';

const initialLoginFormData : ILoginUserData = {
  email: '',
  password: '',
}

export function Login ({postLoginUser}: ILoginForm) {

  const [ formData, setFormData ] = useState<ILoginUserData>(initialLoginFormData);
  const [ selectedUser, setSelectedUser ] = useState('guest');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    postLoginUser(formData, selectedUser);
    setFormData(initialLoginFormData);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    if (value === 'guest' || value === 'admin') setSelectedUser((e.target as HTMLInputElement).value);
    else setFormData((prevState: ILoginUserData) => ({...prevState, [name]: value}));
  };


  return (
    <>
      <AltNavBar/>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input placeholder ='E-mail'/>
            <input placeholder ='Password'/>
            <RadioButtons selectedUser={selectedUser} handleChange={handleChange}/>
            <button className={styles.button} type='submit'>Log in</button>
          </form>

        </div>
    </div>
    </>
    
  )
}