import * as types from './types';

export const setMe = (me) => ({
  type: types.SET_ME,
  me,
});
