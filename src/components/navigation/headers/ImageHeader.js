import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Header } from 'react-navigation'

export const ImageHeader = ({ props, uri }) => {
  return (
    <View>
      <Image
        style={StyleSheet.absoluteFill}
        source={{ uri }}
      />
      <Header {...props} />
    </View>
  )
}

