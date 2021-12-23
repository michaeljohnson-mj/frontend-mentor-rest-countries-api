import React from "react";
import { numberWithCommas } from "../../../utils/NumberFormatter";
import styles from "../Countries.module.css";

function CountryCard(props) {
  const country = props.country
  return (
    <div className={styles.card}>
      <div className={styles["card-header"]}>
        <img src={country.flag} alt={`${country.name}'s Flag`} className={styles["flag-img"]} />
      </div>

      <div className={styles["card-content"]}>
        <h3>{country.name}</h3>
        <div className={styles["country-info-holder"]}>
          <div className={styles["country-data-value-holder"]}>
            <h5>Population:</h5>
            <span>{numberWithCommas(country.population)}</span>
          </div>
          <div className={styles["country-data-value-holder"]}>
            <h5>Region:</h5>
            <span>{country.region}</span>
          </div>
          <div className={styles["country-data-value-holder"]}>
            <h5>Capital:</h5>
            <span>{country.capital ? country.capital : "---"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
