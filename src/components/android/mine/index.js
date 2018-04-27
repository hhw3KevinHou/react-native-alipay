'use strict';

import {

    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert,
} from 'react-native';
import React, {
    Component,

} from 'react';
import assign from 'object-assign';

// 样式
import CommonStyles from '../../../styles/common';
import TopBarStyles from '../../../styles/topBar';

// 字体
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StackNavigator} from "react-navigation";

const personIcon = (
    <MaterialIcons name="person-outline" style={{textAlign:'center' }} size={30} color="#FFFFFF" ></MaterialIcons>);
const searchIcon = (
    <MaterialIcons name="search" style={{textAlign:'center' }} size={30} color="#FFFFFF" ></MaterialIcons>);
const addIcon = (
    <MaterialIcons name="add" style={{textAlign:'center' }} size={30} color="#FFFFFF" ></MaterialIcons>);


const styles = StyleSheet.create(assign(
    {},
    CommonStyles,
    TopBarStyles
));

class MineView extends Component {
    static navigationOptions = {
        title: '我',
        headerStyle: {
            backgroundColor: '#3F454F',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerRight: (
            <View style={{width: 120, flex: 1, flexDirection: 'row',marginRight:10}}>
                <TouchableOpacity style={{flex:1,}} activeOpacity={0.2} onPress={()=> Alert.alert('提示','个人clicked')}>
                    {personIcon}
                </TouchableOpacity>
                <TouchableOpacity  style={{flex: 1,}} activeOpacity={0.2} onPress={()=> Alert.alert('提示','查找clicked')}>
                    {searchIcon}
                </TouchableOpacity>
                <TouchableOpacity  style={{flex: 1,}} activeOpacity={0.2} onPress={()=> Alert.alert('提示','增加clicked')}>
                    {addIcon}
                </TouchableOpacity>
            </View>

        ),
    };

    render() {
        return (

            <View style={styles.container}>

                <ScrollView contentContainerStyle={styles.scrollContainerTab}
                            automaticallyAdjustContentInsets={true}>


                    <View key="content" style={styles.content}>
                        <View style={{alignItems: 'center', padding: 10}}>
                            <Text>content of 我的</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}


export default StackNavigator({

    MineView: {screen: MineView},


});

