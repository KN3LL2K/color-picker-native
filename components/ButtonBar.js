import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Navigator,
  TouchableHighlight,
  Image
} from 'react-native';
import styles from './styles.js';

export default class ButtonBar extends Component {
  constructor(props) {
    super(props);
  
  }


  cameraPress() {
    this.props.navigator.push({id: "ColorCamera"});
  }

  galleryPress() {
    this.props.navigator.push({id: "Gallery"});
  }

  render() {
    return (
      <View style={styles.bottomBar}>
        <TouchableHighlight onPress={this.galleryPress.bind(this)}>
          <Image source={require('../img/gallery.png')} />
        </TouchableHighlight>

        <TouchableHighlight onPress={this.cameraPress.bind(this)}>
          <Image source={require('../img/photo-camera.png')} />
        </TouchableHighlight>
      </View>


    )
  }


}
