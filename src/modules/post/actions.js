/* eslint-disable max-len */
import * as types from './types'
import Toaster from '../../lib/toaster'

export const mockFetchPostsByStoreId = (storeId) => async (dispatch, getState) => {
  const allPosts = {
    1: [{ id: 2, type: 'REVIEW', posted_by: { id: 2, profile: { username: 'curious_chloe', display_name: 'Curious Chloe', profile_picture: 'https://i.pinimg.com/736x/70/51/24/7051248ece052066b0575d3e712786f4--hair-images-a-hotel.jpg' } }, posted_at: '2017-11-24T22:10:55.000Z', post_photos: [], post_review: { id: 2, overall_score: 'okay', taste_score: 'good', service_score: 'bad', value_score: 'okay', ambience_score: 'good', body: "This is the first time I'm had Dumplings and Co, it was a really good experience. I was shocked to see the number of options available for vegetarians. The menu was easy to understand the food was very tasty. We reached here at 5:20 and the restaurant re-opened on time, which showcased good hospitality. We ordered for vegetarian wonton soup and a vegetarian fried rice with mushroom and truffle oil, our order was served very fast and both the dishes were really tasty. We paid $24 for both, which was a good deal as the portions were good in size." } }, { id: 1, type: 'REVIEW', posted_by: { id: 1, profile: { username: 'nyatella', display_name: 'Luna', profile_picture: 'https://instagram.fsyd4-1.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/25009242_1265083993624512_2786963626508943360_n.jpg' } }, posted_at: '2017-12-29T04:04:20.000Z', post_photos: [{ id: 1, photo: 'https://b.zmtcdn.com/data/reviews_photos/4e2/768396f0d2f2240303be0853341a84e2_1459007636.jpg' }, { id: 2, photo: 'https://b.zmtcdn.com/data/reviews_photos/fd5/56b36df276a188e5ee74c617d24aefd5_1502800424.jpg' }], post_review: { id: 1, overall_score: 'good', taste_score: 'bad', service_score: 'bad', value_score: 'okay', ambience_score: 'okay', body: "We came for the xialongbao (Shanghai soup dumplings) and weren't disappointed. Theses are some of the best. Fill in the order form and in a few, short moments the steamers will begin to arrive, carrying delicate dumplings, full of the tasty minced pork filling and that delicious soup. The rest of the menu is also fantastic. The only thing stopping me giving 5/5 is the price. It's pretty expensive, but certainly worth it for a special occasion. I doubt you will find better value in Sydney." } }],
    2: [{ id: 3, type: 'PHOTO', posted_by: { id: 1, profile: { username: 'nyatella', display_name: 'Luna', profile_picture: 'https://instagram.fsyd4-1.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/25009242_1265083993624512_2786963626508943360_n.jpg' } }, posted_at: '2017-10-07T01:54:38.249Z', post_photos: [{ id: 3, photo: 'https://b.zmtcdn.com/data/pictures/chains/0/18347530/62820c277b3ffaa51767bc0049cbc3af.jpg' }], post_review: null }],
    3: [{ id: 4, type: 'REVIEW', posted_by: { id: 2, profile: { username: 'curious_chloe', display_name: 'Curious Chloe', profile_picture: 'https://i.pinimg.com/736x/70/51/24/7051248ece052066b0575d3e712786f4--hair-images-a-hotel.jpg' } }, posted_at: '2017-10-17T11:22:02.385Z', post_photos: [], post_review: { id: 3, overall_score: 'bad', taste_score: 'okay', service_score: 'good', value_score: 'okay', ambience_score: 'good', body: 'Consistent as always! Coffee was really good, chicken burger was juicy and saucy, and the wicked chips! Matcha cake was so light and sauce was highlight to cake, but I found it very pricey for its taste. I wouldn’t order matcha cake again, that I know for sure! Other dishes though another story :)' } }, { id: 5, type: 'PHOTO', posted_by: { id: 1, profile: { username: 'nyatella', display_name: 'Luna', profile_picture: 'https://instagram.fsyd4-1.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/25009242_1265083993624512_2786963626508943360_n.jpg' } }, posted_at: '2017-11-05T20:58:09.777Z', post_photos: [{ id: 4, photo: 'https://b.zmtcdn.com/data/pictures/chains/5/16564875/3c87693a4c32ce2fefb1c857829bc2fd.jpg' }], post_review: null }],
  }
  dispatch(setPosts(allPosts[storeId]))
}

export const fetchPostsByStoreId = (storeId) => async (dispatch, getState) => {
  const query = {
    posts: {
      field: 'postsByStoreId',
      params: { storeId },
      fields: {
        id: {},
        type: {},
        posted_by: {
          fields: {
            id: {},
            profile: {
              fields: {
                username: {},
                display_name: {},
                profile_picture: {},
              },
            },
          },
        },
        posted_at: {},
        post_photos: {
          fields: {
            id: {},
            photo: {},
          }
        },
        post_review: {
          fields: {
            id: {},
            overall_score: {},
            taste_score: {},
            service_score: {},
            value_score: {},
            ambience_score: {},
            body: {},
          }
        },
      }
    }
  }
  const { posts } = await Toaster.get(query)
  console.log(JSON.stringify(posts))
  dispatch(setPosts(posts))
}

export const setPosts = (posts) => ({
  type: types.SET_POSTS,
  posts,
})

