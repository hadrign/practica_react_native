import React, {Component} from 'react';
import {TouchableOpacity, Image, Dimensions} from 'react-native';
import PropType from 'prop-types';

class HouseCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    };
  }

  async componentDidMount() {
    const callback = (width, height) => {
      const totalWidth = Dimensions.get('window').width;
      const cardWidth = totalWidth / 2;
      const cardHeight = (cardWidth * height) / width;
      this.setState({height: cardHeight, width: cardWidth});
    };

    Image.getSize(this.props.house.image_dir, callback);
  }

  _onPressButton = () => {
    this.props.onPress(this.props.house);
  };

  render() {
    const {house} = this.props;
    const {height, width} = this.state;
    return (
      <TouchableOpacity onPress={this._onPressButton}>
        <Image
          resizeMode={'cover'}
          source={{uri: house.image_dir}}
          style={{width: width, height: height}}
        />
      </TouchableOpacity>
    );
  }
}

HouseCard.defaultProps = {
  onPress: () => {},
};

HouseCard.propTypes = {
  house: PropType.object.isRequired,
  onPress: PropType.func,
};

export default HouseCard;
