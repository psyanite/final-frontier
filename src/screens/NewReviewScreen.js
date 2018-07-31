import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import HeaderBack from '../components/navigation/components/HeaderBack';
import { Header } from '../components/navigation/components/Header';
import ScoreIconNew from '../components/common/icons/ScoreIconNew';
import LayoutConstants from '../styles/constants/LayoutConstants';
import ColorConstants from '../styles/constants/ColorConstants';

export default class NewReviewScreen extends Component {

  static navigationOptions = { header: null };

  render() {
    const getHeader = () => {
      const left = <HeaderBack navigation={this.props.navigation} type={'line'} />;
      return (<Header left={left} />);
    };

    return (
      <View style={styles.bg}>
        <StatusBar backgroundColor={ColorConstants.statusBar.grey} />

        { getHeader() }

        <View style={styles.content}>
          <Text style={styles.title}>
            How was your overall experience today?
          </Text>

          <View style={styles.wrap}>
            <View style={styles.option}>
              <ScoreIconNew score={'bad'} size={100} />
              <Text style={[styles.optionText, { color: '#CF773F' }]}>Bad</Text>
            </View>
            <View style={styles.option}>
              <ScoreIconNew score={'okay'} size={100} />
              <Text style={[styles.optionText, { color: '#ffa000' }]}>OK</Text>
            </View>
            <View style={styles.option}>
              <ScoreIconNew score={'good'} size={100} />
              <Text style={[styles.optionText, { color: '#FF9999' }]}>Good</Text>
            </View>
          </View>
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#fff',
    flex: 1,
    alignSelf: 'stretch',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  wrap: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-evenly',
  },
  option: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    marginTop: LayoutConstants.margins.xs,
  }
});
