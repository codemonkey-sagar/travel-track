import Spinner from "../Global/Spinner/Spinner";
import Message from "../Message/Message";
import CityItem from "../CityItem/CityItem";
import styles from "./CityList.module.css";

function CityList({ cities, isLoading, color }) {
  if (isLoading) return <Spinner />;

  if (!cities.length) {
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  }
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} color={color} />
      ))}
    </ul>
  );
}

export default CityList;
