'use strict';

import {

    Image,
    Navigator,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Alert,
} from 'react-native';
import React, {
    Component,

} from 'react';
import assign from 'object-assign';
import NavBar from './../common/NavBar';
import List from './../common/List';

// 样式
import CommonStyles from '../../../styles/common';
import TopBarStyles from '../../../styles/topBar';
import ListStyles from '../../../styles/list';

// 字体
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StackNavigator} from "react-navigation";

const personIcon = (<MaterialIcons name="person-outline" size={24} color="#FFFFFF"></MaterialIcons>);
const searchIcon = (<MaterialIcons name="search" size={24} color="#FFFFFF"></MaterialIcons>);
const addIcon = (<MaterialIcons name="add" size={24} color="#FFFFFF"></MaterialIcons>);

const friendListData = [
    {
        title: '服务窗',
        type: 'fuwu',
        content: '服务窗推荐：国网浙江省电力公司',
        image: {
            source: require('../../../images/iconfont-fuwuchuang.png'),
        }
    },
    {
        title: '招商银行信用卡',
        content: '交易提醒',
        type: 'fuwuchuang',
        icon: {
            name: 'credit-card-alt',
            size: 20,
            color: '#FFB44F',
        }
    },
    {
        title: '消息中心',
        type: 'message',
        content: '会员积分通知',
        icon: {
            name: 'whatsapp',
            size: 24,
            color: '#00bb9c',
        }
    },
    {
        title: '阿里旅行去啊',
        type: 'fuwu',
        content: '恭喜你获得全年机票免费名额',
        image: {
            source: require('../../../images/iconfont-jipiao.png'),
        }
    },
    {
        title: '体验技术部',
        type: 'qun',
        content: '玉伯：做地球上专业、有爱的团队',
        icon: {
            name: 'wechat',
            size: 24,
            color: '#00bb9c',
        }
    },
    {
        title: '路人甲',
        type: 'ren',
        content: '[转账]转账13.70元',
        icon: {
            name: 'user',
            size: 24,
            color: '#cccccc',
        }
    },
    {
        title: '路人乙',
        type: 'ren',
        content: '你已经添加了路人乙，现在可以聊天了',
        icon: {
            name: 'github',
            size: 24,
            color: '#00A9F1',
        }
    },
    {
        title: '路人丙',
        type: 'ren',
        content: '你已经添加了路人丙，现在可以聊天了',
        icon: {
            name: 'user',
            size: 24,
            color: '#cccccc',
        }
    }
];

class FriendView extends React.Component {

    static navigationOptions = {
        title: '朋友',
        headerStyle: {
            backgroundColor: '#3F454F',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    handleItemClick = (item)=>{
       Alert.alert('提示',item.title + 'clicked');
    }

    handleLifeCircleClick = ()=>{
        Alert.alert('提示','生活圈clicked');
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContainerTab}
                            automaticallyAdjustContentInsets={true}>
                    <View key="content" style={styles.content}>
                        <View>
                            <TouchableOpacity onPress={this.handleLifeCircleClick}>
                                <View style={lifeCircleStyle}>
                                    <View key="list-item-image" style={styles.listItemImageWrap}>
                                        <Icon name="chrome" size={24} color="#FF6600"
                                              style={{width: 30, height: 30, paddingTop: 3}}/>
                                    </View>
                                    <View key="list-item-content" style={styles.listItemContent}>
                                        <View key="list-item-content-title"
                                              style={{flexDirection: 'row', paddingTop: 5}}>
                                            <View key="list-item-title-text" style={{flex: 1}}>
                                                <Text style={{paddingTop: 3}}>生活圈</Text>
                                            </View>
                                            <View>
                                                <Text><Icon name="angle-right" size={20} color="#cccccc"></Icon></Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <List styles={styles}
                                  data={friendListData}
                                  onPress={this.handleItemClick}/>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
            ;
    }


}


const lifeCircleStyle = {
    flexDirection: 'row',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 10,
    marginBottom: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    borderColor: '#E6E6E6',
    backgroundColor: '#fff'
};

const styles = StyleSheet.create(assign(
    {},
    CommonStyles,
    TopBarStyles,
    ListStyles
));

export default StackNavigator ({

    FriendView: { screen: FriendView },


});;
