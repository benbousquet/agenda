import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('MainStore')
@observer
class App extends Component {
  render() {
    const { MainStore } = this.props;
    
    return (
      <div className="App">
        <h2>Events: [{MainStore.eventCount}]</h2>
      </div>
    );
  }
}

export default App;
