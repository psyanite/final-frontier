/* eslint-disable no-param-reassign */
import * as types from './types'

export default (state = [], action) => {
  switch (action.type) {

    case types.SET_POSTS: {
      return action.posts
    }

    default: {
      return state
    }

  }
}
