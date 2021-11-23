import React from "react";
import styles from "../Countries.module.css";

function CountryCard() {
  return (
    <div className={styles.card}>
      <div className={styles["card-header"]}>
        <img
          src="https://flagpedia.net/data/flags/w580/de.png"
          alt=""
          className={styles["flag-img"]}
        />
      </div>

      <div className={styles["card-content"]}>
        <h3>Germany</h3>
        <div className={styles["country-info-holder"]}>
          <div className={styles["country-data-value-holder"]}>
            <h5>Population:</h5>
            <span>9,999,999,999</span>
          </div>
          <div className={styles["country-data-value-holder"]}>
            <h5>Region:</h5>
            <span>Europe</span>
          </div>
          <div className={styles["country-data-value-holder"]}>
            <h5>Capital:</h5>
            <span>Berlin</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
