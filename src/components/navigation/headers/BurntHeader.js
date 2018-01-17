import React from 'react'
import { View } from 'react-native'
import { Header } from 'react-navigation'

import BurntGradient from '../../gradients/BurnGradient'

export default BurntHeader = props => {
  const newProps = Object.assign({}, props, { style: { backgroundColor: 'transparent' } })
  return (
    <View>
      <BurntGradient>
        <Header {...newProps} />
      </BurntGradient>
    </View>
  )
}
