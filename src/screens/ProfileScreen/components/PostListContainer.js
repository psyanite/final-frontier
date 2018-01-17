import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as PostActionCreators from '../../../modules/post/actions'
import * as StoreActionCreators from '../../../modules/store/actions'

import PostList from './PostList'

class PostListContainer extends Component {

  componentDidMount() {
    this.props.actions.fetchPostsByUserAccountId(this.props.userAccountId)
  }

  navigateToStore = (store) => {
    this.props.navigate('Store', store)
  }

  render() {
    return (
      <PostList
        posts={this.props.posts}
        navigateToStore={this.navigateToStore}
      />
    )
  }
}

const mapStateToProps = (state, props) => {
  const posts = state.posts.profilePosts[props.userAccountId]
  return posts ? { posts } : { posts: [] }
}


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(PostActionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer)
