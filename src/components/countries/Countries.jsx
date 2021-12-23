import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/ducks/countries";
import styles from "./Countries.module.css";
import CountryCard from "./country-card/CountryCard";

const Countries = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

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

      <div className={styles["grid-4-col"]}>
        {countries &&
          countries.length > 0 &&
          countries.map((country) => {
            return <CountryCard country={country} />;
          })}

        {countries && countries.length === 0 && (
          <div className={styles["no-record-text"]}>No Countries Found</div>
        )}
      </div>
    </div>
  );
};

export default Countries;
