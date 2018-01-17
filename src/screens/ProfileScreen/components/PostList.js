import React, { Component } from 'react'
import { FlatList, View } from 'react-native'
import { List } from 'react-native-elements'

import ColorConstants from '../../../styles/constants/ColorConstants'

import PostPhotoListItem from './PostPhotoListItem'
import PostReviewListItem from './PostReviewListItem'

export default class PostList extends Component {

  _renderSeparator = () => (
    <View
      style={{
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: ColorConstants.darkSeparatorColor,
        backgroundColor: '#fff',
      }}
    />
  )

  _renderPost = ({ item }) => {
    if (item.type === 'PHOTO') {
      return (
        <PostPhotoListItem
          post={item}
          navigateToStore={this.props.navigateToStore}
        />
      )
    }
    return (
      <PostReviewListItem
        post={item}
        navigateToStore={this.props.navigateToStore}
      />
    )
  }

  render() {
    return (
      <View>
        <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
          <FlatList
            data={this.props.posts}
            renderItem={this._renderPost}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={this._renderSeparator}
          />
        </List>

      </View>
    )
  }

}
