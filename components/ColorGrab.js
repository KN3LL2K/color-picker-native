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
  Image
} from 'react-native';
var colorGrabber = require('react-native').NativeModules.colorGrabber;

import SwatchPreview from './SwatchPreview.js';

import styles from './styles.js';

export default class ColorGrab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: null
    }
  }
  componentDidMount() {

    this.setState({
      colors: {
        primary: this.rgbToHex(this.props.colors),
        secondary1: this.rgbToHex(this.props.colors),
        secondary2: this.rgbToHex(this.props.colors),
        tertiary1: this.rgbToHex(this.props.colors),
        tertiary2: this.rgbToHex(this.props.colors)
      }
    });
  }

  componentWillUnmount() {
    this.setState = {
      colors: null
    }
  }

  rgbToHex (array) {
    var hexChars = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F'};
    var result = '';
    for (var i = 0; i < array.length; i++) {
      var d1 = parseInt(array[i] / 16);
      result += hexChars[d1];
      var d2 = array[i] - (d1 * 16);
      result += hexChars[d2];
    }
    return result;
  };

  _submit() {
    const json = JSON.stringify(result)
    fetch('http://localhost:3000/api/colors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: json
    })
    .then((response) => response.json())
    .then((res) => {
      if (res.error) {
        alert(res.error)
      } else {
        component.props.navigator.pop()
      }
    })
    .catch((e) => {
      console.log('in err', e)
    })
    .done()
  }

  _cancel () {
    // this.props.navigator.push({id: "Home"});
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.imagePreview}>
            <Image source={this.props.image} />
          </View>
          <View>
            <SwatchPreview colors={this.state.colors} />
          </View>

          <TouchableHighlight onPress={this._submit.bind(this)}>
            <View style={styles.submitGrab}><Text>Submit</Text></View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={this._cancel.bind(this)}>
            <View style={styles.cancelGrab}><Text>Cancel</Text></View>
          </TouchableHighlight>
      </View>
    )
  }
}

