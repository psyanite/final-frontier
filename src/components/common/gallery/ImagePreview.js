import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableOpacity, View } from 'react-native';
import GalleryCarousel from '../gallery/GalleryCarousel';
import Overlay from '../Overlay';

/**
 * A thumbnail of a image when pressed, will be displayed
 * in full size on top of a black overlay using GalleryCarousel.
 */
class ImagePreview extends PureComponent {

  state = { overlayContent: null };

  hideOverlay = () => {
    this.setState({ overlayContent: null });
  };

  buildGalleryCarousel = () => (
    <GalleryCarousel images={[this.props.image]} />
  );

  handlePreviewPress = () => {
    const gallery = this.buildGalleryCarousel();
    this.setState({ overlayContent: gallery });
  };

  render() {
    return (
      <View>
        {
          this.state.overlayContent
          && <Overlay onClose={this.hideOverlay}>{this.state.overlayContent}</Overlay>
        }
        <TouchableOpacity onPress={() => this.handlePreviewPress()} activeOpacity={1.0}>
          <Image
            style={this.props.style}
            source={{ uri: this.props.image.photo }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

ImagePreview.propTypes = {
  image: PropTypes.object.isRequired,
  style: PropTypes.object,
};

ImagePreview.defaultProps = {
  style: { width: 50, height: 50 },
};

export default ImagePreview;
