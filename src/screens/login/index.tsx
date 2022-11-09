import { AltNavBar } from '../../components/altNavBar';
import styles from './styles.module.css';
import { yellow } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState, ChangeEvent } from 'react';

export function Login () {

  const [value, setValue] = useState('guest');

  const handleSubmit = (e: any) => {
    e.preventDefault();
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <AltNavBar/>
      <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input placeholder ='E-mail'/>
        <input placeholder ='Password'/>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          sx={{
            color: yellow[400],
            '&.Mui-checked': {
              color: yellow[400],
            },
          }}
          
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="guest" control={<Radio />} label="Log in as guest" className={styles.span} />
          <FormControlLabel value="admin" control={<Radio />} label="Log in as admin" />
        </RadioGroup>
        <button className={styles.loginButton} type='submit'>Log in</button>
      </form>
    </div>
    </>
    
  )
}