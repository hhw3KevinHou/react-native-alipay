'use strict';

import  {
    Image,
    View
} from 'react-native';


import React, {
    Component,

} from 'react';
import AppMoreView from "./AppMore";

class Banner extends Component {
  render() {
    const {styles} = this.props;
    return (
        <View key="banner" style={styles.banner}>
          <Image source={require('../../../images/banner.png')} style={styles.bannerImage}/>
        </View>
    );
  }
}

export default Banner;
