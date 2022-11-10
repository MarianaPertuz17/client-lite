import { ItemAttributes } from '../../interfaces';
import { Item } from '../item';
import styles from './styles.module.css';

interface ListProps {
  list: ItemAttributes[];
}

export function List ({list}: ListProps) {
  return (
    <div className={styles.container}>
      {list.map((item, index) => <Item item={item}/> )}
    </div>
  )
}