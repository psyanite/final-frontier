import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'

import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

import { ImageHeader } from '../../components/navigation/headers/ImageHeader'

import StoreDetails from './components/StoreDetails'
import PostListContainer from './components/PostListContainer'
import LayoutConstants from '../../styles/constants/LayoutConstants'

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
      <TouchableHighlight onPress={() => navigation.goBack()}>
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

  render() {
    const store = this.props.navigation.state.params

    return (
      <ScrollView>
        <StoreDetails store={store} />
        <PostListContainer
          storeId={store.id}
          navigate={this.props.navigation.navigate}
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: LayoutConstants.margins.m,
  },
})

function mapStateToProps(state) {
  return {
    searchedRecipes: state.searchedRecipes
  }
}

export default connect(mapStateToProps)(StoreScreen)
