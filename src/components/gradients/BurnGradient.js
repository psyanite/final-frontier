import React from 'react'
import { LinearGradient } from 'expo'

/**
 * Customized LinearGradient component for the signature Burnt color scheme
 */
const BurntGradient = (props) => <LinearGradient {...props} />

BurntGradient.defaultProps = {
  start: [0, 0],
  end: [1, 1],
  locations: [0, 0.6, 1.0],
  colors: ['#ffc86b', '#ffab40', '#c45d35'],
}

export default BurntGradient
