import styles from './styles.module.css';

interface Props {
  icon: string;
  title: string;
  handleClick: (option: string) => any;
}

export function DashboardItem ({icon, title, handleClick}: Props) {  
  return (
    <button className={styles.container} onClick={() => handleClick(title)}>
      <img alt={title} src={icon} className={styles.img}/>
      <p>{title}</p>
    </button>
  )
}