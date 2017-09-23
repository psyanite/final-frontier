import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { phonecall as phoneCall } from 'react-native-communications'
import openMap from 'react-native-open-maps'

import { Linking, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import CustomIcon, { Names as CustomIcons } from '../components/common/Icons/CustomIcons'

import { ImageHeader } from '../components/navigation/headers/ImageHeader'

class StoreScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    const storeHeader = (props) => {
      const newProps = {
        props: Object.assign({}, props, { style: { height: 100 } }),
        uri: navigation.state.params.cover_image
      }
      return <ImageHeader {...newProps} />
    }

    const left = (
      <TouchableHighlight onPress={navigation.goBack}>
        <View style={styles.headerLeft}>
          <Ionicons
            name="ios-arrow-back"
            size={32}
            color="#fff"
            style={{
              textShadowColor: 'rgba(0, 0, 0, 0.4)',
              textShadowOffset: { width: 2, height: 1 },
              textShadowRadius: 10,
              width: 20,
            }}
          />
        </View>
      </TouchableHighlight>
    )
    return ({
      header: storeHeader,
      headerLeft: left,
      headerStyle: { backgroundColor: 'transparent' },
    })
  }

  formatViewPhoneNumber = (input) => {
    const m = input.match(/^(\d)(\d{4})(\d{4})$/)
    return (!m) ? null : `0${m[1]} ${m[2]} ${m[3]}`
  }

  formatCallPhoneNumber = (input) => {
    const m = input.match(/^(\d)(\d{8})$/)
    return (!m) ? null : `${m[2]}`
  }

  render() {
    const store = this.props.navigation.state.params

    console.log(store)

    const view = Object.assign({}, store)
    view.location = `${store.suburb.name}, ${store.suburb.city.name}`

    view.cuisines = ''
    if (store.cuisines) {
      view.cuisines = store.cuisines.map(cuisine => cuisine.name).join(', ')
    }

    view.phone_number = this.formatViewPhoneNumber(store.phone_number)

    const address = store.address

    return (
      <View style={styles.container}>

        <View style={styles.header}>

          <View style={styles.details}>
            <Text style={styles.name}>{view.name}</Text>

            <TouchableOpacity onPress={() => phoneCall(this.formatCallPhoneNumber(store.phone_number), true)}>
              <View style={styles.detail}>
                <CustomIcon name={CustomIcons.Phone} width={20} height={20} />
                <Text style={styles.phoneLineText}>{view.phone_number}</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.detail}>
              <CustomIcon name={CustomIcons.Fork} width={20} height={20} />
              <Text style={styles.cuisineLineText}>{view.cuisines}</Text>
            </View>

            <TouchableOpacity onPress={() => Linking.openURL(address.google_url)}>
              <View style={styles.address}>
                <View style={styles.firstLine}>
                  <CustomIcon name={CustomIcons.Location} width={20} height={20} />
                  <Text style={styles.addressLineText}>{address.address_first_line}</Text>
                </View>
                <Text style={styles.addressLine}>{address.address_second_line}</Text>
                <Text style={styles.addressLine}>{address.address_street_number} {address.address_street_name}</Text>
                <Text style={styles.addressLine}>{view.location}</Text>
              </View>
            </TouchableOpacity>

        </View>

        <View style={styles.ratings}>
          <View style={styles.rating}>
            <Text style={styles.ratingCount}>999</Text>
            <View style={styles.ratingIcon}>
              <CustomIcon name={CustomIcons.BreadHeart} width={24} height={24} />
            </View>
          </View>
          <View style={styles.rating}>
            <Text style={styles.ratingCount}>15</Text>
            <View style={styles.ratingIcon}>
              <CustomIcon name={CustomIcons.BreadOkay} width={24} height={24} />
            </View>
          </View>
          <View style={styles.rating}>
            <Text style={styles.ratingCount}>2</Text>
            <View style={styles.ratingIcon}>
              <CustomIcon name={CustomIcons.BreadCross} width={24} height={24} />
            </View>
          </View>
        </View>


        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
  },

  avatarView: {
    width: 100,
    height: 100,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 4,
  },

  name: {
    marginBottom: 10,
    fontSize: 22,
    fontWeight: 'bold',
  },

  details: {
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginLeft: 10,
  },

  detail: {
    flexDirection: 'row',
    marginBottom: 6,
  },


  firstLine: {
    flexDirection: 'row',
  },
  phoneLineText: {
    marginLeft: 5,
    fontSize: 17,
  },
  cuisineLineText: {
    marginTop: 2,
    marginLeft: 5,
    fontSize: 17,
  },
  addressLineText: {
    marginLeft: 5,
    fontSize: 17,
  },

  address: {
    marginTop: 3,
    marginBottom: 3,
  },
  addressLine: {
    marginLeft: 25,
    fontSize: 17,
  },

  ratings: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: 4,
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  ratingCount: {
    opacity: 0.6,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#9b4e20',
    marginTop: 4,
    marginRight: 4,
  },

})

function mapStateToProps(state) {
  return {
    searchedRecipes: state.searchedRecipes
  }
}

export default connect(mapStateToProps)(StoreScreen)
