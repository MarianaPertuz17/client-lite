import styles from './styles.module.css';

interface Props {
  icon: string;
  title: string;
}

export function DashboardItem ({icon, title}: Props) {
  
  return (
    <div className={styles.container}>
      <img alt={title} src={icon} className={styles.img}/>
      <p>{title}</p>
    </div>
  )
}