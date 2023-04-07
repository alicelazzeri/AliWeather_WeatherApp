import { useSelector } from "react-redux";

const WeatherCard = () => {
  const meteo = useSelector(state => state.meteo.content);
  const icon = `https://openweathermap.org/img/w/${meteo.weather[0].icon}.png`;
  <div className="card mb-5 border border-light">
    <div className="row g-0 d-flex justify-content-center align-items-center">
      <div className="col-md-4 d-flex justify-content-center">
        <img src={icon} className="img-fluid" alt="Current weather" />
      </div>
      <div className="col-md-8">
        <div className="card-body text-center">
          <h5 className="card-title display-4">{meteo.name}</h5>
          <p className="card-title display-2 fw-normal">{meteo.main.temp}</p>
          <p className="card-text fw-light">{meteo.weather[0].description}</p>
          <p className="card-text">
            <small className="text-body-secondary fw-light">
              Max {meteo.main.temp_max}° Min {meteo.main.temp_min}°
            </small>
          </p>
        </div>
      </div>
    </div>
  </div>;
};

export default WeatherCard;
