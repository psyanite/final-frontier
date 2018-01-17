import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { Ionicons } from '@expo/vector-icons'
import LayoutConstants from '../../../styles/constants/LayoutConstants'

class ShareTouchable extends Component {
  render() {
    const { size, share, color } = this.props
    return (
      <TouchableOpacity
        onPress={() => share()}
        underlayColor={'transparent'}
        style={styles.wrap}
      >
        <Ionicons
          name='md-share'
          size={size}
          color={color}
          style={styles.icon}
        />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    top: LayoutConstants.margins.s,
    right: LayoutConstants.margins.s,
    paddingLeft: 50,
    justifyContent: 'flex-end',
  },
  icon: {
    width: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
})

ShareTouchable.propTypes = {
  share: PropTypes.func.isRequired
}

ShareTouchable.defaultProps = {
  size: 32,
  color: '#fff'
}

export default ShareTouchable
