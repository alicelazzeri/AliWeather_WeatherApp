import { Container, Navbar } from "react-bootstrap";
import logo from "../logo.png";
import { useNavigate } from "react-router-dom";

const MyNav = () => {
  const navigate = useNavigate();
  return (
    <Navbar id="navBar" variant="dark" className="py-3">
      <Container>
        <Navbar.Brand
          onClick={() => {
            navigate("/");
          }}
        >
          <div className="d-flex align-items-center gap-3">
            <img id="navLogo" alt="Logo" src={logo} width="60" className="d-inline-block align-top rounded-circle" />
            <p className="display-6 mb-0 fw-normal navTitle">AliWeather</p>
          </div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default MyNav;
