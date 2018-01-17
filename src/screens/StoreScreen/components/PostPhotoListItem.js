import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import LayoutConstants from '../../../styles/constants/LayoutConstants'
import PostPhoto from '../../../components/post/PostPhoto'
import PostProfileHeader from '../../../components/post/PostProfileHeader'

export default class PostPhotoListItem extends Component {

  render() {

    const { post } = this.props

    return (
      <View key={post.id} style={styles.wrap}>

        <PostProfileHeader
          postedBy={post.posted_by}
          postedAt={post.posted_at}
          navigateToProfile={this.props.navigateToProfile}
        />

        <PostPhoto photo={post.post_photos[0]}/>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: LayoutConstants.margins.s,
    paddingRight: LayoutConstants.margins.m,
    paddingBottom: LayoutConstants.margins.l,
    paddingLeft: LayoutConstants.margins.m,
  },
})
