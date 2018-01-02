import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Header } from 'react-navigation'

export const ImagePreviewHeader = ({ props, uri }) => {
  return (
    <View>
      <Image
        style={StyleSheet.absoluteFill}
        image={{ photo: uri }}
      />
      <Header {...props} />
    </View>
  )
}

