import React from 'react';
import {
  Image, StyleSheet, Text, View } from 'react-native';

import ImageHeader from '../../../components/navigation/headers/ImageHeader';

const ProfileDetails = ({ profile }) => (
  <View>

    {
      profile.profile_picture &&
      <ImageHeader uri={profile.profile_picture} height={80} isTinted />
    }

    <View style={styles.userDetails}>
      <Image style={styles.logo} source={{ uri: profile.profile_picture }} />
      <View style={styles.nameWrap}>
        <Text style={styles.displayName}>{profile.display_name}</Text>
        <Text style={styles.username}>@{profile.username}</Text>
      </View>
    </View>

  </View>
);

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
  logo: {
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
});

export default ProfileDetails;
