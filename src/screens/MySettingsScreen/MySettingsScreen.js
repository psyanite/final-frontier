import React, { Component } from 'react';
import { Linking, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Ionicons } from '@expo/vector-icons';
import ColorConstants from '../../styles/constants/ColorConstants';
import LayoutConstants from '../../styles/constants/LayoutConstants';
import * as ActionCreators from '../../modules/me/actions';
import WideButton, { Types as WideButtonTypes } from '../../components/common/buttons/WideButton';
import HeaderBack from '../../components/navigation/headers/HeaderBack';
import BurntView from '../../components/common/BurntView';
import GenericIcon, { Names as GenericIcons } from '../../components/common/icons/GenericIcon';

class MySettingsScreen extends Component {
  
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <Text style={{ color: '#fff', fontSize: 26 }}>Settings</Text>,
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

        <WideButton onPress={logout} style={styles.wrap} type={WideButtonTypes.Light}>
          <Text style={styles.title}>Logout</Text>
          <GenericIcon name={GenericIcons.Logout} fill={ColorConstants.tintColor} width={30} height={30} />
        </WideButton>

        <WideButton onPress={openEmail} style={styles.wrap} type={WideButtonTypes.Light}>
          <Text style={styles.title}>Contact Burntoast</Text>
          <GenericIcon name={GenericIcons.Paperplane} fill={ColorConstants.tintColor} width={30} height={30} />
        </WideButton>

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
