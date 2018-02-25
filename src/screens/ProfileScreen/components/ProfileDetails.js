import React from 'react'
import {
  Image, StyleSheet, Text, View} from 'react-native'

import AngledImageHeader from '../../../components/navigation/headers/AngledImageHeader'

const StoreDetails = ({ profile }) => (
  // todo: replace angledimageheader with image header and add height prop to image header
  <View>

    <AngledImageHeader uri={profile.profile_picture} />

    <View style={styles.userDetails}>
      <Image style={styles.avatar} source={{ uri: profile.profile_picture }} />
      <View style={styles.nameWrap}>
        <Text style={styles.displayName}>{profile.display_name}</Text>
        <Text style={styles.username}>@{profile.username}</Text>
      </View>
    </View>

  </View>
)

const styles = StyleSheet.create({
  headerRight: {
    position: 'absolute',
    top: 30,
    right: 15,
  },

  userDetails: {
    marginTop: -60,
    marginLeft: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 140,
    height: 140,
    marginTop: 15,
    borderRadius: 70,
    borderWidth: 5,
    borderColor: '#fff',
  },

  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 15,
    paddingLeft: 15,
  },
  nameWrap: {
    marginTop: 20,
    marginLeft: 7,
  },
  displayName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  userName: {
    fontSize: 15,
  },

  // addButtonView: {
  //   flex: 1,
  //   alignItems: 'flex-end',
  // },
  // addButton: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   padding: 8,
  //   backgroundColor: '#8bcdff', // todo: use color constant
  //   borderRadius: 3,
  // },
  // addButtonText: {
  //   marginLeft: 3,
  //   color: '#fff',
  //   fontWeight: 'bold',
  //   fontSize: 15,
  // },
})

export default StoreDetails
