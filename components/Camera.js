import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Navigator,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import Camera from 'react-native-camera';

import styles from './styles.js';

export default class ColorCamera extends Component {
  // constructor(props) {
  //   super(props);
  // }
  takePicture() {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <View style={styles.cameraContainer}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <TouchableHighlight onPress={this.takePicture.bind(this)}>
          <View style={{height:50, width:50, backgroundColor: 'white'}}></View>
          </TouchableHighlight>
        </Camera>
      </View>
    )
  }
}

