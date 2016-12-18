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

export default class Swatch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableHighlight onPress={() => {return this.props.handleClick(this.props.color)}}>
        <View>
          <Text style={styles.colorName}>
            {this.props.color.name}:
          </Text>
          <View style={{flexDirection:'row'}}>
            <View style={{backgroundColor: '#' + this.props.color.colors.secondary2, height: 50, flex: .2}} />
            <View style={{backgroundColor: '#' + this.props.color.colors.secondary1, height: 50, flex: .2}} />
            <View style={{backgroundColor: '#' + this.props.color.colors.primary, height: 50, flex: .2}} />
            <View style={{backgroundColor: '#' + this.props.color.colors.tertiary1, height: 50, flex: .2}} />
            <View style={{backgroundColor: '#' + this.props.color.colors.tertiary2, height: 50, flex: .2}} />
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}