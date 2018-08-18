import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';

import ToDo from './ToDo/ToDo';
import Auth from './Auth'




class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Auth>
            <ToDo/>
          </Auth>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
