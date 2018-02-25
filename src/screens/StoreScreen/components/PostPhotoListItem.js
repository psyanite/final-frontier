import React from 'react'
import { StyleSheet, View } from 'react-native'
import LayoutConstants from '../../../styles/constants/LayoutConstants'
import PostPhoto from '../../../components/post/PostPhoto'
import PostProfileHeader from '../../../components/post/PostProfileHeader'

const PostPhotoListItem = ({ post, navigateToProfile }) => (
  <View key={post.id} style={styles.wrap}>

    <PostProfileHeader
      postedBy={post.posted_by}
      postedAt={post.posted_at}
      navigateToProfile={navigateToProfile}
    />

    <PostPhoto photo={post.post_photos[0]} />

  </View>
)

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

export default PostPhotoListItem
