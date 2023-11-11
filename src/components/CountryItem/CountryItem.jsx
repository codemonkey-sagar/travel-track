import styles from "./CountryItem.module.css";

function CountryItem({ country, color }) {
  return (
    <li className={styles.countryItem} style={{ borderLeftColor: color }}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
