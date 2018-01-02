import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Gallery from 'react-native-image-gallery'

class GalleryCarousel extends Component {

  onChangeImage = (index) => {
    this.setState({ index })
  }

  images = () => this.props.images.map((image) => ({
    source: {
      uri: image.photo
    }
  }))

  render() {
    return (
      <Gallery
        style={this.props.style}
        images={this.images()}
        onPageSelected={this.onChangeImage}
        initialPage={this.props.initialPage}
      />
    )
  }
}

GalleryCarousel.propTypes = {
  images: PropTypes.array.isRequired,
  initialPage: PropTypes.number,
  style: PropTypes.object,
}

GalleryCarousel.defaultProps = {
  initialPage: 0,
  style: { flex: 1 },
}

export default GalleryCarousel
