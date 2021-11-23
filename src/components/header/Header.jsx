import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1>Where in the world?</h1>
      <div>
        <p>Dark Mode</p>
      </div>
    </header>
  );
}

export default Header;
