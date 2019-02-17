import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Home from './pages/Home';
import Settings from './pages/Settings'
import Button from 'antd/lib/button';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


@inject('MainStore')
@observer
class App extends Component {
  render() {
    const { MainStore } = this.props;
    
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
        <Button type="primary">Add Event</Button>
        <h2>Events: [{MainStore.eventCount}]</h2>
      </div>
    );
  }
}

export default App;
