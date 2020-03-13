import React, { Component } from 'react';
import { View } from 'react-native';
import Index from './Components/Layouts/Dashboard/Index';
// import Login from './Components/Main/Registation/Login'
import Registation from './Components/Main/Registation/Registation'

class App extends Component {
  state = {
    visible: true,
  };
  render() {
    return (
      <React.Fragment >
        <Registation/>
        {/* <Index /> */}
      </React.Fragment>
    );
  }
}
export default App;
