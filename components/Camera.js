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
var colorGrabber = require('react-native').NativeModules.colorGrabber;

import styles from './styles.js';

export default class ColorCamera extends Component {
  constructor(props) {
    super(props);
  }
  takePicture() {
    this.camera.capture()
      .then((data) => {
        colorGrabber.getColors(data, (err, res) => {
          console.log(res);
          // Returns:
          // {
          //  'UIDeviceRGBColorSpace 0.0784314 0.0941176 0.0823529 1': '0.1666667',
          //  'UIDeviceRGBColorSpace 0.215686 0.203922 0.262745 1': '0.1666667',
          //  'UIDeviceRGBColorSpace 0.517647 0.45098 0.380392 1': '0.6666667'
          // }
            if (res) {
              this.props.navigator.push({id: "Gallery", colors: res, image: data );
              } else {
              // colorGrab error
              alert('Something went wrong with colorGrabber.')
            }
          }
        });
      })
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
          <View style={styles.capture}></View>
          </TouchableHighlight>
        </Camera>
      </View>
    )
  }
}

