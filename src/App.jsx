import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Weather from "./components/Weather";
import Homepage from "./components/Homepage";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
