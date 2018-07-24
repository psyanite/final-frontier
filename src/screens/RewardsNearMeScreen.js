import React, { Component } from 'react';
import { Platform, ScrollView, StatusBar, StyleSheet } from 'react-native';
import ColorConstants from '../styles/constants/ColorConstants';
import { Header, Title } from '../components/navigation/components/Header';
import StoreListContainer from './HomeScreen/components/StoreList/StoreListContainer';

export default class RewardsNearMeScreen extends Component {
  static navigationOptions = { header: null };

  componentDidMount() {
    this._navListener = this.props.navigation.addListener('didFocus', () => {
      if (Platform.OS === 'android') StatusBar.setBackgroundColor(ColorConstants.statusBar.grey);
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  }

  getHeader = () => {
    const title = <Title text={'Rewards Near Me'} />;
    return (<Header title={title} />);
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        { this.getHeader() }
        <StoreListContainer navigate={this.props.navigation.navigate} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
