import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Header, Title } from '../components/navigation/components/Header';
import StoreListContainer from './HomeScreen/components/StoreList/StoreListContainer';

export default class MyRewardsScreen extends Component {
  static navigationOptions = { header: null };

  getHeader = () => {
    const title = <Title text={'My Rewards'} />;
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
