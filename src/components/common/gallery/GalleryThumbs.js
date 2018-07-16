/* eslint-disable no-mixed-operators */
import React, { PureComponent } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import LayoutConstants from '../../../styles/constants/LayoutConstants';
import GalleryCarousel from './GalleryCarousel';
import Overlay from '../Overlay';

/**
 * A collection of thumbnails of a collection of gallery images.
 * Upon onPress of a specific image thumbnail displays a black overlay
 * with a GalleryCarousel on top displaying the pressed picture in full.
 * Users can then swipe left and right to view the rest of the gallery.
 */
class GalleryThumbs extends PureComponent {

  state = { overlayContent: null };

  hideOverlay = () => {
    this.setState({ overlayContent: null });
  };

  buildGalleryCarousel = (index) => (
    <GalleryCarousel images={this.props.images} initialPage={index} />
  );

  handleThumbPress = (index) => {
    const gallery = this.buildGalleryCarousel(index);
    this.setState({ overlayContent: gallery });
  };

  renderGalleryThumb = (image, index) => (
    <TouchableOpacity
      key={image.id.toString()}
      onPress={() => this.handleThumbPress(index)}
      activeOpacity={1.0}
    >
      <Image
        style={styles.thumb}
        source={{ uri: image.photo }}
      />
    </TouchableOpacity>
  );

  render() {
    const { images } = this.props;

    if (images.length > 0) {
      return (
        <View>
          {
            this.state.overlayContent
            && <Overlay onClose={this.hideOverlay}>{this.state.overlayContent}</Overlay>
          }
          <View style={styles.gallery}>
            {images.map((image, index) => this.renderGalleryThumb(image, index))}
          </View>
        </View>
      );
    }
    return null;
  }

}

const galleryGap = 2;
const numberOfThumbs = 5;
const numberOfGaps = numberOfThumbs - 1;
const windowWidth = LayoutConstants.window.width;
const sideMargin = LayoutConstants.margins.m;
const numberOfSideMargins = 2;
const galleryWidth = windowWidth - numberOfSideMargins * sideMargin;
const thumbSize = Math.floor((galleryWidth - numberOfGaps * galleryGap) / numberOfThumbs);

const styles = StyleSheet.create({
  gallery: {
    flexDirection: 'row',
  },
  thumb: {
    width: thumbSize,
    height: thumbSize,
    marginRight: galleryGap,
    borderRadius: 3,
    resizeMode: 'cover'
  }
});

GalleryThumbs.propTypes = {
  images: PropTypes.array.isRequired,
};

export default GalleryThumbs;
