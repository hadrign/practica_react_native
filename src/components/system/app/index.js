import React, {Component} from 'react';
import {Actions, Router, Scene, Stack} from 'react-native-router-flux';
import {Splash, Home} from '../../pages';
class App extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key={'Splash'} component={Splash} hideNavBar />
          <Scene key={'Home'} component={Home} hideNavBar/>
        </Stack>
      </Router>
    );
  }
}
export default App;