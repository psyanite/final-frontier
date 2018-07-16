import React, { Component } from 'react';
import { ScrollView, Share, StyleSheet } from 'react-native';

import PostListContainer from './components/PostListContainer';
import BackTouchable from '../../components/navigation/touchables/BackTouchable';
import ProfileDetails from './components/ProfileDetails';
import ShareTouchable from '../../components/navigation/touchables/ShareTouchable';

export default class ProfileScreen extends Component {

  static navigationOptions = { header: null };

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

        <ProfileDetails profile={userAccount.profile} />

        <BackTouchable navigation={this.props.navigation} type={'overlay'}/>

        <ShareTouchable share={() => this.share(userAccount)} />

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
