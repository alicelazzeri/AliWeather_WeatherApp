import { Card, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const WeatherCard = () => {
  const meteo = useSelector(state => state.meteo.content);
  const sunriseTime = meteo.sys.sunrise;
  const sunsetTime = meteo.sys.sunset;
  const sunriseDate = new Date(sunriseTime * 1000);
  const sunsetDate = new Date(sunsetTime * 1000);
  const icon = `https://openweathermap.org/img/w/${meteo.weather[0].icon}.png`;
  return (
    <div id="weatherCard" className="card mb-5 py-5 mx-5">
      <div className="row g-0 d-flex justify-content-center align-items-center">
        <div className="col-md-8">
          <div className="card-body text-center d-flex flex-column align-items-center">
            <h5 id="city" className="card-title display-1 text-light">
              {" "}
              {meteo.name}
            </h5>
            <p className="card-title display-2 fw-normal">{parseFloat(meteo.main.temp).toFixed(0)}°</p>
            <p className="card-text fw-light me-4">
              <img src={icon} alt="Current weather" width={70} />
              {meteo.weather[0].description.charAt(0).toUpperCase() + meteo.weather[0].description.slice(1)}
            </p>
            <p className="card-text">
              <small className="text-body-secondary fw-light">Max. {parseFloat(meteo.main.temp_max).toFixed(0)}°</small>
            </p>
            <p className="card-text">
              <small className="text-body-secondary fw-light">Min. {parseFloat(meteo.main.temp_min).toFixed(0)}°</small>
            </p>
          </div>
        </div>
        <Col id="cardsCol">
          <Card border="light" className="text-center mx-5 my-5 infoCard">
            <Card.Header className="fw-light cardHeader">🌄 Sunrise</Card.Header>
            <Card.Body>
              <Card.Text className="fw-light">Sun will rise at:</Card.Text>
              <Card.Title className="fw-bold">
                {sunriseDate.toLocaleTimeString("en-UK", {
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZone: "Europe/London",
                })}
              </Card.Title>
            </Card.Body>
          </Card>
          <Card border="light" className="text-center mx-5 mt-5 infoCard">
            <Card.Header className="fw-light cardHeader">🌅 Sunset</Card.Header>
            <Card.Body>
              <Card.Text className="fw-light">Sun will set at:</Card.Text>
              <Card.Title className="fw-bold">
                {sunsetDate.toLocaleTimeString("en-UK", {
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZone: "Europe/London",
                })}
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </div>
  );
};

export default WeatherCard;
