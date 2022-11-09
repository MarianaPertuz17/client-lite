import { yellow } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import styles from './styles.module.css';
import { ChangeEvent } from 'react';

interface Props {
  selectedUser: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => any;
}

export const RadioButtons = ({selectedUser, handleChange}: Props) => {
  return (
    <RadioGroup
      aria-labelledby="demo-controlled-radio-buttons-group"
      name="controlled-radio-buttons-group"          
      value={selectedUser}
      onChange={handleChange}
    >
      <FormControlLabel 
        value="guest" 
        control={<Radio sx={{
          color: yellow[400],
          '&.Mui-checked': {
            color: yellow[400],
          },
        }}/>} 
        label="Log in as guest" 
        className={styles.span} 
      />
      <FormControlLabel 
        value="admin" 
        control={<Radio sx={{
          color: yellow[400],
          '&.Mui-checked': {
            color: yellow[400],
          },
        }}/>} 
        label="Log in as admin" 
        className={styles.span} 
      />
    </RadioGroup>

  )
}

