/* eslint-disable react/react-in-jsx-scope */
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import WelcomePage from "./components/Welcome";
import Register from "./components/Register";
import LogIn from "./components/LogIn";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<LogIn/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
