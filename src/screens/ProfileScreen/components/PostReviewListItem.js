import React from 'react'
import { StyleSheet, View } from 'react-native'
import LayoutConstants from '../../../styles/constants/LayoutConstants'
import PostReview from '../../../components/post/PostReview'
import PostStoreHeader from '../../../components/post/PostStoreHeader'

const PostListItem = ({ post, navigateToStore }) => (
  <View key={post.id} style={styles.wrap}>

    <PostStoreHeader
      store={post.store}
      postedAt={post.posted_at}
      overallScore={post.post_review.overall_score}
      navigateToStore={navigateToStore}
    />

    <PostReview
      review={post.post_review}
      photos={post.post_photos}
    />

  </View>
)

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#fff',
    paddingTop: LayoutConstants.margins.s,
    paddingRight: LayoutConstants.margins.m,
    paddingBottom: LayoutConstants.margins.m,
    paddingLeft: LayoutConstants.margins.m,
  },
})

export default PostListItem
