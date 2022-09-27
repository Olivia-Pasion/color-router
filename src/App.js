import './App.css';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';
import ScreenColor from './component/ScreenColor/ScreenColor.js';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Route exact path="/">
            <Redirect to="/rgb/255/200/221" />
          </Route>
          <ul>
            <NavLink className="purple" to="/rgb/205/180/219">Rosy Beige</NavLink>
            <NavLink className="pink" to="/rgb/255/200/221">Deco Pink</NavLink>
            <NavLink className="blue" to="/rgb/189/224/254">Powder Blue</NavLink>
          </ul>
        </header>

        <ScreenColor />
      </Router>
      
    </div>
  );
}

export default App;
