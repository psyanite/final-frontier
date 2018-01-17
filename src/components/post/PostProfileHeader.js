import React, { Component } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import TimeAgo from 'react-native-timeago'
import Colors from '../../styles/constants/ColorConstants'
import ScoreIcon from '../common/Icons/ScoreIcon'
import LayoutConstants from '../../styles/constants/LayoutConstants'

export default class PostPhotoListItem extends Component {

  render() {

    const { postedBy, postedAt, overallScore } = this.props
    const profile = postedBy.profile

    return (
      <View style={styles.wrap}>
        <TouchableOpacity onPress={() => this.props.navigateToProfile(postedBy)}>
          <View style={styles.userDetails}>
            <Image
              style={styles.avatar}
              source={{ uri: profile.profile_picture }}
            />
            <View style={styles.nameWrap}>
              <Text style={styles.displayName}>{profile.display_name}</Text>
              <Text style={styles.username}>@{profile.username} · <TimeAgo time={postedAt} /></Text>
            </View>
          </View>
        </TouchableOpacity>
        {overallScore && (
          <View style={styles.overallScore}>
            <ScoreIcon score={overallScore} width={34} height={34}/>
          </View>
        )}
      </View>
    )
  }
}

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
})
