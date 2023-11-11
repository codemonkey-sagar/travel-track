import { useState } from "react";
import styles from "./CityItem.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city, color }) {
  const [isHovered, setIsHovered] = useState(false);
  const { cityName, emoji, date } = city;

  function handleMouseOver() {
    setIsHovered(true);
  }

  function handleMouseOut() {
    setIsHovered(false);
  }

  const buttonHoverStyle = {
    backgroundColor: isHovered ? color : "inherit",
  };

  return (
    <li className={styles.cityItem} style={{ borderLeftColor: color }}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>{formatDate(date)}</time>
      <button
        className={styles.deleteBtn}
        style={buttonHoverStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onFocus={handleMouseOver}
        onBlur={handleMouseOut}
      >
        &times;
      </button>
    </li>
  );
}

export default CityItem;
