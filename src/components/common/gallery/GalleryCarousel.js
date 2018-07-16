import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-native-image-gallery';

/**
 * A slideshow, carousel-like presentation where
 * users view images by swiping left and right.
 * GalleryCarousel is a wrapper around Gallery from 'react-native-image-gallery.
 */
class GalleryCarousel extends PureComponent {

  onChangeImage = (index) => {
    this.setState({ index });
  };

  render() {
    const images = this.props.images.map((image) => ({
      source: {
        uri: image.photo
      }
    }));
    return (
      <Gallery
        style={this.props.style}
        images={images}
        onPageSelected={this.onChangeImage}
        initialPage={this.props.initialPage}
      />
    );
  }
}

GalleryCarousel.propTypes = {
  images: PropTypes.array.isRequired,
  initialPage: PropTypes.number,
  style: PropTypes.object,
};

GalleryCarousel.defaultProps = {
  initialPage: 0,
  style: { flex: 1 },
};

export default GalleryCarousel;
