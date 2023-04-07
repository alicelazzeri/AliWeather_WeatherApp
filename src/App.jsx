import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Weather from "./components/Weather";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
