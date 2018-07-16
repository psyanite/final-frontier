import React, { Component } from 'react';
import { Linking, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Ionicons } from '@expo/vector-icons';
import ColorConstants from '../../styles/constants/ColorConstants';
import LayoutConstants from '../../styles/constants/LayoutConstants';
import * as ActionCreators from '../../modules/me/actions';
import WideWhiteButton from '../../components/common/buttons/WideWhiteButton';
import HeaderBack from '../../components/navigation/headers/HeaderBack';
import BurntView from '../../components/common/BurntView';

class MySettingsScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle: <Text style={{ color: '#fff' }}>Settings</Text>,
    headerStyle: {
      position: 'absolute',
      backgroundColor: 'transparent',
      zIndex: 100,
      top: 0,
      left: 0,
      right: 0,
    },
    headerLeft: <HeaderBack navigation={navigation} type={'line'} color={'#fff'} wrapStyle={styles.headerLeft} />
  });

  render() {
    const logout = () => {
      this.props.actions.setMe({});
      this.props.navigation.navigate('Login');
    };

    const openEmail = () => {
      Linking.openURL('mailto:contact@burntoast.com?subject=Hey!&body=Tell us what you think!')
        .catch(e => console.log('An error occurred', e));
    };

    return (
      <BurntView centerCenterYah>

        <WideWhiteButton onPress={logout} style={styles.wrap} >
          <Text style={styles.title}>Logout</Text>
          <Ionicons name='ios-log-out' size={32} color={ColorConstants.tintColor} style={styles.overlayIcon} />
        </WideWhiteButton>

        <WideWhiteButton onPress={openEmail} style={styles.wrap} >
          <Text style={styles.title}>Contact Burntoast</Text>
          <Ionicons name='ios-send-outline' size={35} color={ColorConstants.tintColor} style={styles.overlayIcon} />
        </WideWhiteButton>

      </BurntView>
    );
  }
}

const styles = StyleSheet.create({
  headerLeft: {
    paddingLeft: LayoutConstants.margins.m
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
