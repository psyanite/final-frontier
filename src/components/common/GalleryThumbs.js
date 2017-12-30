/* eslint-disable no-mixed-operators */
import React, { Component } from 'react'
import { Text, Image, StyleSheet, View } from 'react-native'
import LayoutConstants from '../../styles/constants/LayoutConstants'

export default class GalleryThumbs extends Component {

  render() {
    const images = this.props.images

    const _renderGalleryThumb = (image) => (
      <Image
        key={image.id}
        style={styles.thumb}
        source={{ uri: image.photo }}
      />
    )

    if (images.length > 0) {
      return (
        <View style={styles.gallery}>
          {images.map((photo) => _renderGalleryThumb(photo))}
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
