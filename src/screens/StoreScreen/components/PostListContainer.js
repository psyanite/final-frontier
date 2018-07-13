import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PostList from './PostList';
import * as ActionCreators from '../../../modules/post/actions';

class PostListContainer extends Component {

  componentDidMount() {
    this.props.actions.fetchPostsByStoreId(this.props.storeId);
  }

  navigateToProfile = (user) => {
    this.props.navigate('Profile', user);
  }

  render() {
    return (
      <PostList
        posts={this.props.posts}
        navigateToProfile={this.navigateToProfile}
      />
    );
  }
}

const mapStateToProps = (state, props) => {
  const posts = state.posts.storePosts[props.storeId];
  return posts ? { posts } : { posts: [] };
};


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer);
