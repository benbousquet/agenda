import React, { Component } from 'react';
import Home from './pages/Home';
import Settings from './pages/Settings'
import './App.css';
import { Icon } from 'antd';
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
              <Link to="/"><Icon type="home" style={{ fontSize: '24px', color: '#08c', paddingRight: '10px'}} /></Link>
              <Link to="/Settings"><Icon type="setting" style={{ fontSize: '24px', color: '#08c', paddingLeft: '10px'}} /></Link>

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
