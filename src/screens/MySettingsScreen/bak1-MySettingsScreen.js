import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Ionicons } from '@expo/vector-icons';
import ColorConstants from '../../styles/constants/ColorConstants';
import LayoutConstants from '../../styles/constants/LayoutConstants';
import * as ActionCreators from '../../modules/me/actions';
import { routeNames } from '../../components/navigation/AppNavigator';

class MySettingsScreen extends Component {

  static navigationOptions = { title: 'Settings' };

  render() {
    const logout = async () => {
      this.props.actions.setMe({});
      this.props.navigation.navigate(routeNames.Login);
    };

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.wrap} onPress={() => logout()}>
          <Text style={styles.title}>Logout</Text>
          <Ionicons
            name='ios-log-out'
            size={32}
            color={ColorConstants.bodyText}
            style={styles.overlayIcon}
          />
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity style={styles.wrap} onPress={() => {}}>
          <Text style={styles.title}>Contact Burntoast</Text>
          <Ionicons
            name='ios-send-outline'
            size={32}
            color={ColorConstants.bodyText}
            style={styles.overlayIcon}
          />
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  title: {
    color: ColorConstants.bodyText,
  },
  separator: {
    borderBottomColor: ColorConstants.bodyText,
    borderBottomWidth: 1,
  },
  container: {
    flex: 1,
    backgroundColor: ColorConstants.bodyBackgroundColor,
    paddingLeft: LayoutConstants.margins.m,
    paddingRight: LayoutConstants.margins.m,
  },
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: LayoutConstants.margins.m,
    paddingBottom: LayoutConstants.margins.m,
  },
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch)
});

export default connect(null, mapDispatchToProps)(MySettingsScreen);
