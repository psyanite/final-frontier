import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import PostList from './PostList'
import * as ActionCreators from '../../../modules/post/actions'

class PostListContainer extends Component {
  componentDidMount() {
    this.props.actions.fetchPostsByStoreId(this.props.storeId)
  }

  // todo: navigateToPost
  // _navigateToStore = (store) => {
  //   this.props.navigate('Store', store)
  // }

  render() {
    return (
      <PostList
        posts={this.props.posts}
      />
    )
  }
}

const mapStateToProps = state => ({
  stores: state.stores,
  posts: state.posts,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer)
