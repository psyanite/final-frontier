import * as types from './types'
import Toaster from '../../lib/toaster'
import { PostFields } from './queryFields'

export const fetchPostsByStoreId = (storeId) => async (dispatch, getState) => {
  const query = {
    posts: {
      field: 'postsByStoreId',
      params: { storeId },
      fields: PostFields.fields
    }
  }
  const { posts } = await Toaster.get(query)
  dispatch(setStorePosts(storeId, posts))
}

export const fetchPostsByUserAccountId = (userAccountId) => async (dispatch, getState) => {
  const query = {
    posts: {
      field: 'postsByUserAccountId',
      params: { userAccountId },
      fields: PostFields.fields
    }
  }
  const { posts } = await Toaster.get(query)
  dispatch(setProfilePosts(userAccountId, posts))
}

export const fetchPostsForLoggedInUser = (userAccountId) => async (dispatch, getState) => {
  const query = {
    posts: {
      field: 'postsByUserAccountId',
      params: { userAccountId },
      fields: PostFields.fields
    }
  }
  const { posts } = await Toaster.get(query)
  dispatch(setMyProfilePosts(posts))
}

const setStorePosts = (storeId, posts) => ({
  type: types.SET_STORE_POSTS,
  storeId,
  posts,
})

const setProfilePosts = (userAccountId, posts) => ({
  type: types.SET_PROFILE_POSTS,
  userAccountId,
  posts,
})

const setMyProfilePosts = (posts) => ({
  type: types.SET_MY_PROFILE_POSTS,
  posts,
})

export const mockFetchPostsByStoreId = (storeId) => async (dispatch, getState) => {
  const posts = [{
    id: 3,
    name: 'Workshop Meowpresso',
    phone_number: '288819222',
    cover_image: 'https://b.zmtcdn.com/data/res_imagery/16562081_RESTAURANT_bf27f21b41f1ee074a931eae5d8f719b.jpg?fit=around%7C1200%3A464&crop=1200%3A464%3B0%2C0',
    address: {
      address_first_line: 'Basement Level',
      address_second_line: null,
      address_street_number: '500',
      address_street_name: 'George Street',
      google_url: 'https://goo.gl/maps/njQmnE8NFi52'
    },
    location: {
      id: 4,
      name: 'The Galleries'
    },
    suburb: {
      id: 1,
      name: 'CBD',
      city: {
        id: 1,
        name: 'Sydney'
      }
    },
    cuisines: [{
      id: 1,
      name: 'Café'
    }, {
      id: 4,
      name: 'Brunch'
    }]
  }, {
    id: 1,
    name: 'Dumplings & Co.',
    phone_number: '296992235',
    cover_image: 'https://b.zmtcdn.com/data/res_imagery/16564570_RESTAURANT_058971a49fafe87b9c772331b251b1fa.jpg?fit=around%7C1200%3A464&crop=1200%3A464%3B0%2C0',
    address: {
      address_first_line: 'Level 2, Hawker Lane',
      address_second_line: 'Chatswood Westfield',
      address_street_number: '1',
      address_street_name: 'Anderson Street',
      google_url: 'https://goo.gl/maps/GZxSRicabTu'
    },
    location: {
      id: 5,
      name: 'Westfield Pitt Street Mall'
    },
    suburb: {
      id: 1,
      name: 'CBD',
      city: {
        id: 1,
        name: 'Sydney'
      }
    },
    cuisines: [{
      id: 1,
      name: 'Café'
    }, {
      id: 4,
      name: 'Brunch'
    }]
  }, {
    id: 2,
    name: 'Bite Chew Drink',
    phone_number: '295258017',
    cover_image: 'https://b.zmtcdn.com/data/res_imagery/16569020_RESTAURANT_817e5ad9618b57f235213a26776dc169_c.jpg?fit=around%7C1200%3A464&crop=1200%3A464%3B0%2C0',
    address: {
      address_first_line: 'Level 1, Shop 11.04',
      address_second_line: 'Regent Place Arcade',
      address_street_number: '487',
      address_street_name: 'George Street',
      google_url: 'https://goo.gl/maps/Ds7vagBoTu42'
    },
    location: null,
    suburb: {
      id: 1,
      name: 'CBD',
      city: {
        id: 1,
        name: 'Sydney'
      }
    },
    cuisines: [{
      id: 2,
      name: 'Modern Australian'
    }]
  }]
  dispatch(setStorePosts(posts))
}
