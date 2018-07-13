import React, { Component } from 'react';
import { Linking, View, Text, TouchableOpacity } from 'react-native';

export default class SettingsScreen extends Component {
  static navigationOptions = {
    title: 'Settings',
  };

  // state = {
  //   user: undefined, // user has not logged in yet
  // };

  // Set up Linking
  // componentDidMount() {
  //   // Add event listener to handle OAuthLogin:// URLs
  //   Linking.addEventListener('url', this.handleOpenURL);
  //
  //   // Launched from an external URL
  //   Linking.getInitialURL().then((url) => {
  //     if (url) {
  //       this.handleOpenURL({ url });
  //     }
  //   });
  // }
  //
  // componentWillUnmount() {
  //   // Remove event listener
  //   Linking.removeEventListener('url', this.handleOpenURL);
  // }
  //
  // handleOpenURL = ({ url }) => {
  //   // Extract stringified user string out of the URL
  //   const [, user_string] = url.match(/user=([^#]+)/);
  //   this.setState({
  //     // Decode the user string and parse it into JSON
  //     user: JSON.parse(decodeURI(user_string))
  //   });
  // };

  // Handle Login with Facebook button tap
  // loginWithFacebook = () => this.openURL('https://localhost:3000/login/facebook');
  //
  // // Open URL in a browser
  // openURL = (url) => {
  //     Linking.openURL(url);
  // };
// <TouchableOpacity onPress={this.loginWithFacebook}>
// LOGIN WIF FACEBUK
// </TouchableOpacity>


  render() {
      return (
          <View>
            <Text>HELLO</Text>
          </View>
      );
  }
}
