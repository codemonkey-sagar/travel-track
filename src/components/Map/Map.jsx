import { useSearchParams, useNavigate } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div
      className={styles.mapContainer}
      onClick={() => navigate("form")}
      aria-hidden="true"
    >
      <h1>MAP</h1>
      <h2>
        Position: {lat}----- {lng}
      </h2>
      <button onClick={() => setSearchParams({ lat: 40, lng: 20 })}>
        Change POSITION
      </button>
    </div>
  );
}

export default Map;
