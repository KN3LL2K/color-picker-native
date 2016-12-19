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

export default class SwatchPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={styles.swatch}>
          <View style={{flexDirection:'row'}}>
            <View style={{backgroundColor: '#' + this.props.colors.secondary2, height: 50, flex: .2}} />
            <View style={{backgroundColor: '#' + this.props.colors.secondary1, height: 50, flex: .2}} />
            <View style={{backgroundColor: '#' + this.props.colors.primary, height: 50, flex: .2}} />
            <View style={{backgroundColor: '#' + this.props.colors.tertiary1, height: 50, flex: .2}} />
            <View style={{backgroundColor: '#' + this.props.colors.tertiary2, height: 50, flex: .2}} />
          </View>
        </View>
      
    );
  }
}
