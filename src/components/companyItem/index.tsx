import { Link } from 'react-router-dom';
import { ICompanyAttributes } from '../../interfaces';
import styles from './styles.module.css';

interface Props {
  company: ICompanyAttributes;
}

export function CompanyItem ({company}: Props) {
  
  const { name, address, phone, NIT} = company;

  return (
    <Link to={`${NIT}`}>
      <button className={styles.container}>
        <h2>{name}</h2>
        <p><span className={styles.span}>Address: </span>{address}</p>
        <p><span className={styles.span}>Phone: </span>{phone}</p>
        <p><span className={styles.span}>NIT: </span>{NIT}</p>
      </button>
    </Link>
  )
}