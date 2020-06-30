import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  Alert,
  Platform,
} from 'react-native';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Esto es el constructor',
    };
  }
  componentDidMount() {
    this.setState({message: 'Esto marcha, ya me he montado'});
    alert('hola')
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.message === 'Esto es el constructor' &&
      this.state.message === 'Esto marcha, ya me he montado'
    ) {
      this.setState({message: 'El didUpdate funciona, esto marcha!'});
    }
  }
  componentWillUnmount() {}
  render() {
    console.log('this.state.message: ', this.state.message);
    return (
      <SafeAreaView>
        <Text>{this.state.message}</Text>
      </SafeAreaView>
    );
  }
}
export default App;
