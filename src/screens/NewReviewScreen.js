import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CenteredLightView from '../components/common/CenteredLightView';
import HeaderBack from '../components/navigation/components/HeaderBack';
import { Header } from '../components/navigation/components/Header';
import ScoreIconNew from '../components/common/icons/ScoreIconNew';
import LayoutConstants from '../styles/constants/LayoutConstants';

export default class NewReviewScreen extends Component {

  static navigationOptions = { header: null };

  render() {
    const getHeader = () => {
      const left = <HeaderBack navigation={this.props.navigation} type={'line'} />;
      return (<Header left={left} />);
    };

    return (
      <CenteredLightView style={styles.container}>
        <StatusBar backgroundColor='#CCCCCC' />

        { getHeader() }

        <Text style={styles.title}>
          How was your overall experience today?
        </Text>

        <View style={styles.wrap}>
          <View style={styles.option}>
            <ScoreIconNew score={'bad'} width={100} height={100} />
            <Text style={[styles.optionText, { color: '#CF773F' }]}>Bad</Text>
          </View>
          <View style={styles.option}>
            <ScoreIconNew score={'okay'} width={100} height={100} />
            <Text style={[styles.optionText, { color: '#ffa000' }]}>OK</Text>
          </View>
          <View style={styles.option}>
            <ScoreIconNew score={'good'} width={100} height={100} />
            <Text style={[styles.optionText, { color: '#FF9999' }]}>Good</Text>
          </View>
        </View>

      </CenteredLightView>
    );
  }
}


const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  container: {
    backgroundColor: '#fff',
    justifyContent: 'space-between',
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
