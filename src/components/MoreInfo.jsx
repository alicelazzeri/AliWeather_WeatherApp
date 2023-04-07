import { Card, Col, Row } from "react-bootstrap";

const MoreInfo = () => {
  return (
    <Row className="my-5 ">
      <Col>
        <Card border="light">
          <Card.Header className="fw-light">🌬️ Wind</Card.Header>
          <Card.Body>
            <Card.Title>speed 14km/h</Card.Title>
            <Card.Text className="fw-light">Degrees: 120</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card border="light">
          <Card.Header className="fw-light">🌡️ Pressure</Card.Header>
          <Card.Body>
            <Card.Title>speed 14km/h</Card.Title>
            <Card.Text className="fw-light">Degrees: 120</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card border="light">
          <Card.Header className="fw-light">💦 Umidity</Card.Header>
          <Card.Body>
            <Card.Title>speed 14km/h</Card.Title>
            <Card.Text className="fw-light">Degrees: 120</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card border="light">
          <Card.Header className="fw-light">🫧 Perceived</Card.Header>
          <Card.Body>
            <Card.Title>speed 14km/h</Card.Title>
            <Card.Text className="fw-light">Degrees: 120</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default MoreInfo;
