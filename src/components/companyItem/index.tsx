import { ICompanyAttributes } from '../../interfaces';
import styles from './styles.module.css';

interface Props {
  company: ICompanyAttributes;
}

export function CompanyItem ({company}: Props) {
  return (
    <div className={styles.container}>
      
    </div>
  )
}