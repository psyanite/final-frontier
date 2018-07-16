import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ActionCreators from '../../../modules/post/actions';

import PostList from '../../StoreScreen/components/PostList';

class PostListContainer extends Component {

  componentDidMount() {
    this.fetchPosts(this.props.userAccountId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.userAccountId !== nextProps.userAccountId) {
      this.fetchPosts(nextProps.userAccountId);
    }
  }

  fetchPosts = (userAccountId) => this.props.actions.fetchPostsForLoggedInUser(userAccountId);

  navigateToProfile = (user) => {
    this.props.navigate('Profile', user);
  };

  render() {
    return (
      <PostList
        posts={this.props.posts}
        navigateToProfile={this.navigateToProfile}
      />
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.myProfilePosts,
});


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer);
