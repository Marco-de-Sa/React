import React, { Component } from 'react';
import GitHub from './GitHub';

class App extends Component {
  render() {
    return (
      <div>
        {this.state.isLoading &&
          <h4>Getting data...</h4>
        }
      </div>
    );
  }
}

export default App;