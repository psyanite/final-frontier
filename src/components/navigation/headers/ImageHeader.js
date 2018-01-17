import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Header } from 'react-navigation'

export default ImageHeader = ({ uri }) => (
  <View style={styles.wrap}>
    <Image
      style={StyleSheet.absoluteFill}
      source={{ uri }}
    />
  </View>
)

const styles = StyleSheet.create({
  wrap: {
    height: 100,
  }
})
