import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <Link className={styles.menuMarca} to="/home">DH Odonto</Link>
        <div >
          <ul className={styles.navMenu}>
            <li className={styles.menuLink}>
              <Link className="menuLink" to="/home">Home</Link>
            </li>
            <li className={styles.menuLink}>
              <Link  to="/Contact">Contact</Link>
            </li>
            <li className={styles.menuLink}>
              <Link to="/Favs">Favs</Link>
            </li>
            <li className={styles.menuLink}>
            <button className={styles.btnStylo}>🌖</button>
            </li>
          </ul>
          
        </div>
        
      </nav>
    </header>
  );
};

export default Navbar;
