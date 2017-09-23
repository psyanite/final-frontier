import React, { Component } from 'react'
import { Image, StyleSheet, Text, View, } from 'react-native'

import Icon, { Names as Icons } from '../components/common/Icon'
import BurntGradient from '../components/gradients/BurnGradient'

export default class ProfileScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <View style={styles.container}>

          <View style={styles.header}>
            <BurntGradient style={styles.gradientBackground} />
            <Image style={styles.avatar} source={require('../assets/images/robot-prod.png')} />
          </View>

          <View style={styles.details}>
            <View style={styles.displayNameView}>
              <Text style={styles.displayName}>Marshall Mathers</Text>
              <Text style={styles.userName}>@rap_god</Text>
            </View>

            {/*<TouchableHighlight onPress={()=>{}}>*/}
            <View style={styles.addButtonView}>
              <View style={styles.addButton} >
                <Icon name={Icons.PersonAdd} width={20} height={20} />
                <Text style={styles.addButtonText}>Add</Text>
              </View>
            </View>
            {/*</TouchableHighlight>*/}
          </View>

        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
  },
  gradientBackground: {
    flex: 1,
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    height: 115,
  },
  avatar: {
    width: 140,
    height: 140,
    marginTop: 15,
    borderRadius: 70,
    borderWidth: 1,
    borderColor: 'rgba(255, 171, 64, 0.2)',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 15,
    paddingLeft: 15,
  },
  displayNameView: {
    alignContent: 'flex-start',
  },
  displayName: {
    fontSize: 20,
  },
  userName: {
    fontSize: 15,
  },
  addButtonView: {
    flex: 1,
    alignItems: 'flex-end',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    backgroundColor: '#8bcdff', // todo: use color constant
    borderRadius: 3,
  },
  addButtonText: {
    marginLeft: 3,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
})
