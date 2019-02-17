import React, { Component } from 'react';
import Home from './pages/Home';
import Settings from './pages/Settings'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Settings">Settings</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/Settings" component={Settings}/>
          </div>
        </Router>
        
      </div>
    );
  }
}

export default App;
