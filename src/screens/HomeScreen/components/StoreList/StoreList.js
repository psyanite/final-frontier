import React, { Component } from 'react'
import { FlatList, Text, TouchableHighlight, View } from 'react-native'
import { List } from 'react-native-elements'

import StoreListItem from './StoreListItem'

import Colors from '../../../../styles/constants/ColorConstants'

export default class StoreList extends Component {
  state = {
    ingredientsInput: 'Banana'
  }

  _handleFetchPress = async () => {
    this.props.fetchStores(this.state.ingredientsInput)
  }

  _renderSeparator = () => (
    <View
      style={{
        height: 12,
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
        <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
          <FlatList
            data={this.props.stores}
            renderItem={this._renderStore}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={this._renderSeparator}
          />
        </List>

      </View>
    )
  }

}
