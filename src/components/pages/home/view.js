import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import { getHouses } from '../../../api';

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {list: []};
    }

    async componentDidMount() {
        // NEW
        try {
          const getHousesRes = await getHouses();
          console.log('getHousesRes: ', getHousesRes);
          const list = getHousesRes.data.records;
          this.setState({list: list}); // this.setState({list}) se puede poner asi si se llaman igual el estado y la variable a igualar
          //this.state.list = list NOOO asi no se pueden asignar estados
        } catch (e) {
          console.log('getHouses error: ', e);
        }
        // OLD
        /*
        getHouses()
          .then((res) => {
            console.log('getHouses response: ', res);
          })
          .catch((e) => {
            console.log('getHouses error: ', e);
            console.log('e.response: ', e.response);
          });
        */
      }

  render() {
    return (
      <View style={styles.container}>
        {this.state.list.map(v => <Text>{v.name}</Text>)}
      </View>
    );
  }
}
export default Home;