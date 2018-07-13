import React from 'react';
import { StyleSheet, View } from 'react-native';
import LayoutConstants from '../../../styles/constants/LayoutConstants';
import PostProfileHeader from '../../../components/post/PostProfileHeader';
import PostReview from '../../../components/post/PostReview';

const PostListItem = ({ post, navigateToProfile }) => (
  <View key={post.id} style={styles.wrap}>

    <PostProfileHeader
      postedBy={post.posted_by}
      postedAt={post.posted_at}
      overallScore={post.post_review.overall_score}
      navigateToProfile={navigateToProfile}
    />

    <PostReview
      review={post.post_review}
      photos={post.post_photos}
    />

  </View>
);

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#fff',
    paddingTop: LayoutConstants.margins.s,
    paddingRight: LayoutConstants.margins.m,
    paddingBottom: LayoutConstants.margins.m,
    paddingLeft: LayoutConstants.margins.m,
  },
});

export default PostListItem;
