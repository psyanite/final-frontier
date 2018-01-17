import React, { Component } from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View, } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import AngledImageHeader from '../../components/navigation/headers/AngledImageHeader'
import PostListContainer from './components/PostListContainer'
import BackTouchable from '../../components/navigation/touchables/BackTouchable'


export default class ProfileScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
      headerLeft: <BackTouchable navigation={navigation} />,
      headerStyle: {
        position: 'absolute',
        backgroundColor: 'transparent',
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0,
      },
    })

  render() {
    let userAccount = {
      id: 1,
      profile: {
        username: 'lytele_x',
        display_name: 'Luna Lytele',
        profile_picture: 'https://instagram.fsyd4-1.fna.fbcdn.net/t51.2885-15/sh0.08/e35/p750x750/25011194_154776358620802_195638642255855616_n.jpg',
      }
    }

    if (this.props.navigation.state.params) {
      userAccount = this.props.navigation.state.params
    }
    const profile = userAccount.profile
    return (
      <View style={styles.wrap}>

        <AngledImageHeader uri={profile.profile_picture} />

        <View style={styles.userDetails}>
          <Image style={styles.avatar} source={{ uri: profile.profile_picture }} />
          <View style={styles.nameWrap}>
            <Text style={styles.displayName}>{profile.display_name}</Text>
            <Text style={styles.username}>@{profile.username}</Text>
            <TouchableHighlight>
              <Ionicons name='md-share' size={20} color={'#ff884e'} />
            </TouchableHighlight>
          </View>
        </View>

        <PostListContainer userAccountId={userAccount.id} />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flex: 1,
    backgroundColor: '#fff',
  },
  userDetails: {
    marginTop: -80,
    marginLeft: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  gradientBackground: {
    flex: 1,
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    height: 115,
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

  addButtonView: {
    flex: 1,
    alignItems: 'flex-end',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    backgroundColor: '#8bcdff', // todo: use color constant
    borderRadius: 3,
  },
  addButtonText: {
    marginLeft: 3,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
})
