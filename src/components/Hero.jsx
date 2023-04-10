import logo from "../logo.png";
import InputForm from "./InputForm";

const Hero = () => {
  return (
    <div id="heroContainer">
      <img src={logo} width={300} alt="Logo" />
      <h1 className="fw-light navTitle mt-1">AliWeather</h1>
      <p class="lead navTitle">Your personal weather broadcast, just one click away!</p>
      <InputForm />
    </div>
  );
};

export default Hero;
