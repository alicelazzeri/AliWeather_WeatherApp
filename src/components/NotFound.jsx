import logo from "../logo.png";
import HomeButton from "./HomeButton";
const NotFound = () => {
  return (
    <div id="heroContainer" className="text-center">
      <img src={logo} width={300} alt="Logo" />
      <h1 className="fw-light navTitle mt-1">404 &ndash; Page not found</h1>
      <p class="lead navTitle mb-5">
        We're sorry, but the page you were looking for doesn't seem to exist. Try searching for another page or go back
        to the homepage.
      </p>
      <HomeButton />
    </div>
  );
};

export default NotFound;
