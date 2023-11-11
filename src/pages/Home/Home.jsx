import { Link } from "react-router-dom";
import PageNav from "../../components/PageNav/PageNav";
import styles from "./Home.module.css";

function Home() {
  return (
    <main className={styles.home}>
      <PageNav />
      <section>
        <h1>
          Track Your Travel.
          <br />
          Share Your Adventures with the world
        </h1>
        <h2>
          Explore the world and never forget your amazing journeys with Travel
          Track. Log the place you have visited, share your expericences, and
          plan future adventures.
        </h2>
        <div>
          <Link to="/login" className="cta">
            Start tracking now
          </Link>
          <Link
            to="/demo-app"
            className="cta"
            style={{ backgroundColor: "var(--color-brand--1)" }}
          >
            Try demo
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
