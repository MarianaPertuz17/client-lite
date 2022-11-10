import { ICompanyAttributes } from '../../interfaces';
import { CompanyItem } from '../companyItem';
import styles from './styles.module.css';

interface ListProps {
  list: ICompanyAttributes[];
}

export function CompanyList ({list}: ListProps) {
  return (
    <div className={styles.container}>
      {list.map((company, index) => <CompanyItem company={company}/> )}
    </div>
  )
}