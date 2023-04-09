import { Link } from "react-router-dom";
import logo from "../logo.png";

const MyFooter = () => {
  return (
    <footer className="footerBg d-flex justify-content-between flex-wrap align-items-center p-4">
      <div class="d-flex align-items-center gap-3 col-md-4">
        <Link href="#">
          <img className="rounded-circle border border-white border-1" src={logo} width="40px" alt="Logo" />
        </Link>
        <p className="footerFont mb-0 fw-lighter">
          &#169; 2023
          <span className="footerFont ms-2 ">AliWeather</span>
        </p>
      </div>
    </footer>
  );
};

export default MyFooter;
