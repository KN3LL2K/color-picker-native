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

import styles from './styles.js';

const t = require('tcomb-form-native');

const Form = t.form.Form

const user = t.struct({
  username: t.String,
  password:  t.String
})

const options = {
  fields: {
    username: {
      autoCapitalize: 'none',
      autoCorrect: false
    },
    password: {
      autoCapitalize: 'none',
      password: true,
      autoCorrect: false
    }
  }
}

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: {
        email: '',
        password: ''
      }
    }
  }

  componentWillUnmount() {
    this.setState = {
      value: {
        email: '',
        password: null
      }
    }
  }

   _onChange = (value) => {
    this.setState({
      value
    })
  }

  _handleAdd = () => {
    const value = this.refs.form.getValue();
    // If the form is valid...
    let component = this;
    if (value) {
      const data = {
        username: value.username,
        password: value.password,
      }
      // Serialize and post the data
      const json = JSON.stringify(data)
      fetch('http://localhost:3000/login', {
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
          // AsyncStorage.setItem('id', res.userId)
          component.props.setUser(res)
          // alert(`Success! You may now access protected content.`)
          // Redirect to previous screen
          component.props.navigator.push({id: "Profile", title: "Profile"});
        }
      })
      .catch((e) => {
        console.log('in err', e)
        // alert('There was an error logging in.');
      })
      .done()
    } else {
      // Form validation error
      alert('Please fix the errors listed and try again.')
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.innerContainer}>
          <Form
            ref='form'
            type={user}
            options={options}
            value={this.state.value}
            onChange={this._onChange}
          />
          <TouchableHighlight onPress={this._handleAdd}>
            <Text style={[styles.button, styles.greenButton]}>Login</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    )
  }
}