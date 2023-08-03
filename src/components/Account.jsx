import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import classes from "./styles/account.module.css";

export default function Account() {
  const { currentUser, logout } = useAuth();
  return (
    <div className={classes.account}>
      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          {/* problem line, project shese somadhan khujbo inshallah */}
          <span>{currentUser.displayName}</span>
          <span
            className="material-icons-outlined"
            title="Logout"
            onClick={logout}
            to="/Home"
          >
            {" "}
            logout{" "}
          </span>
        </>
      ) : (
        <>
          <Link to="/Signup">Signup</Link>
          <Link to="/Login">Login</Link>
        </>
      )}
    </div>
  );
}
