import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Navigator,
  TouchableHighlight
} from 'react-native';

import Swatch from './Swatch.js';

import styles from './styles.js';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }

  componentWillMount() {
    let component = this;
    userId = this.props.user.userId;
    fetch(`http://localhost:3000/api/users/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      console.log(res)
      component.setState({
        user: res
      });
    })
    .catch((e) => {
      debugger;
      console.log(e);
      alert('There was an error getting user info.');
    })
    .done()
  }

  handleClick(color) {
    this.props.navigator.push({id: "Color", color: color, title: color.name});
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.userName}>
          {this.props.user.username}
        </Text>
        <Text style={styles.subTitle}>
          Swatches you've liked:
        </Text>
        <View>
          {this.state.user !== null ? this.state.user.userLikes.map( (color, index) => {
            console.log(color)
            return (
              <Swatch key={index} handleClick={this.handleClick.bind(this)} color={color.colorId} />
            )
          }) : null}
        </View>
        <Text style={styles.subTitle}>
          Swatches you've created:
        </Text>
        <View>
          {this.state.user !== null ? this.state.user.swatches.map( (color, index) => {
            return (
              <Swatch key={index} handleClick={this.handleClick.bind(this)} color={color} />
            )
          }) : null}
        </View>
      </ScrollView>
    );
  }
}