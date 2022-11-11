import { ItemAttributes } from '../../interfaces';
import styles from './styles.module.css';
import edit from '../../assets/images/edit.png';
import deleteIcon from '../../assets/images/trash.png'
import eye from '../../assets/images/eye.png';
import { useContext } from 'react';
import { AppContext } from '../../context';

interface Props {
  item: ItemAttributes;
  isAdmin?: boolean;
}

export function EditableItem ({item, isAdmin}: Props) {
  
  const { name, address, phone, NIT } = item;
  const { deleteCompany } = useContext(AppContext);

  return (
    <button className={styles.container__withIcons}>
      <div>
        <h2>{name}</h2>
        <p><span className={styles.span}>Address: </span>{address}</p>
        <p><span className={styles.span}>Phone: </span>{phone}</p>
        <p><span className={styles.span}>NIT: </span>{NIT}</p>
      </div>
      { isAdmin && 
      <div className={styles.iconContainer}>
        <button className={styles.button}>
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