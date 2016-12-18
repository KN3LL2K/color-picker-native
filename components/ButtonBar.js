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

export default class ButtonBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: null
    };
  }


  handleClick(color) {
    this.props.navigator.push({id: "Camera"});
  }

  render() {
    return (
      <View style={styles.bottomBar}>
        
      <Text>BOTTOM BUTTON BAR GOES HERE</Text>

      </View>


    )
  }


}
