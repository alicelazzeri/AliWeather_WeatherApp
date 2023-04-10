import WeatherCard from "./WeatherCard";
import ForecastList from "./ForecastList";
import { Container, Spinner } from "react-bootstrap";
import MoreInfo from "./MoreInfo";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import HomeButton from "./HomeButton";

const Weather = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const coord = useSelector(state => state.coord.content);
  const lat = coord[0].lat;
  const lon = coord[0].lon;
  const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=en&units=metric&appid=0fed715bb045ae4b8aceb8e42ee9243a`;

  const request = async endpoint => {
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const data = await response.json();
        setIsLoading(false);
        dispatch({ type: "CURRENT_WEATHER", payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    request(endpoint);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const meteo = useSelector(state => state.meteo.content);
  return (
    <Container fluid>
      <>
        {isLoading && (
          <div className="container-fluid d-flex justify-content-center">
            <Spinner variant="primary" animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
      </>
      {meteo !== null && (
        <>
          <WeatherCard />
          <HomeButton />
          <ForecastList />
          <MoreInfo />
        </>
      )}
    </Container>
  );
};

export default Weather;
