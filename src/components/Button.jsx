import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HomeButton = () => {
  const navigate = useNavigate();
  return (
    <Row>
      <Col className="d-flex justify-content-center align-items-center">
        <Button className="mt-5 mb-5" variant="outline-warning" onClick={() => navigate("/")}>
          Go to Homepage
        </Button>
      </Col>
    </Row>
  );
};

export default HomeButton;
