import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Navigator,
  TouchableHighlight
} from 'react-native';

import styles from './styles.js';

export default class Color extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.colorLikes}>
          likes: {this.props.color.likes}
        </Text>
        <ScrollView>
          <View style={{backgroundColor: '#' + this.props.color.colors.secondary2, height: 200, flexDirection:'row'}} />
          <View style={{backgroundColor: '#' + this.props.color.colors.secondary1, height: 200, flexDirection:'row'}} />
          <View style={{backgroundColor: '#' + this.props.color.colors.primary, height: 200, flexDirection:'row'}} />
          <View style={{backgroundColor: '#' + this.props.color.colors.tertiary1, height: 200, flexDirection:'row'}} />
          <View style={{backgroundColor: '#' + this.props.color.colors.tertiary2, height: 200, flexDirection:'row'}} />
        </ScrollView>

      </View>
    );
  }
}