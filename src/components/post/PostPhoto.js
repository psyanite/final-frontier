import React, {Component} from 'react'
import LayoutConstants from '../../styles/constants/LayoutConstants'
import ImagePreview from '../common/Icons/ImagePreview'

export default class PostPhoto extends Component {

  render() {
    const style = {
      width: desiredDimension,
      height: desiredDimension,
      borderRadius: 4,
    }

    return (
      <ImagePreview
        style={style}
        image={this.props.photo}
      />
    )
  }
}

const desiredDimension = LayoutConstants.window.width - (2 * LayoutConstants.margins.m)
