import React, { Component } from 'react'
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'

class Overlay extends Component {

  render() {
    return (
      <View style={styles.background}>
        <Modal transparent onRequestClose={() => this.props.onClose()}>
          <View style={styles.background} />
          <View style={styles.content}>
            {this.props.children}
          </View>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => this.props.onClose()}>
              <Text style={styles.closeButton}>×</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#000'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    alignItems: 'flex-end',
  },
  closeButton: {
    marginLeft: 20,
    width: 57,
    fontSize: 52,
    lineHeight: 57,
    textAlign: 'center',
    color: 'white',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 1.5,
    shadowColor: 'black',
    shadowOpacity: 0.8,
  },
})

Overlay.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default Overlay
