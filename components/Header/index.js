import React, { Component } from 'react';

/* Presentational */
import { View, Text, Image,ToolbarAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid
        logo={require('./image/box.png')}
        title="OurBox"
        actions={[{title: 'Settings', icon: require('./image/37.png')}]}
        onActionSelected={this.onActionSelected} />
        <Text>Teste</Text>
      </View>
    );
  }
}
