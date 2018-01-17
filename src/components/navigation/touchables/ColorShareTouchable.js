import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import LayoutConstants from '../../../styles/constants/LayoutConstants'
import CustomIcon, { Names as CustomIcons } from '../../common/Icons/CustomIcon'

class ShareTouchable extends Component {
  render() {
    const { size, share } = this.props
    return (
      <TouchableOpacity
        onPress={() => share()}
        underlayColor={'transparent'}
        style={styles.wrap}
      >
        <CustomIcon name={CustomIcons.Share} width={size} height={size} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    top: LayoutConstants.margins.s,
    right: LayoutConstants.margins.m,
    paddingLeft: 50
  },
})

ShareTouchable.propTypes = {
  share: PropTypes.func.isRequired
}

ShareTouchable.defaultProps = {
  size: 32
}

export default ShareTouchable
