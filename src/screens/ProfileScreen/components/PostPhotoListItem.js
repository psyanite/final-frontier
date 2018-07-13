import React from 'react';
import { StyleSheet, View } from 'react-native';
import LayoutConstants from '../../../styles/constants/LayoutConstants';
import PostPhoto from '../../../components/post/PostPhoto';
import PostStoreHeader from '../../../components/post/PostStoreHeader';

const PostPhotoListItem = ({ post, navigateToStore }) => (
  <View key={post.id} style={styles.wrap}>

    <PostStoreHeader
      store={post.store}
      postedAt={post.posted_at}
      navigateToStore={navigateToStore}
    />

    <PostPhoto photo={post.post_photos[0]} />

  </View>
);

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: LayoutConstants.margins.s,
    paddingRight: LayoutConstants.margins.m,
    paddingBottom: LayoutConstants.margins.l,
    paddingLeft: LayoutConstants.margins.m,
  },
});

export default PostPhotoListItem;
