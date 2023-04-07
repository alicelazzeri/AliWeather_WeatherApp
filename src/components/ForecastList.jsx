import { useEffect } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const ForecastList = () => {
  const dispatch = useDispatch();
  const settimana = useSelector(state => state.settimana.content);
  const longitude = "10.5258221";
  const latitude = "42.9332727";
  const endpoint = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&lang=en&units=metric&appid=0fed715bb045ae4b8aceb8e42ee9243a`;
  const request = async endpoint => {
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch({ type: "WEEKLY_WEATHER", payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    request(endpoint);
  }, []);

  return (
    <Container>
      {settimana !== null && (
        <>
          <ListGroup variant="flush">
            {settimana.list.map((day, index) => (
              <ListGroup.Item key={{ index }} className="d-flex justify-content-around align-items-center">
                <div>
                  <span className="pe-4 fw-light">{day.dt_txt}</span>
                  <img src="https://www.pngmart.com/files/3/Weather-PNG-HD.png" alt="Weather" width={40} />
                </div>

                <p className="fw-light mb-0">{day.weather.description}</p>

                <div className="d-flex flex-row">
                  <p className="fw-light mb-0">
                    {" "}
                    <span>9°</span> &#8211; <span>20</span>
                  </p>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </>
      )}
    </Container>
  );
};

export default ForecastList;
