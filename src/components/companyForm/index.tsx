import { ItemAttributes } from '../../interfaces';
import styles from './styles.module.css';
import { FormEvent, ChangeEvent } from 'react';

interface Props {
  formData: ItemAttributes;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => any;
  handleSubmit: (e: FormEvent) => any;
}


export function CompanyForm ({formData, handleChange, handleSubmit}: Props) {

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <div>
          <h3 className={styles.title}>Basic information</h3>
          <label>Company name:</label>
          <input className={styles.input} required placeholder ='Name' name='name' value={formData.name} onChange={(e) => handleChange(e)}/>
          <label>NIT:</label>
          <input className={styles.input} required placeholder ='NIT' name='NIT' type='text' value={formData.NIT} onChange={(e) => handleChange(e)}/>
        </div>
        <div>
          <h3 className={styles.title}>Contact information</h3>
          <label>Phone:</label>
          <input className={styles.input} required placeholder ='Phone' name='phone' type='text' value={formData.phone} onChange={(e) => handleChange(e)}/>
          <label>Address:</label>
          <input className={styles.input} required placeholder ='Address' name='address' type='text' value={formData.address} onChange={(e) => handleChange(e)}/>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button} type='submit'>Add company</button>
        </div>
      </form>
    </div>
  )
}