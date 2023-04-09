import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HomeButton = () => {
  const navigate = useNavigate();
  return (
    <Row>
      <Col className="text-center mb-5">
        <Button
          onClick={() => {
            navigate("/");
          }}
          className="fs-5"
          variant="outline-secondary"
        >
          Go to Homepage
        </Button>
      </Col>
    </Row>
  );
};

export default HomeButton;
