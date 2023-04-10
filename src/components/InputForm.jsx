import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const InputForm = () => {
  const [search, setSearch] = useState("");
  const endpoint = `http://api.openweathermap.org/geo/1.0/direct?q=${search}&lang=en&units=metric&appid=0fed715bb045ae4b8aceb8e42ee9243a`;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = event => {
    setSearch(event.target.value);
  };
  const searchInput = async event => {
    event.preventDefault();
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: "SEARCH_LOCATION", payload: data });
        navigate("/weather");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Row>
      <Col className="d-flex align-items-center justify-content-center">
        <Form onSubmit={searchInput}>
          <FloatingLabel
            id="locationInput"
            controlId="locationInput"
            label="Search for a location"
            className="mt-3 fw-light"
          >
            <Form.Control value={search} type="search" placeholder="Search for a location" onChange={handleSubmit} />
          </FloatingLabel>
        </Form>
      </Col>
    </Row>
  );
};

export default InputForm;
