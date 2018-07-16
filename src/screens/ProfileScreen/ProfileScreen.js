import React, { Component } from 'react';
import { ScrollView, Share, StyleSheet } from 'react-native';

import PostListContainer from './components/PostListContainer';
import ProfileDetails from './components/ProfileDetails';
import HeaderBack from '../../components/navigation/headers/HeaderBack';
import HeaderShare from '../../components/navigation/headers/HeaderShare';
import ImageOverlayHeader from '../../components/navigation/headers/ImageOverlayHeader';

export default class ProfileScreen extends Component {

  static navigationOptions = { header: null };

  render() {
    const share = (profile) => {
      Share.share({
        message: `Check out ${profile.display_name}'s profile`,
        url: 'https://expo.io/@psyanite/burntoast',
        title: `Check out ${profile.display_name}'s profile`,
      }, {
        dialogTitle: `Share ${profile.display_name}'s profile`,
      });
    };

    let userAccount = {
      id: 1,
      profile: {
        username: 'lytele_x',
        display_name: 'Luna Lytele',
        profile_picture: 'https://imgur.com/HYz307Q.jpg',
      }
    };

    if (this.props.navigation.state.params) {
      userAccount = this.props.navigation.state.params;
    }
    return (
      <ScrollView style={styles.wrap}>

        <ImageOverlayHeader>
          <HeaderBack navigation={this.props.navigation} type={'line'} color={'#fff'} />
          <HeaderShare share={() => share(userAccount.profile)} color={'#fff'} />
        </ImageOverlayHeader>


        <ProfileDetails profile={userAccount.profile} />

        <PostListContainer
          userAccountId={userAccount.id}
          navigate={this.props.navigation.navigate}
        />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#fff',
  },
});
