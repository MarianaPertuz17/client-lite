import profile from '../../assets/images/profile.png';
import styles from './styles.module.css';
import { useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';


export function Dropdown() {
  const [open, setOpen] = useState(false);

  return (
    // <div className={styles.menuContainer}>
    //   <div className={styles.menuTrigger} onClick={()=>{setOpen(!open)}}>
    //    <img src={profile} alt='logo' className={styles.profile}/>
    //   </div>
    //   {open &&
    //     <ul>
    //       <li className = {styles.dropdownItem}>
    //         <a>Dashboard</a>
    //       </li>
    //     </ul>
    //   }
    // </div>

    <NavDropdown
      id="nav-dropdown-dark-example"
      title="Dropdown"
      menuVariant="dark"
    >
      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">
        Another action
      </NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.4">
        Separated link
      </NavDropdown.Item>
    </NavDropdown>
    
  );
}
