/* eslint-disable react/react-in-jsx-scope */
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import WelcomePage from "./components/Init/Welcome";
import Register from "./components/Init/Register/Register";
import LogIn from "./components/Init/LogIn/LogIn";

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
