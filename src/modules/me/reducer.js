import * as types from './types';

export default (state = {}, action) => {
  switch (action.type) {

    case types.SET_ME: {
      return Object.assign({}, state, action.me);
    }

    default: {
      return state;
    }

  }
};
