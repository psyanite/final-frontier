import React, { Component } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon, { Names as Icons } from '../../../components/common/Icons/CustomIcons'
import Colors from '../../../styles/constants/ColorConstants'
import LayoutConstants from '../../../styles/constants/LayoutConstants'
import GalleryThumbs from '../../../components/common/GalleryThumbs'

export default class PostListItem extends Component {

  // todo: when the PostListItem is pressed, open review in large view? or expand review?
  _handleOnPress = () => {
    // this.props.onPress(this.props.store)
  }

  render() {
    const post = Object.assign({}, this.props.post)
    const review = post.post_review
    const photos = post.post_photos
    const postedBy = post.posted_by.profile
    return (
      <TouchableOpacity onPress={this._handleOnPress}>
        <View key={post.id} style={styles.wrap}>

          <View style={styles.header}>
            <View style={styles.userDetails}>
              <Image
                style={styles.avatar}
                source={{ uri: postedBy.profile_picture }}
              />
              <View style={styles.nameWrap}>
                <Text style={styles.displayName}>{postedBy.display_name}</Text>
                <Text style={styles.username}>@{postedBy.username}</Text>
              </View>
            </View>
            <View style={styles.overallScore}>
              <Icon name={Icons.BreadHeart} width={24} height={24} />
              <Text style={styles.overallScoreType}>{review.overall_score}</Text>
            </View>
          </View>

          <View style={styles.scores}>
            <View style={styles.score}>
              <Icon name={Icons.BreadHeart} width={24} height={24} />
              <Text style={styles.scoreType}>Taste</Text>
              <Text style={styles.scoreType}>{review.taste_score}</Text>
            </View>
            <View style={styles.score}>
              <Icon name={Icons.BreadHeart} width={24} height={24} />
              <Text style={styles.scoreType}>Service</Text>
              <Text style={styles.scoreType}>{review.service_score}</Text>
            </View>
            <View style={styles.score}>
              <Icon name={Icons.BreadHeart} width={24} height={24} />
              <Text style={styles.scoreType}>Value</Text>
              <Text style={styles.scoreType}>{review.value_score}</Text>
            </View>
            <View style={styles.score}>
              <Icon name={Icons.BreadHeart} width={24} height={24} />
              <Text style={styles.scoreType}>Ambience</Text>
              <Text style={styles.scoreType}>{review.ambience_score}</Text>
            </View>
          </View>


          <View style={styles.body}>
            <Text style={styles.bodyText}>{review.body}</Text>
          </View>

          {photos ? (
            <View style={styles.gallery}>
              <GalleryThumbs images={photos} />
            </View>
          ) : null}

        </View>
      </TouchableOpacity>
    )
  }

}


const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#fff',
    paddingTop: LayoutConstants.margins.s,
    paddingRight: LayoutConstants.margins.m,
    paddingBottom: LayoutConstants.margins.l,
    paddingLeft: LayoutConstants.margins.m,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: LayoutConstants.margins.s,
    marginBottom: LayoutConstants.margins.l,
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

  },
  overallScoreType: {

  },

  scores: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightSeparatorColor,
  },
  score: {

  },
  scoreType: {

  },

  gallery: {
    marginTop: LayoutConstants.margins.s
  },
})
