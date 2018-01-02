import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import { WebBrowser } from 'expo'

import GenericIcon, { Names as GenericIcons } from '../../components/common/Icons/GenericIcon'
import { MonoText } from '../../components/common/StyledText'

import { BurntHeader } from '../../components/navigation/headers/BurntHeader'
import StoreListContainer from './components/StoreList/StoreListContainer'

import Colors from '../../styles/constants/ColorConstants'
import LayoutConstants from '../../styles/constants/LayoutConstants'

class HomeScreen extends Component {

  static navigationOptions = () => {
    const title = <Text style={styles.headerTitle}>Burntoast</Text>
    const right = (
      <View style={styles.headerRight}>
        <GenericIcon name={GenericIcons.Search} width={25} height={25} />
      </View>
    )
    return ({
      header: (props) => <BurntHeader {...props} />,
      headerTitle: title,
      headerRight: right,
      headerStyle: { backgroundColor: 'transparent' },
    })
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      )

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      )
    }
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode, your app will run at full speed.
      </Text>
    )
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode')
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          <StoreListContainer navigate={this.props.navigation.navigate} />

          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../../assets/images/robot-dev.png')
                  : require('../../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}

            <Text style={styles.getStartedText}>Get started by opening</Text>

            <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>
            </View>

            <Text style={styles.getStartedText}>
              Change this text and your app will automatically reload.
            </Text>
          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bodyBackgroundColor,
  },
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
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
})

function mapStateToProps(state) {
  return {
    searchedRecipes: state.searchedRecipes
  }
}

export default connect(mapStateToProps)(HomeScreen)