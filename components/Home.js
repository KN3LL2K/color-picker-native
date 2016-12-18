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

import Swatch from './Swatch.js';

import styles from './styles.js';



export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: null
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/colors/?sort=popular')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({colors: responseData});
      })
      .catch((e) => {
        console.log(e)
      });
  }

  handleClick(color) {
    this.props.navigator.push({id: "Color", color: color, title: color.name});
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.colors !== null ? this.state.colors.map( (color, index) => {
          return (
            <Swatch key={index} handleClick={this.handleClick.bind(this)} color={color} />
          )
        }) : null}
      </ScrollView>
    );
  }
}
