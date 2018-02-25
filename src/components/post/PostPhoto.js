import React from 'react'
import { StyleSheet } from 'react-native'
import LayoutConstants from '../../styles/constants/LayoutConstants'
import ImagePreview from '../common/gallery/ImagePreview'

const PostPhoto = ({ photo }) => (
  <ImagePreview
    style={style}
    image={photo}
  />
)

const size = LayoutConstants.window.width - (2 * LayoutConstants.margins.m)

const style = {
    width: size,
    height: size,
    borderRadius: 4,
}

export default PostPhoto
