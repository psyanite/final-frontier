import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { createReactNavigationReduxMiddleware, reduxifyNavigator } from 'react-navigation-redux-helpers';
import { setCustomText } from 'react-native-global-props';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import rootReducer from './src/reducer/index';
import AppNavigator from './src/components/navigation/AppNavigator';

import ColorConstants from './src/styles/constants/ColorConstants';

const customTextProps = {
  style: {
    fontFamily: 'open-sans',
    fontSize: 16,
    color: ColorConstants.bodyText,
  }
};

const reduxNavigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

const ReduxifiedAppNavigator = reduxifyNavigator(AppNavigator, 'root');

const store = createStore(
  rootReducer,
  applyMiddleware(reduxNavigationMiddleware, thunk, logger)
);

const mapStateToProps = (state) => ({
  state: state.navigation,
});

const AppWithNavigationState = connect(mapStateToProps)(ReduxifiedAppNavigator);

export default class App extends Component {
  state = {
    isLoadingComplete: false,
  };

  _loadResourcesAsync = async () => Promise.all([
    Asset.loadAsync([
      require('./src/assets/images/robot-dev.png'),
      require('./src/assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      ...Ionicons.font,
      'grand-hotel': require('./src/assets/fonts/GrandHotel-Regular.ttf'),
      'open-sans': require('./src/assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-light': require('./src/assets/fonts/OpenSans-Light.ttf'),
    }),
  ]);

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    setCustomText(customTextProps);
    this.setState({ isLoadingComplete: true });
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
          <AppWithNavigationState />
        </View>
      </Provider>
    );
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
});

