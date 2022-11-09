import { AltNavBar } from '../../components/altNavBar';
import styles from './styles.module.css';
import { useState, ChangeEvent, FormEvent } from 'react';
import { ILoginUserData } from '../../interfaces';
import { RadioButtons } from '../../components/radioGroup';
import { guestService } from '../../services/guestService';
import { adminService } from '../../services/adminService';

const initialLoginFormData : ILoginUserData = {
  email: '',
  password: '',
}

export function Login () {

  const [ formData, setFormData ] = useState<ILoginUserData>(initialLoginFormData);
  const [ selectedUser, setSelectedUser ] = useState('guest');

  const postLoginUser = async (userData: ILoginUserData, user: string) => {
    let response = '';
    let err = '';

    if (user === 'guest') {
      const {res, error} = await guestService.postLoginGuest(userData);
      response = res;
      err = error;
    } else {
      const {res, error} = await adminService.postLoginAdmin(userData);
      response = res;
      err = error;
    }
    
    if (!err) alert(response);
    else alert(response);
  }

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