import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../styles/constants/ColorConstants';
import ScoreIcon from '../common/Icons/ScoreIcon';
import LayoutConstants from '../../styles/constants/LayoutConstants';
import GalleryThumbs from '../common/gallery/GalleryThumbs';
import ViewMoreText from '../common/ViewMoreText';

const PostPhotoListItem = ({ review, photos }) => (
  <View>
    <View style={styles.scores}>
      <View style={styles.score}>
        <ScoreIcon score={review.taste_score} width={24} height={24} />
        <Text style={styles.scoreType}>Taste</Text>
      </View>
      <View style={styles.score}>
        <ScoreIcon score={review.service_score} width={24} height={24} />
        <Text style={styles.scoreType}>Service</Text>
      </View>
      <View style={styles.score}>
        <ScoreIcon score={review.value_score} width={24} height={24} />
        <Text style={styles.scoreType}>Value</Text>
      </View>
      <View style={styles.score}>
        <ScoreIcon score={review.ambience_score} width={24} height={24} />
        <Text style={styles.scoreType}>Ambience</Text>
      </View>
    </View>

    <View style={styles.body}>
      <ViewMoreText
        numberOfLines={3}
        viewStyle={styles.body}
      >
        <Text>{review.body}</Text>
      </ViewMoreText>
    </View>

    {photos.length > 0 && (
      <View style={styles.gallery}>
        <GalleryThumbs images={photos} />
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  scores: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: LayoutConstants.margins.s,
    paddingBottom: LayoutConstants.margins.xs,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.lightSeparatorColor,
  },
  score: {
    alignItems: 'center',
  },
  scoreType: {
    marginTop: 2,
  },

  body: {
    paddingTop: LayoutConstants.margins.s,
  },

  gallery: {
    marginTop: LayoutConstants.margins.s
  },
});

export default PostPhotoListItem;
