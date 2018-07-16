import React, { Component } from 'react';
import Expo, { Constants } from 'expo';
import { Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../../modules/me/actions';
import BurntGradient from '../../components/gradients/BurnGradient';
import ColorConstants from '../../styles/constants/ColorConstants';
import * as Auth from '../../lib/Auth';
import WideWhiteButton from '../../components/common/buttons/WideWhiteButton';
import BurnView from '../../components/common/BurnView';

class LoginScreen extends Component {

  static navigationOptions = { header: null };

  render() {
    const onLoginSuccess = () => this.props.navigation.navigate('MyProfile');

    const loginWithFacebook = async () => {
      const appId = Constants.manifest.facebookAppId;
      // expiry: the time which the token will expire, as seconds since epoch
      const { type, token, expires } = await Expo.Facebook.logInWithReadPermissionsAsync(appId, {
        permissions: ['public_profile'],
      });

      if (type === 'success') {
        try {
          const me = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,email,name,gender`);
          const fbProfile = await me.json();
          const authenticate = await Auth.authenticateFacebookLogin(token, fbProfile);
          const profile = Object.assign({}, authenticate.profile);
          profile.id = authenticate.id;
          profile.email = authenticate.email;
          profile.token = token;
          profile.tokenExpiry = expires;
          this.props.actions.setMe(profile);
          onLoginSuccess();
        }
        catch (e) {
          console.log('An error has occurred when attempting to login with Facebook');
          console.log(e);
        }
      }
      else {
        console.log('An error has occurred when attempting to login with Facebook');
      }
    };

    const loginAsTestUserLuna = async () => {
      const testUserProfile = {
        id: 1,
        username: 'nyatella',
        display_name: 'Luna',
        profile_picture: 'https://imgur.com/DAdLVwp.jpg'
      };
      this.props.actions.setMe(testUserProfile);
      onLoginSuccess();
    };

    const loginAsTestUserChloe = async () => {
      const testUserProfile = {
        id: 2,
        username: 'curious_chloe',
        display_name: 'Chloe',
        profile_picture: 'https://imgur.com/FErrGkO.jpg'
      };
      this.props.actions.setMe(testUserProfile);
      onLoginSuccess();
    };

    return (
      <BurnView isCenterCenter>

        <Image style={styles.logo} source={require('../../assets/images/bk/loading-icon.png')} />

        <WideWhiteButton onPress={loginWithFacebook} text={'Login with Facebook'} />
        <WideWhiteButton onPress={loginAsTestUserLuna} text={'Login as test user Luna'} />
        <WideWhiteButton style={styles.button} onPress={loginAsTestUserChloe} text={'Login as test user Chloe'} />

      </BurnView>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    marginBottom: 25,
  },
  buttonText: {
    color: ColorConstants.tintColor
  }
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch)
});

export default connect(null, mapDispatchToProps)(LoginScreen);
