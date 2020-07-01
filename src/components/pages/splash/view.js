import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';
import { Actions } from 'react-native-router-flux'
 
class Splash extends React.Component {

    componentDidMount() {
        setTimeout(() => Actions.replace('Home'), 1000)
    }
  render() {
    return <View style={styles.container}>
    </View>;
  }
}
export default Splash;