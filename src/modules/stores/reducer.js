import * as types from './types'

export default (state = [], action) => {
  switch (action.type) {

    case types.SET_SEARCHED_STORES: {
      if (Array.isArray(action.stores)) {
        return action.stores.reduce((map, store) => {
          map[store.id] = store
          return map
        }, {})
      }
      return {}
    }

    default: {
      return state
    }

  }
}
