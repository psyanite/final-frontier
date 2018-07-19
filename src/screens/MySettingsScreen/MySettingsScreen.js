import React, { Component } from 'react';
import { Linking, StatusBar, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Ionicons } from '@expo/vector-icons';
import ColorConstants from '../../styles/constants/ColorConstants';
import LayoutConstants from '../../styles/constants/LayoutConstants';
import * as ActionCreators from '../../modules/me/actions';
import WideButton, { Types as WideButtonTypes } from '../../components/common/buttons/WideButton';
import HeaderBack from '../../components/navigation/components/HeaderBack';
import BurntView from '../../components/common/BurntView';
import GenericIcon, { Names as GenericIcons } from '../../components/common/icons/GenericIcon';
import { routeNames } from '../../components/navigation/AppNavigator';
import { Header, Title} from '../../components/navigation/components/Header';

class MySettingsScreen extends Component {

  static navigationOptions = { header: null };

  render() {
    const logout = () => {
      this.props.actions.setMe({});
      this.props.navigation.navigate(routeNames.Login);
    };

    const openEmail = () => {
      Linking.openURL('mailto:contact@burntoast.com?subject=Hey!&body=Tell us what you think!')
        .catch(e => console.log('An error occurred', e));
    };

    const getHeader = () => {
      const left = <HeaderBack navigation={this.props.navigation} type={'line'} color={'#fff'} />;
      const title = <Title style={{ color: '#fff' }} text={'Settings'} />;
      return (<Header left={left} title={title} />);
    };

    return (
      <BurntView centerCenterYah>
        <StatusBar backgroundColor='#FFC86B' />

        { getHeader() }

        <WideButton onPress={logout} style={styles.wrap} type={WideButtonTypes.Light}>
          <Text style={styles.title}>Logout</Text>
          <GenericIcon name={GenericIcons.Logout} fill={ColorConstants.tintColor} width={30} />
        </WideButton>

        <WideButton onPress={openEmail} style={styles.wrap} type={WideButtonTypes.Light}>
          <Text style={styles.title}>Contact Burntoast</Text>
          <GenericIcon name={GenericIcons.Paperplane} fill={ColorConstants.tintColor} width={30} />
        </WideButton>

      </BurntView>
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
    fontSize: 18,
  },
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch)
});

export default connect(null, mapDispatchToProps)(MySettingsScreen);
