import { ICompanyAttributes } from '../../interfaces';
import styles from './styles.module.css';

interface Props {
  company: ICompanyAttributes;
}

export function Header ({company}: Props) {
  
  const { name, address, phone, NIT} = company;

  return (
    <div className={styles.container}>
      <div className={styles.nit}>NIT: {NIT}</div>
      <h1 className={styles.h1}>{name}</h1>
      <p><span className={styles.span}>Address: </span>{address}</p>
      <p><span className={styles.span}>Phone: </span>{phone}</p>
    </div>
  )
}