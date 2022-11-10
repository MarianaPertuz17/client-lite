import { Link } from 'react-router-dom';
import { ItemAttributes } from '../../interfaces';
import styles from './styles.module.css';

interface Props {
  item: ItemAttributes;
}

export function Item ({item}: Props) {
  
  const { name, address, phone, NIT, productName, quantity} = item;

  return (
    <>
      {item.NIT ? 
        <Link to={`${NIT}`}>
          <button className={styles.container}>
            <h2>{name}</h2>
            <p><span className={styles.span}>Address: </span>{address}</p>
            <p><span className={styles.span}>Phone: </span>{phone}</p>
            <p><span className={styles.span}>NIT: </span>{NIT}</p>
          </button>
        </Link>:
        <button className={styles.container}>
          <h2>{productName}</h2>
          <p><span className={styles.span}>quantity: </span>{quantity}</p>
        </button>
        }
    </>
    
  )
}