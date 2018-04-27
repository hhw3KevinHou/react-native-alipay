'use strict';

import  {
    Image,
    Text,
    View
} from 'react-native';

import React, {
    Component,

} from 'react';
import Main from "./index";
import image1 from '../../../images/iconfont-scan.png';
import image2 from '../../../images/iconfont-paycode.png';
import image3 from '../../../images/iconfont-discount.png';
import image4 from '../../../images/iconfont-dangmianfu-yellow.png';

class QuickEntry extends Component {
  render() {
    const {styles} = this.props;
    return (
        <View key="quickEntry" style={styles.quickEntry}>
          <View key="scan" style={styles.quickEntryItem}>
            <Image source={image1} style={styles.quickEntryItemIcon}/>
            <Text key="scan" style={styles.quickEntryItemText}>扫一扫</Text>
          </View>
          <View key="pay" style={styles.quickEntryItem}>
            <Image source={image2} style={styles.quickEntryItemIcon}/>
            <Text key="pay" style={styles.quickEntryItemText}>付款</Text>
          </View>
          <View key="discount" style={styles.quickEntryItem}>
            <Image source={image3} style={styles.quickEntryItemIcon}/>
            <Text key="discount" style={styles.quickEntryItemText}>卡券</Text>
          </View>
          <View key="xiu" style={styles.quickEntryItem}>
            <Image source={image4} style={styles.quickEntryItemIcon}/>
            <Text key="xiu" style={styles.quickEntryItemTextYellow}>咻一咻</Text>
          </View>
        </View>
    );
  }
}

export default QuickEntry;
