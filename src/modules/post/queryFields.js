import { ProfileFields } from '../userAccount/queryFields';

const PostPhotoFields = {
  fields: {
    id: {},
    photo: {},
  }
};

const PostReviewFields = {
  fields: {
    id: {},
    overall_score: {},
    taste_score: {},
    service_score: {},
    value_score: {},
    ambience_score: {},
    body: {},
  }
};

export const PostFields = {
  fields: {
    id: {},
    type: {},
    store: {
      fields: {
        id: {},
        name: {},
        cover_image: {},
      },
    },
    posted_by: {
      fields: {
        id: {},
        profile: ProfileFields
      },
    },
    posted_at: {},
    post_photos: PostPhotoFields,
    post_review: PostReviewFields,
  }
};
