'use strict';

import {
    StyleSheet,
    Image,

} from 'react-native';

import React, {
    Component,

} from 'react';

import AlipayViewStack from './alipay/index';

import KoubeiViewStack from './koubei/index';
import FriendViewStack from './friend/index';
import MineViewStack from './mine/index';

import Icon from  'react-native-vector-icons/Ionicons';
import MaterialIcons from'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabNavigator, TabBarBottom,StackNavigator,createTabNavigator,SafeAreaView,createBottomTabNavigator,createStackNavigator,createMaterialBottomTabNavigator } from 'react-navigation';




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    tab:{
        height: 52,
        alignItems:'center',
        backgroundColor:'#f4f5f6',
    },
    tabIcon:{
        width:25,
        height:25,
    },
    badgeView:{
        width:22,
        height:14 ,
        backgroundColor:'#f85959',
        borderWidth:1,
        marginLeft:10,
        marginTop:3,
        borderColor:'#FFF',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
    },
    badgeText:{
        color:'#fff',
        fontSize:8,
    }
});

export default  TabNavigator(
    {
        Home: {
            screen:AlipayViewStack,

        },
        koubeiStack:{
            screen: KoubeiViewStack,

        },
        friend: {
            screen:FriendViewStack,

        },
        mine: {
            screen:MineViewStack,

        }
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {

                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = focused ? require('../../images/zhifubao.png') : require('../../images/zhifubao-outline.png');

                    return <Image style={styles.tabIcon} source={iconName}/>;

                } else if (routeName === 'koubeiStack') {
                    iconName = focused ? require('../../images/koubei.png') : require('../../images/koubei-outline.png');

                    return <Image style={styles.tabIcon} source={iconName}/>;
                }
                else if (routeName === 'friend') {
                    iconName = `people${focused ? '' : '-outline'}`;
                    return <MaterialIcons name={iconName} size={25} color="#4F8EF7" />;
                }
                else if (routeName === 'mine') {
                    iconName = focused ? require('../../images/mine.png') : require('../../images/mine-outline.png');

                    return <Image style={styles.tabIcon} source={iconName}/>;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                //return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),

        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },

        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    }
);



