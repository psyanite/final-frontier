import React, { Component } from 'react'
import { FlatList, Text, TouchableHighlight, View } from 'react-native'
import { List } from 'react-native-elements'

import StoreListItem from './StoreListItem'

import Colors from '../../../styles/constants/Colors'

export default class StoreList extends Component {
  state = {
    ingredientsInput: 'Banana'
  }

  _handleFetchPress = async () => {
    this.props.fetchStores(this.state.ingredientsInput)
  }

  _buildStores = () => {
    const stores = this.props.stores
    return Object.keys(stores).map((key) => stores[key])
  }

  _renderSeparator = () => (
    <View
      style={{
        height: 25,
        width: '100%',
        backgroundColor: Colors.bodyBackgroundColor,
      }}
    />
  )

  _renderStore = ({ item }) => (
      <StoreListItem
        store={item}
        onPress={this.props.navigateToStore}
      />
    )

  render() {
    return (
      <View>
        <TouchableHighlight onPress={() => this._handleFetchPress()}>
          <Text>MONEY MONEY MONEY, MUST BE FUNNY, IN A RICH MAN'S WORLD</Text>
        </TouchableHighlight>
        <List>
          <FlatList
            data={this._buildStores()}
            renderItem={this._renderStore}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={this._renderSeparator}
          />
        </List>

      </View>
    )
  }

}
