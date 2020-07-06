import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {Router, Scene, Stack} from 'react-native-router-flux';
import {Splash, Home, Characters} from '../../pages';
import colors from '../../../assets/colors';

class App extends Component {
  constructor(props) {
    super(props);
    StatusBar.setBarStyle('light-content', true);
  }

  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key={'Splash'} component={Splash} hideNavBar={true} />
          <Scene key={'Home'} component={Home} hideNavBar title={'Home'} />
          <Scene
            key={'Characters'}
            component={Characters}
            navigationBarStyle={{backgroundColor: colors.navBar}}
            titleStyle={{color: colors.white}}
            backButtonTextStyle={{color: colors.white}}
            backButtonTintColor={colors.white}
          />
        </Stack>
      </Router>
    );
  }
}

export default App;
