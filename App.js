import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { createReactNavigationReduxMiddleware, reduxifyNavigator } from 'react-navigation-redux-helpers';
import { setCustomText } from 'react-native-global-props';

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

import { Constants, AppLoading, Asset, Font } from 'expo';
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

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['me']
};

const reduxNavigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

const ReduxifiedAppNavigator = reduxifyNavigator(AppNavigator, 'root');

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWare = () => {
  const wares = [reduxNavigationMiddleware, thunk];
  if (Constants.manifest.extra.enableReduxLogger) {
    wares.push(logger);
  }
  return applyMiddleware(...wares);
};

const store = createStore(
  persistedReducer,
  middleWare()
);

const persistor = persistStore(store);

const mapStateToProps = (state) => ({
  state: state.navigation,
});

const AppWithNavigationState = connect(mapStateToProps)(ReduxifiedAppNavigator);

export default class App extends Component {
  state = {
    isLoadingComplete: false,
  };

  _loadAssets = () => Asset.loadAsync([
    require('./src/assets/images/robot-dev.png'),
    require('./src/assets/images/robot-prod.png'),
    require('./src/assets/images/bk/loading-icon.png'),
  ]);

  _loadFonts = () => Font.loadAsync({
    ...Ionicons.font,
    'grand-hotel': require('./src/assets/fonts/GrandHotel-Regular.ttf'),
    'open-sans': require('./src/assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-light': require('./src/assets/fonts/OpenSans-Light.ttf'),
  });

  _loadResourcesAsync = async () => Promise.all([
    this._loadAssets(),
    this._loadFonts()
  ]);

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = async () => {
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
        <PersistGate loading={null} persistor={persistor}>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
            <AppWithNavigationState />
          </View>
        </PersistGate>
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
