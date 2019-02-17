import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Button from 'antd/lib/button';
import './App.css';

@inject('MainStore')
@observer
class App extends Component {
  render() {
    const { MainStore } = this.props;
    
    return (
      <div className="App">
        <Button type="primary">Add Event</Button>
        <h2>Events: [{MainStore.eventCount}]</h2>
      </div>
    );
  }
}

export default App;
