import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import LayoutConstants from '../../../styles/constants/LayoutConstants'

export default class PostPhotoListItem extends Component {

  render() {
    console.log('PostPhotoListItem.render.props')
    console.log(this.props)
    const post = Object.assign({}, this.props.post)
    const photo = post.post_photos[0]
    console.log(photo)
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
              <Text style={styles.username}>@{postedBy.username}</Text>
            </View>
          </View>
        </View>

        <Image
          style={styles.photo}
          source={{ uri: photo.photo }}
        />

      </View>
    )
  }

}

const photoWidth = LayoutConstants.window.width - 2 * LayoutConstants.margins.m

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: LayoutConstants.margins.s,
    paddingRight: LayoutConstants.margins.m,
    paddingBottom: LayoutConstants.margins.l,
    paddingLeft: LayoutConstants.margins.m,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: LayoutConstants.margins.s,
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

  photo: {
    width: photoWidth,
    height: photoWidth,
    borderRadius: 4,
  },
})
