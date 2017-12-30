/* eslint-disable no-param-reassign */
import * as types from './types'

export default (state = [], action) => {
  switch (action.type) {

    case types.SET_SEARCHED_STORES: {
      return action.stores
    }

    default: {
      return state
    }

  }
}
