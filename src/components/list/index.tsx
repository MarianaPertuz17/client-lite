import { ItemAttributes } from '../../interfaces';
import { EditableItem } from '../editableItem';
import { Item } from '../item';
import styles from './styles.module.css';


interface ListProps {
  list: ItemAttributes[];
  isAdmin?:boolean;
}

export function List ({list, isAdmin}: ListProps) {
  return (
    <div className={styles.container}>
      {list.map((item, index) => <>{!isAdmin ? <Item key={item.NIT} item={item}/> : <EditableItem key={item.NIT}  item={item} isAdmin={isAdmin}/>}</>)}
    </div>
  )
}