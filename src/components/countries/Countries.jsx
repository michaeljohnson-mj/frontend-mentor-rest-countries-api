import React from "react";
import styles from "./Countries.module.css";
import CountryCard from "./country-card/CountryCard";

function Countries() {
  return (
    <div className={styles["countries-container"]}>
      <div className={styles["search-and-filter-holder"]}>
        <input
          type="text"
          placeholder="Search for a country..."
          className={styles["search-input"]}
        />
        <select className={styles["continent-filter"]} name="" id="">
          <option value="asia">Africa</option>
          <option value="asia">America</option>
          <option value="asia">Asia</option>
          <option value="asia">Europe</option>
          <option value="asia">Oceania</option>
        </select>
      </div>
      <CountryCard />
    </div>
  );
}

export default Countries;
