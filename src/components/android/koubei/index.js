'use strict';

import {

    Image,

    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import React, {
    Component,

} from 'react';
import assign from 'object-assign';
import NavBar from './../common/NavBar';
// 样式
import CommonStyles from '../../../styles/common';
import TopBarStyles from '../../../styles/topBar';

// 字体
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppMoreView from "../alipay/AppMore";
import {StackNavigator} from "react-navigation";
const personIcon = (<MaterialIcons name="person-outline" size={24} color="#FFFFFF"></MaterialIcons>);
const searchIcon = (<MaterialIcons name="search" size={24} color="#FFFFFF"></MaterialIcons>);
const addIcon = (<MaterialIcons name="add" size={24} color="#FFFFFF"></MaterialIcons>);
const locationIcon = (<MaterialIcons name="room" size={20} color="#FFFFFF"></MaterialIcons>);

class KoubeiView  extends React.Component {

    static navigationOptions = {
        title: '口碑',
        headerStyle: {
            backgroundColor: '#3F454F',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };


    render() {

        return (


         <View style={styles.container}>
             <ScrollView contentContainerStyle={styles.scrollContainerTab}
                         automaticallyAdjustContentInsets={true}>
                 <View key="content" style={styles.content}>
                     <View style={{alignItems: 'center', padding: 10}}>
                         <Text>content of 口碑</Text>
                     </View>
                 </View>
             </ScrollView>
         </View>

     );}

}






const styles = StyleSheet.create(assign(
    {},
    CommonStyles,
    TopBarStyles
));

export default   StackNavigator ({

    KoubeiView: { screen: KoubeiView },


});
