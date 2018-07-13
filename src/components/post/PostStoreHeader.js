import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TimeAgo from 'react-native-timeago';
import ScoreIcon from '../common/Icons/ScoreIcon';
import LayoutConstants from '../../styles/constants/LayoutConstants';

const PostStoreHeader = ({ store, postedAt, overallScore }) => (
  <View style={styles.wrap}>
    <TouchableOpacity onPress={() => this.props.navigateToStore(store)}>
      <View style={styles.userDetails}>
        <Image
          style={styles.avatar}
          source={{ uri: store.cover_image }}
        />
        <View style={styles.nameWrap}>
          <Text style={styles.name}>{store.name}</Text>
          <Text style={styles.timeAgo}><TimeAgo time={postedAt} /></Text>
        </View>
      </View>
    </TouchableOpacity>
    {overallScore && (
      <View style={styles.overallScore}>
        <ScoreIcon score={overallScore} width={34} height={34} />
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: LayoutConstants.margins.s,
  },
  userDetails: {
    flexDirection: 'row',
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 2,
  },
  nameWrap: {
    flexDirection: 'column',
    marginTop: 3,
  },
  name: {
    marginBottom: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
  timeAgo: {
    fontSize: 16,
  },

  overallScore: {
    justifyContent: 'center',
  },
});

export default PostStoreHeader;
