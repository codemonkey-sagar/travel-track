import { useParams } from "react-router-dom";

function City() {
  const { id } = useParams();
  return <h1>City City City {id}</h1>;
}

export default City;
