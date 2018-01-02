/* eslint-disable no-mixed-operators */
import React, { Component } from 'react'
import {StyleSheet, Image, View, TouchableOpacity, Text} from 'react-native'
import PropTypes from 'prop-types'
import LayoutConstants from '../../../styles/constants/LayoutConstants'
import GalleryCarousel from './GalleryCarousel'
import Overlay from '../Overlay'

class GalleryThumbs extends Component {
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

  buildGalleryCarousel = (index) => (
    <GalleryCarousel images={this.props.images} initialPage={index} />
  )

  handleThumbPress = (index) => {
    const gallery = this.buildGalleryCarousel(index)
    this.setState({
      displayOverlay: true,
      overlayContent: gallery
    })
  }

  renderGalleryThumb = (image, index) => (
    <TouchableOpacity key={image.id} onPress={() => this.handleThumbPress(index)}>
      <Image
        style={styles.thumb}
        source={{ uri: image.photo }}
      />
    </TouchableOpacity>
  )

  render() {
    const { images } = this.props

    if (images.length > 0) {
      return (
        <View>
          {
            this.state.displayOverlay
            && this.state.overlayContent
            && <Overlay onClose={this.hideOverlay}>{this.state.overlayContent}</Overlay>
          }
          <View style={styles.gallery}>
            {images.map((image, index) => this.renderGalleryThumb(image, index))}
          </View>
        </View>
      )
    }
    return null
  }

}

const galleryGap = 2
const numberOfThumbs = 5
const numberOfGaps = numberOfThumbs - 1
const windowWidth = LayoutConstants.window.width
const sideMargin = LayoutConstants.margins.m
const numberOfSideMargins = 2
const galleryWidth = windowWidth - numberOfSideMargins * sideMargin
const thumbWidth = Math.floor((galleryWidth - numberOfGaps * galleryGap) / numberOfThumbs)

const styles = StyleSheet.create({
  gallery: {
    flexDirection: 'row',
  },
  thumb: {
    width: thumbWidth,
    height: thumbWidth,
    marginRight: galleryGap,
    borderRadius: 3,
    resizeMode: 'cover'
  }
})

GalleryThumbs.propTypes = {
  images: PropTypes.array.isRequired,
}

export default GalleryThumbs
