import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { getPlanetById } from "../api/swapi";

const PlanetDetail = () => {
  const { id } = useParams();
  const { data: planet, loading, error } = useFetch(getPlanetById, id);


  if (loading) return <p>Loading ....</p>;
  if (error) return <p>Error loading planet.</p>;

  return (
    <div>
      <h1>{planet.properties.name}</h1>
      <h3>{planet.properties.climate}</h3>
      <h3>{planet.properties.terrain}</h3>
      <h3>{planet.properties.gravity}</h3>
      <h3>{planet.properties.orbital_period}</h3>

    </div>
  );
};

export default PlanetDetail;