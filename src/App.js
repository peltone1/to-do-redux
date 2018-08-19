import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';

import ToDo from './ToDo/ToDo';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
            <ToDo/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App