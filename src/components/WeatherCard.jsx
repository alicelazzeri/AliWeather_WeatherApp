import { useSelector } from "react-redux";

const WeatherCard = () => {
  const meteo = useSelector(state => state.meteo.content);
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
            <p className="card-text fw-light">
              <img src={icon} alt="Current weather" width={60} />
              {meteo.weather[0].description.charAt(0).toUpperCase() + meteo.weather[0].description.slice(1)}
            </p>
            <p className="card-text">
              <small className="text-body-secondary fw-light">
                Max. {parseFloat(meteo.main.temp_max).toFixed(0)}° Min. {parseFloat(meteo.main.temp_min).toFixed(0)}°
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
