import React from 'react'
import { NavigationActions } from 'react-navigation'
import { StyleSheet, TouchableHighlight } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import LayoutConstants from '../../../styles/constants/LayoutConstants'

const BackTouchable = ({ navigation, size, color }) => (
  <TouchableHighlight
    onPress={() => navigation.dispatch(NavigationActions.back())}
    underlayColor={'transparent'}
    style={styles.wrap}
  >
    <Ionicons
      name='ios-arrow-back'
      size={size}
      color={color}
      style={styles.icon}
    />
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    top: LayoutConstants.margins.s,
    left: LayoutConstants.margins.m,
    width: 100,
  },
  icon: {
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 10,
  },
})

BackTouchable.defaultProps = {
  size: 32,
  color: '#fff',
}

export default BackTouchable
