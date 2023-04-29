import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import FirstComponent from "./components/FirstComponent";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<FirstComponent />} />
        {/* <Route path="/BasicChatApp" element={} />
      <Route path="/BasicChatApp/Login" element={} /> */}
      </Routes>
    </div>
  );
}

export default App;
