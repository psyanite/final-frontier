import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import BurntHeader from '../../components/navigation/headers/BurntHeader'
import GenericIcon, { Names as GenericIcons } from '../../components/common/Icons/GenericIcon'

import ColorConstants from '../../styles/constants/ColorConstants'
import LayoutConstants from '../../styles/constants/LayoutConstants'
import StoreListContainer from './components/StoreList/StoreListContainer'
import CustomIcon, { Names as CustomIcons } from '../../components/common/Icons/CustomIcon'

class HomeScreen extends Component {

  static navigationOptions = () => {
    const title = <Text style={styles.headerTitle}>Burntoast</Text>
    const headerRight = (
      <View style={styles.headerRight}>
        <GenericIcon name={GenericIcons.Search} width={25} height={25} />
      </View>
    )
    return ({
      header: (props) => <BurntHeader {...props} />,
      headerTitle: title,
      headerRight,
      headerStyle: { backgroundColor: 'transparent' },
    })
  }

  state = {
    displayOverlay: true,
    overlayContent: null,
  }

  render() {
    return (
      <View style={styles.container}>
        <StoreListContainer navigate={this.props.navigation.navigate} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: 'grand-hotel',
    fontSize: 40,
    color: '#fff',
    marginLeft: LayoutConstants.margins.m,
    marginTop: 5,
  },
  headerRight: {
    marginRight: LayoutConstants.margins.m,
  },
  container: {
    flex: 1,
    backgroundColor: ColorConstants.bodyBackgroundColor,
  },
  contentContainer: {
    paddingTop: 30,
  },
})

function mapStateToProps(state) {
  return {
    searchedRecipes: state.searchedRecipes
  }
}

export default connect(mapStateToProps)(HomeScreen)
