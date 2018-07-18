import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Ionicons } from '@expo/vector-icons';
import ColorConstants from '../../styles/constants/ColorConstants';
import LayoutConstants from '../../styles/constants/LayoutConstants';
import * as ActionCreators from '../../modules/me/actions';

import BackTouchable from '../../components/navigation/touchables/BackTouchable';
import BurntGradient from '../../components/gradients/BurntGradient';
import WideButton from '../../components/common/buttons/WideButton';
import { routeNames } from '../../components/navigation/AppNavigator';

class MySettingsScreen extends Component {

  static navigationOptions = { header: null };

  render() {
    const logout = async () => {
      this.props.actions.setMe({});
      this.props.navigation.navigate(routeNames.Login);
    };

    return (
      <BurntGradient style={styles.container}>

        <BackTouchable navigation={this.props.navigation} type={'line'} color={'#fff'} />

        <Ionicons
          name='ios-settings-outline'
          size={150}
          color={'#fff'}
          style={styles.settingsIcon}
        />

        <WideButton onPress={logout} style={styles.wrap} >
          <Text style={styles.title}>Logout</Text>
          <Ionicons name='ios-log-out' size={32} color={ColorConstants.tintColor} style={styles.overlayIcon} />
        </WideButton>

        <WideButton onPress={() => {}} style={styles.wrap} >
          <Text style={styles.title}>Contact Burntoast</Text>
          <Ionicons name='ios-send-outline' size={35} color={ColorConstants.tintColor} style={styles.overlayIcon} />
        </WideButton>

      </BurntGradient>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorConstants.bodyBackgroundColor,
    paddingTop: LayoutConstants.headerHeight,
    paddingLeft: LayoutConstants.margins.m,
    paddingRight: LayoutConstants.margins.m,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsIcon: {
    marginBottom: 20,
  },
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: LayoutConstants.margins.m,
  },
  title: {
    color: ColorConstants.tintColor,
  },
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch)
});

export default connect(null, mapDispatchToProps)(MySettingsScreen);
