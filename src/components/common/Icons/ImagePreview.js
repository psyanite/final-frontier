import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Image, TouchableOpacity, View } from 'react-native'
import GalleryCarousel from '../gallery/GalleryCarousel'
import Overlay from '../Overlay'

class ImagePreview extends Component {
  state = {
    displayOverlay: false,
    overlayContent: null,
  }

  hideOverlay = () => {
    this.setState({
      displayOverlay: false,
      overlayContent: null,
    })
  }

  buildGalleryCarousel = () => (
    <GalleryCarousel images={[this.props.image]} />
  )

  handlePreviewPress = () => {
    const gallery = this.buildGalleryCarousel()
    this.setState({
      displayOverlay: true,
      overlayContent: gallery
    })
  }

  render() {
    return (
      <View>
        {
          this.state.displayOverlay
          && this.state.overlayContent
          && <Overlay onClose={this.hideOverlay}>{this.state.overlayContent}</Overlay>
        }
        <TouchableOpacity onPress={() => this.handlePreviewPress()}>
          <Image
            style={this.props.style}
            source={{ uri: this.props.image.photo }}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

ImagePreview.propTypes = {
  image: PropTypes.object.isRequired,
  style: PropTypes.object,
}

ImagePreview.defaultProps = {
  style: { width: 50, height: 50 },
}

export default ImagePreview
