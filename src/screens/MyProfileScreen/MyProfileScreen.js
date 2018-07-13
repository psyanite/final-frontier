import React, { Component } from 'react';
import { ScrollView, Share, StyleSheet, } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import PostListContainer from './components/PostListContainer';
import BackTouchable from '../../components/navigation/touchables/BackTouchable';
import ProfileDetails from '../ProfileScreen/components/ProfileDetails';
import ShareTouchable from '../../components/navigation/touchables/ShareTouchable';


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
    });

  share = (userAccount) => {
    Share.share({
      message: `911 was an inside job by ${userAccount.profile.display_name}. Jet fuel can't melt steel beams, here's proof https://expo.io/@psyanite/burntoast`,
      url: 'https://expo.io/@psyanite/burntoast',
      title: `911 was an inside job by ${userAccount.profile.display_name}`
    }, {
      dialogTitle: `BAM! SHARE IT! ${userAccount.profile.display_name} TOLD YOU TO.`,
    });
  };

  render() {
    let userAccount = {
      id: 1,
      profile: {
        username: 'nyatella',
        display_name: 'Luna',
        profile_picture: 'https://imgur.com/HYz307Q.jpg',
      }
    };

    if (this.props.navigation.state.params) {
      userAccount = this.props.navigation.state.params;
    }

    return (
      <ScrollView style={styles.wrap}>

        <ProfileDetails profile={userAccount.profile} />

        <PostListContainer userAccountId={userAccount.id} />

        <ShareTouchable share={() => this.share(userAccount)} />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#fff',
  },

  userDetails: {
    marginTop: -60,
    marginLeft: 20,
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
    width: 110,
    height: 110,
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
    marginLeft: 15,
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
});
