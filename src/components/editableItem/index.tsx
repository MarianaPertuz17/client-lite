import { ItemAttributes } from '../../interfaces';
import styles from './styles.module.css';
import edit from '../../assets/images/edit.png';
import deleteIcon from '../../assets/images/trash.png'
import eye from '../../assets/images/eye.png';
import { useContext, useState } from 'react';
import { AppContext } from '../../context';
import { ChangeEvent } from 'react';
import { FormEvent } from 'react';

interface Props {
  item: ItemAttributes;
  isAdmin?: boolean;
}

export function EditableItem ({item, isAdmin}: Props) {
  
  const { name, address, phone, NIT } = item;
  const { deleteCompany, editCompany } = useContext(AppContext);

  const initialForm : ItemAttributes = {name, address, phone, NIT};
  
  const [ formData, setFormData ] = useState(initialForm);
  const [ isEditingCompany, setIsEditingCompany ] = useState(false);
  
  const handleChange = ( e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData(prevState => ({...prevState, [name]: value}));
  }

  const handleSubmit = (e: FormEvent ) => {
    e.preventDefault();
    editCompany(formData);
    setIsEditingCompany(false);
  }

  return (
    <button className={styles.container__withIcons}>
      { !isEditingCompany ?
        <div>
          <h2>{name}</h2>
          <p><span className={styles.span}>Address: </span>{address}</p>
          <p><span className={styles.span}>Phone: </span>{phone}</p>
          <p><span className={styles.span}>NIT: </span>{NIT}</p>
        </div>:
        <form onSubmit={handleSubmit}>
          <input className={styles.input} placeholder={name} name='name' value={formData.name} onChange={(e) => handleChange(e)}/>
          <p><span className={styles.span}>Address: </span><input className={styles.input} placeholder ={address} name='address' value={formData.address} onChange={(e) => handleChange(e)}/></p>
          <p><span className={styles.span}>Phone: </span><input className={styles.input} placeholder ='Phone' name='phone' type='text' value={formData.phone} onChange={(e) => handleChange(e)}/></p>
          <p><span className={styles.span}>NIT: </span><input className={styles.input} placeholder ='NIT' name='NIT' type='text' value={formData.NIT} onChange={(e) => handleChange(e)}/></p>
          <button className={styles.submitButton} type='submit'>Save</button>
        </form>
      }
      { isAdmin && 
      <div className={styles.iconContainer}>
        <button className={styles.button} onClick={() => setIsEditingCompany(!isEditingCompany)}>
          <img className={styles.img} alt='edit' src={edit}/>
        </button>
        <button className={styles.button} onClick={()=> deleteCompany(NIT)}>
          <img className={styles.img} alt='delete' src={deleteIcon}/>
        </button>
        <button className={styles.button}>
          <img className={styles.img} alt='see' src={eye}/>
        </button>
      </div>
      }
    </button>
  )
}