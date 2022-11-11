import { Link } from 'react-router-dom';
import { ItemAttributes } from '../../interfaces';
import styles from './styles.module.css';
import edit from '../../assets/images/edit.png';
import deleteIcon from '../../assets/images/trash.png'

interface Props {
  item: ItemAttributes;
  isAdmin?: boolean;
}

export function Item ({item, isAdmin}: Props) {
  
  const { name, address, phone, NIT, productName, quantity} = item;

  return (
    <>
      {item.NIT ? 
        <Link to={`${NIT}`} style={{textDecoration: 'none'}}>
          <button className={styles.container}>
            <h2>{name}</h2>
            <p><span className={styles.span}>Address: </span>{address}</p>
            <p><span className={styles.span}>Phone: </span>{phone}</p>
            <p><span className={styles.span}>NIT: </span>{NIT}</p>
          </button>
        </Link>:
        <button className={styles.container}>
          <h2>{productName}</h2>
          <p><span className={styles.span}>stock: </span>{quantity}</p>
        </button>
        }
    </>
    
  )
}