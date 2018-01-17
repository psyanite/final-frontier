import * as types from './types'

const initialState = {
  storePosts: {},
  profilePosts: {},
  myProfilePosts: [],
}

export default (state = initialState, action) => {
  switch (action.type) {

    case types.SET_STORE_POSTS: {
      const storePosts = Object.assign({}, state.storePosts, {
        [action.storeId]: action.posts
      })
      return Object.assign({}, state, { storePosts })
    }

    case types.SET_PROFILE_POSTS: {
      const profilePosts = Object.assign({}, state.profilePosts, {
        [action.userAccountId]: action.posts
      })
      return Object.assign({}, state, { profilePosts })
    }

    case types.SET_MY_PROFILE_POSTS: {
      return Object.assign({}, state, {
        myProfilePosts: action.posts
      })
    }

    default: {
      return state
    }

  }
}
