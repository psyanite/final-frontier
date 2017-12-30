import React, { Component } from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'
import { setCustomText } from 'react-native-global-props'

import { AppLoading, Asset, Font } from 'expo'
import { Ionicons } from '@expo/vector-icons'

import RootNavigation from './navigation/RootNavigation'

import ColorConstants from '../styles/constants/ColorConstants'

const customTextProps = {
  style: {
    fontFamily: 'open-sans',
    fontSize: 16,
    color: ColorConstants.bodyText,
  }
}

class App extends Component {
  state = {
    isLoadingComplete: false,
  };

  _loadResourcesAsync = async () => Promise.all([
      Asset.loadAsync([
        require('../assets/images/robot-dev.png'),
        require('../assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        ...Ionicons.font,
        'grand-hotel': require('../assets/fonts/GrandHotel-Regular.ttf'),
        'open-sans': require('../assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-light': require('../assets/fonts/OpenSans-Light.ttf'),
      }),
    ]);

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error)
  };

  _handleFinishLoading = () => {
    setCustomText(customTextProps)
    this.setState({ isLoadingComplete: true })
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      )
    } 
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
          <RootNavigation
            navigation={addNavigationHelpers({
              dispatch: this.props.dispatch,
              state: this.props.nav,
            })}
          />
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
})

const mapStateToProps = (state) => ({
  nav: state.nav
})

export default connect(mapStateToProps)(App)
