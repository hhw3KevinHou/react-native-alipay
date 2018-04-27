'use strict';

import React, {
    Component,

} from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View
} from  'react-native';
import assign from 'object-assign';
import CommonStyles from '../../../styles/common';

class AppInfoView extends Component {

    static navigationOptions = {
        title: '支付宝',
        tabBarVisible: false,
        headerStyle: {
            backgroundColor: '#3F454F',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },

    };
  render() {
      const { params } = this.props.navigation.state;
    return (
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContainer}
                      automaticallyAdjustContentInsets={true}>
            <View key="content" style={styles.content}>
              <View style={{alignItems: 'center', padding: 10}}>
                <Text>content of {params.title}</Text>
              </View>
            </View>
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create(assign(
    {},
    CommonStyles
));

export default AppInfoView;