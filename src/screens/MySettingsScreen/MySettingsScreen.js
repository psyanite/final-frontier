import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Ionicons } from '@expo/vector-icons';
import ColorConstants from '../../styles/constants/ColorConstants';
import LayoutConstants from '../../styles/constants/LayoutConstants';
import * as ActionCreators from '../../modules/me/actions';
import WideWhiteButton from '../../components/common/buttons/WideWhiteButton';
import HeaderBack from '../../components/navigation/headers/HeaderBack';
import BurnView from '../../components/common/BurnView';

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
    headerLeft: <HeaderBack navigation={navigation} type={'line'} color={'#fff'} />
  });

  render() {
    const logout = async () => {
      this.props.actions.setMe({});
      this.props.navigation.navigate('Login');
    };

    return (
      <BurnView isCenterCenter>

        <WideWhiteButton onPress={logout} style={styles.wrap} >
          <Text style={styles.title}>Logout</Text>
          <Ionicons name='ios-log-out' size={32} color={ColorConstants.tintColor} style={styles.overlayIcon} />
        </WideWhiteButton>

        <WideWhiteButton onPress={() => {}} style={styles.wrap} >
          <Text style={styles.title}>Contact Burntoast</Text>
          <Ionicons name='ios-send-outline' size={35} color={ColorConstants.tintColor} style={styles.overlayIcon} />
        </WideWhiteButton>

      </BurnView>
    );
  }
}

const styles = StyleSheet.create({
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
