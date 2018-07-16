import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { List } from 'react-native-elements';

import StoreListItem from './StoreListItem';

import Colors from '../../../../styles/constants/ColorConstants';

export default class StoreList extends Component {
  state = {
    ingredientsInput: 'Banana'
  };

  renderSeparator = () => (
    <View
      style={{
        height: 12,
        width: '100%',
        backgroundColor: Colors.bodyBackgroundColor,
      }}
    />
  );

  renderStore = ({ item }) => (
    <StoreListItem
      store={item}
      navigateToStore={this.props.navigateToStore}
    />
  );

  render() {
    return (
      <View>
        <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
          <FlatList
            data={this.props.stores}
            renderItem={this.renderStore}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </List>
      </View>
    );
  }

}
