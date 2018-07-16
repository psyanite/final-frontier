import React, { Component } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View, } from 'react-native';
import { connect } from 'react-redux';

import { Ionicons } from '@expo/vector-icons';

import PostListContainer from './components/PostListContainer';
import ProfileDetails from '../ProfileScreen/components/ProfileDetails';
import LayoutConstants from '../../styles/constants/LayoutConstants';

class ProfileScreen extends Component {

  static navigationOptions = { header: null };

  componentWillMount() {
    const { profile } = this.props;
    if (Object.keys(profile).length === 0 && profile.constructor === Object) {
      this.props.navigation.navigate('Login');
    }
  }

  navigateToSettings = () => this.props.navigation.navigate('MySettings');

  render() {
    const { profile } = this.props;

    return (
      <ScrollView style={styles.wrap}>
        { profile ? (
          <View>
            <ProfileDetails profile={profile} />
            <PostListContainer userAccountId={profile.id} />

            <TouchableOpacity
              onPress={() => this.navigateToSettings()}
              underlayColor={'transparent'}
              style={styles.moreIconWrap}
            >
              <Ionicons
                name='md-more'
                size={32}
                color={'#fff'}
                style={styles.moreIcon}
              />
            </TouchableOpacity>

          </View>
          ) : (
            <View />
        )}
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
  logo: {
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

  moreIconWrap: {
    position: 'absolute',
    top: LayoutConstants.margins.s,
    right: 0,
    justifyContent: 'flex-end',
  },
  moreIcon: {
    width: 30,
    // textShadowColor: 'rgba(0, 0, 0, 0.7)',
    // textShadowOffset: { width: 2, height: 2 },
    // textShadowRadius: 10,
  },

});

const mapStateToProps = state => ({
  profile: state.me,
});

export default connect(mapStateToProps)(ProfileScreen);
