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

import styles from './components/styles.js';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Profile from './components/Profile.js';
import Color from './components/Color.js';
import ButtonBar from './components/ButtonBar.js';
import ColorCamera from './components/Camera.js'

export default class Colorz extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }

  setUser(user) {
    this.setState({user: user});
  }

  configureScene(route, routeStack){
    if ( route ) {
      switch (route.id) {
        case "Color":
        case "Login":
        case "Login":
          return Navigator.SceneConfigs.PushFromRight
        default:
          return Navigator.SceneConfigs.PushFromLeft
      }
    } else {
      return Navigator.SceneConfigs.PushFromRight
    }
  }
  render() {
    return (
      <Navigator style={styles.navigator}
        renderScene={(route, nav) => {
          if ( route ) {
            console.log(nav)
            switch (route.id) {
                case "Color":
                  return <Color navigator={nav} color={route.color} />
                case "Profile":
                  return <Profile navigator={nav} user={this.state.user} />
                case "Login":
                  return <Login navigator={nav} setUser={this.setUser.bind(this)} />
                case "ColorCamera":
                  return <ColorCamera navigator={nav} />
                default:
                  return <Home navigator={nav} />
            }
          } else {
            return <Home navigator={nav} />
          }
        }}
        configureScene={ this.configureScene }
        navigationBar={
         <Navigator.NavigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) => {
                if ( route ) {
                  switch (route.id) {
                    case "Color":
                    case "Login":
                    case "Profile":
                      return (
                        <TouchableHighlight onPress={() => {return navigator.pop();}}>
                          <Text style={styles.colorName}>Back</Text>
                        </TouchableHighlight>
                      );
                      break;
                    default:
                      break;
                  }
                }
              },
              RightButton: (route, navigator, index, navState) => {
                if ( route ) {
                  switch (route.id) {
                    case "Login":
                    case "Profile":
                      break
                    case "Color":
                    default:
                    if ( this.state.user ) {
                        return (
                          <TouchableHighlight onPress={() => {return navigator.push({id: "Profile", title: 'Profile'});}}>
                            <Text style={styles.colorName}>Profile</Text>
                          </TouchableHighlight>
                        );
                      } else {
                        return (
                          <TouchableHighlight onPress={() => {return navigator.push({id: "Login", title: 'Login'});}}>
                            <Text style={styles.colorName}>Login</Text>
                          </TouchableHighlight>
                        );
                      }
                  }
                } else {
                  if ( this.state.user ) {
                    return (
                      <TouchableHighlight onPress={() => {return navigator.push({id: "Profile", title: 'Profile'});}}>
                        <Text style={styles.colorName}>Profile</Text>
                      </TouchableHighlight>
                    );
                  } else {
                    return (
                      <TouchableHighlight onPress={() => {return navigator.push({id: "Login", title: 'Login'});}}>
                        <Text style={styles.colorName}>Login</Text>
                      </TouchableHighlight>
                    );
                  }
                }
              },
              Title: (route, navigator, index, navState) => {
                if ( route ) {
                  switch (route.id) {
                    case "Color":
                    case "Login":
                    case "Profile":
                      return (
                        <Text style={styles.title}>{route.title}</Text>
                      );
                    default:
                      return (<Text style={styles.title}>colorz.io</Text>);
                  }
                } else {
                  return (<Text style={styles.title}>colorz.io</Text>);
                }
              },
            }}
           style={{backgroundColor: 'white', height: 20}}
         />
      } />
    );
  }
}

AppRegistry.registerComponent('Colorz', () => Colorz);
