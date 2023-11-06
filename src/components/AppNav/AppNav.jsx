import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav() {
  return (
    <div className={styles.nav}>
      <div>
        <h2 style={{ color: "var(--color-brand--2)" }}>Visited</h2>
        <ul>
          <li>
            <NavLink to="visited-cities">Cities</NavLink>
          </li>
          <li>
            <NavLink to="visited-countries">Countries</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <h2 style={{ color: "var(--color-brand--1)" }}>Upcomming</h2>
        <ul>
          <li>
            <NavLink to="upcomming-cities">Cities</NavLink>
          </li>
          <li>
            <NavLink to="upcomming-countries">Countries</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AppNav;
