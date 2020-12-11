import './App.scss';
import { Login, Login2 } from "./Components/Login/indexlogin";
import { Register } from "./Components/Register/indexregister";
import { Home } from "./Components/Home/indexhome";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";

// Test

function App() {
  return (
    
    <div className="App">
      <div className="background">
      <Router>
        <Route path="/" exact component={ Login } />
        <Route path="/login" exact component={ Login2 }/>
        <Route path="/register" exact component= { Register }/>
        <Route path="/home" exact component= { Home }/>
      </Router>
      </div>
    </div>
  );
}

export default App;