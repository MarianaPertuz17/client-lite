import styles from './styles.module.css';
import { NavBar } from '../../components/navBar';
import { useEffect, useState } from 'react';
import { List } from '../../components/list';
import { guestService } from '../../services/guestService';
import { ItemAttributes } from '../../interfaces';
import { useParams } from 'react-router-dom'
import { Header } from '../../components/companyHeader';


export function Inventory () {
  return (
    <h1> HOLA </h1>    
  )
}