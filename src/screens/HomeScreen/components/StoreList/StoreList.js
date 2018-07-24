import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { List } from 'react-native-elements';

import StoreListItem from './StoreListItem';

import Colors from '../../../../styles/constants/ColorConstants';
import LayoutConstants from '../../../../styles/constants/LayoutConstants';

export default class StoreList extends Component {
  state = {
    ingredientsInput: 'Banana'
  };

  renderSeparator = () => <View style={{ flex: 1, height: LayoutConstants.margins.m }} />;

  renderStore = ({ item }) => (
    <StoreListItem
      store={item}
      navigateToStore={this.props.navigateToStore}
    />
  );

  render() {
    return (
      <View style={{ marginTop: LayoutConstants.margins.s }}>
        <FlatList
          numColumns={2}
          data={this.props.stores}
          renderItem={this.renderStore}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}

