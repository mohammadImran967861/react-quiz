import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo-bg.png";
import Account from "./Account";
import "./styles/App.css";
import classes from "./styles/nav.module.css";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink to="/hello" className={classes.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </NavLink>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
