import { Link } from 'react-router-dom';
import { ItemAttributes } from '../../interfaces';
import styles from './styles.module.css';
import edit from '../../assets/images/edit.png';
import deleteIcon from '../../assets/images/trash.png'

interface Props {
  item: ItemAttributes;
  isAdmin?: boolean;
}

export function EditableItem ({item, isAdmin}: Props) {
  
  const { name, address, phone, NIT } = item;

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
        <img className={styles.img} alt='edit' src={edit}/>
        <img className={styles.img} alt='delete' src={deleteIcon}/>
      </div>
      }
    </button>
  )
}