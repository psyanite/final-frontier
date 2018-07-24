import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ColorConstants from '../../styles/constants/ColorConstants';
import * as ActionCreators from '../../modules/me/actions';
import WideButton, { Types as WideButtonTypes } from '../../components/common/buttons/WideButton';
import HeaderBack from '../../components/navigation/components/HeaderBack';
import BurntView from '../../components/common/BurntView';
import GenericIcon, { Names as GenericIcons } from '../../components/common/icons/GenericIcon';
import { routeNames } from '../../components/navigation/AppNavigator';
import { Header, Title } from '../../components/navigation/components/Header';

class MySettingsScreen extends Component {

  static navigationOptions = { header: null };

  getHeader = () => {
    const left = <HeaderBack navigation={this.props.navigation} type={'line'} color={'#fff'} />;
    const title = <Title style={{ color: '#fff' }} text={'Settings'} />;
    return (<Header left={left} title={title} />);
  };

  logout = () => {
    this.props.actions.setMe({});
    this.props.navigation.navigate(routeNames.Login);
  };

  openEmail = () => {
    Linking.openURL('mailto:contact@burntoast.com?subject=Hey!&body=Tell us what you think!')
      .catch(e => console.log('An error occurred', e));
  };

  render() {
    return (
      <BurntView>
        <StatusBar backgroundColor={ColorConstants.statusBar.lightTint} />

        { this.getHeader() }

        <View style={styles.content}>
          <WideButton onPress={this.logout} style={styles.wrap} type={WideButtonTypes.Light}>
            <Text style={styles.title}>Logout</Text>
            <GenericIcon name={GenericIcons.Logout} fill={ColorConstants.tintColor} width={30} />
          </WideButton>

          <WideButton onPress={this.openEmail} style={styles.wrap} type={WideButtonTypes.Light}>
            <Text style={styles.title}>Contact Burntoast</Text>
            <GenericIcon name={GenericIcons.Paperplane} fill={ColorConstants.tintColor} width={30} />
          </WideButton>
        </View>

      </BurntView>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
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
