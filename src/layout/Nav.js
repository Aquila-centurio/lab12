import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import logo from "../images/logo.svg";
import calculationIcon from "../images/calculation.svg";
import measuringIcon from "../images/measering.svg";

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <ul className={styles.menu}>
        <li><Link to="/">Services</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about-us">About us</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
      </ul>
      <div className={styles.buttons}>
        <button className={styles.requestButton}>
          <img src={measuringIcon} alt="Measuring" />
          Make request
        </button>
        <button className={styles.calcButton}>
          <img src={calculationIcon} alt="Calculation" />
          Calculation
        </button>
      </div>
    </nav>
  );
};

export default Nav;
