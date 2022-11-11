import { ItemAttributes } from '../../interfaces';
import styles from './styles.module.css';
import { FormEvent, ChangeEvent } from 'react';

interface Props {
  formData: ItemAttributes;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => any;
  handleSubmit: (e: FormEvent) => any;
}


export function ItemForm ({formData, handleChange, handleSubmit}: Props) {

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input className={styles.input} required placeholder ='Item name' name='name' value={formData.productName} onChange={(e) => handleChange(e)}/>
          <input className={styles.input} required placeholder ='Quantity' name='quantity' type='text' value={formData.quantity} onChange={(e) => handleChange(e)}/>
        </div>
        <button className={styles.button} type='submit'>Add item</button>
      </form>
    </div>
  )
}