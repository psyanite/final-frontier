import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import TimeAgo from 'react-native-timeago'

import Colors from '../../../styles/constants/ColorConstants'
import LayoutConstants from '../../../styles/constants/LayoutConstants'

import ScoreIcon from '../../../components/common/Icons/ScoreIcon'
import GalleryThumbs from '../../../components/common/gallery/GalleryThumbs'
import ViewMoreText from '../../../components/common/ViewMoreText'

export default class PostListItem extends Component {

  render() {
    const post = Object.assign({}, this.props.post)
    const review = post.post_review
    const photos = post.post_photos
    const postedBy = post.posted_by.profile
    return (
      <View key={post.id} style={styles.wrap}>

        <View style={styles.header}>
          <View style={styles.userDetails}>
            <Image
              style={styles.avatar}
              source={{ uri: postedBy.profile_picture }}
            />
            <View style={styles.nameWrap}>
              <Text style={styles.displayName}>{postedBy.display_name}</Text>
              <Text style={styles.username}>@{postedBy.username} · <TimeAgo time={post.posted_at} /></Text>
            </View>
          </View>
          <View style={styles.overallScore}>
            <ScoreIcon score={review.overall_score} width={34} height={34} />
          </View>
        </View>

        <View style={styles.scores}>
          <View style={styles.score}>
            <ScoreIcon score={review.taste_score} width={24} height={24} />
            <Text style={styles.scoreType}>Taste</Text>
          </View>
          <View style={styles.score}>
            <ScoreIcon score={review.service_score} width={24} height={24} />
            <Text style={styles.scoreType}>Service</Text>
          </View>
          <View style={styles.score}>
            <ScoreIcon score={review.value_score} width={24} height={24} />
            <Text style={styles.scoreType}>Value</Text>
          </View>
          <View style={styles.score}>
            <ScoreIcon score={review.ambience_score} width={24} height={24} />
            <Text style={styles.scoreType}>Ambience</Text>
          </View>
        </View>

        <View style={styles.body}>
          <ViewMoreText
            numberOfLines={3}
            renderTimeout={100}
            viewStyle={styles.body}
          >
            <Text>{review.body}</Text>
          </ViewMoreText>
        </View>

        {photos.length > 0 && (
          <View style={styles.gallery}>
            <GalleryThumbs images={photos} />
          </View>
        )}

      </View>
    )
  }
 }

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#fff',
    paddingTop: LayoutConstants.margins.s,
    paddingRight: LayoutConstants.margins.m,
    paddingBottom: LayoutConstants.margins.m,
    paddingLeft: LayoutConstants.margins.m,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: LayoutConstants.margins.s,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightSeparatorColor,
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
  displayName: {
    marginBottom: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 16,
  },

  overallScore: {
    justifyContent: 'center',
  },

  scores: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: LayoutConstants.margins.s,
    paddingBottom: LayoutConstants.margins.xs,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightSeparatorColor,
  },
  score: {
    alignItems: 'center',
  },
  scoreType: {
    marginTop: 2,
  },

  body: {
    paddingTop: LayoutConstants.margins.s,
  },

  gallery: {
    marginTop: LayoutConstants.margins.s
  },
})
