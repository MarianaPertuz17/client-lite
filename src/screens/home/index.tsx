import { useEffect } from 'react';
import { NavBar } from '../../components/navBar';
import styles from './styles.module.css';

export function Home () {
  return (
    <div className={styles.fullPage}>
      <NavBar/>
      <div className={styles.container}>
        <div className={styles.welcomeTitle}>
          <span className={styles.firstTitle}>Get ready to discover</span>
          <span className={styles.secondTitle}>new companies</span>
        </div>
      </div>
    </div>
  )
}