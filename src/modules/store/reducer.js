/* eslint-disable no-param-reassign */

import * as types from './types';

export default (state = {}, action) => {
  switch (action.type) {

    case types.SET_STORES: {
      const stores = {};
      action.stores.forEach((store) => {
        stores[store.id] = store;
      });
      return Object.assign({}, state, stores);
    }

    case types.SET_STORE: {
      return Object.assign({}, state, { [action.store.id]: action.store });
    }

    case types.RESET_STORE: {
        const newState = Object.assign({}, state);
        delete newState.store;
        return newState;
    }

    default: {
      return state;
    }

  }
};
