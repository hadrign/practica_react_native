import React from 'react';
import {SafeAreaView, Alert, FlatList, RefreshControl} from 'react-native';
import styles from './styles';
import {getHouses} from '../../../api';
import {HouseCard} from '../../molecules';
import {Actions} from 'react-native-router-flux';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {list: [], loading: true};
  }

  componentDidMount() {
    this._initHousesList();
  }

  _initHousesList = async () => {
    try {
      this.setState({loading: true});
      const getHousesRes = await getHouses();
      const list = getHousesRes.data.records;
      this.setState({list, loading: false});
    } catch (e) {
      this.setState({loading: false}, () => {
        Alert.alert('Error', 'Ha ocurrido un error');
      });
    }
  };

  _onHousePress = (house) => {
    Actions.push('Characters', {house, title: house.nombre});
  };

  _renderItem = ({item}) => (
    <HouseCard house={item} onPress={this._onHousePress} />
  );

  render() {
    const {list, loading} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={list}
          keyExtractor={(item, index) => `card-${item.id}`}
          numColumns={2}
          renderItem={this._renderItem}
          refreshControl={
            <RefreshControl
              colors={['white']}
              tintColor={'white'}
              refreshing={loading}
              onRefresh={this._initHousesList}
              title={'Cargando...'}
              titleColor={'white'}
            />
          }
        />
      </SafeAreaView>
    );
  }
}

export default Home;
