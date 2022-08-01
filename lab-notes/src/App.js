/* eslint-disable react/react-in-jsx-scope */
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import WelcomePage from "./components/Init/Welcome";
import Register from "./components/Init/Register/Register";
import LogIn from "./components/Init/LogIn/LogIn";
import Home from "./components/Home/Home"

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<LogIn/>} />
          <Route exact path="/home" element={<Home/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
