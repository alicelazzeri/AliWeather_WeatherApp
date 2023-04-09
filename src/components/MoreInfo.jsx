import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const MoreInfo = () => {
  const meteo = useSelector(state => state.meteo.content);

  return (
    <Container>
      <Row xs={2} md={4} className="mt-3 mb-5 g-5">
        <Col>
          <Card className="infoCard" border="light">
            <Card.Header className="fw-light cardHeader">🌬️ Wind</Card.Header>
            <Card.Body>
              <Card.Title className="fw-bold">{parseFloat(meteo.wind.speed).toFixed(0)} m/sec</Card.Title>
              <Card.Text className="fw-light">Wind speed</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="infoCard" border="light">
            <Card.Header className="fw-light cardHeader">🌡️ Pressure</Card.Header>
            <Card.Body>
              <Card.Title className="fw-bold">{parseFloat(meteo.main.pressure).toFixed(0)} hPa</Card.Title>
              <Card.Text className="fw-light">Atmospheric pressure</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="infoCard" border="light">
            <Card.Header className="fw-light cardHeader">💦 Humidity</Card.Header>
            <Card.Body>
              <Card.Title className="fw-bold">{parseFloat(meteo.main.humidity).toFixed(0)} %</Card.Title>
              <Card.Text className="fw-light">Air humidity</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="infoCard" border="light">
            <Card.Header className="fw-light cardHeader">🫧 Perceived</Card.Header>
            <Card.Body>
              <Card.Title className="fw-bold">{parseFloat(meteo.main.feels_like).toFixed(0)}°</Card.Title>
              <Card.Text className="fw-light">Temperature perceived</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MoreInfo;
