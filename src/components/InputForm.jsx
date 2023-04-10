import { Button, Col, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const InputForm = () => {
  return (
    <Row>
      <Col className="d-flex align-items-center justify-content-center">
        <FloatingLabel
          id="locationInput"
          controlId="locationInput"
          label="Search for a location"
          className="mt-3 fw-light w-50"
        >
          <Form.Control type="text" placeholder="Search for a location" />
        </FloatingLabel>
        <Button id="searchButton" variant="outline-secondary" className="fw-light">
          Search
        </Button>
      </Col>
    </Row>
  );
};

export default InputForm;
