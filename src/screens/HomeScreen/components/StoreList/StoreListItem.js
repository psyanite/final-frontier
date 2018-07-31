import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LayoutConstants from '../../../../styles/constants/LayoutConstants';

export default class StoreListItem extends Component {

  handleOnPress = () => {
    this.props.navigateToStore(this.props.store);
  };

  render() {
    const store = this.props.store;
    const view = Object.assign({}, store);

    view.location = store.location ? store.location.name : store.suburb.name;

    view.cuisines = store.cuisines ? store.cuisines[0].name : '';

    return (
      <TouchableOpacity style={styles.wrap} onPress={this.handleOnPress} activeOpacity={1.0}>
        <View style={styles.wrap} key={view.id}>
          <Image
            resizeMode='cover'
            style={styles.coverImage}
            source={{ uri: view.cover_image }}
          />
          <View style={styles.deets}>
            <Text style={styles.name}>{view.name}</Text>
            <Text style={styles.location}>{view.location}</Text>
            <Text style={styles.cuisines} numberOfLines={1} ellipsizeMode={'tail'}>{view.cuisines}</Text>
            {/*<View style={styles.ratings}>*/}
            {/*<View style={styles.ratingIcon}>*/}
            {/*<Text style={styles.ratingCount}>23</Text>*/}
            {/*<View style={styles.ratingIcon}>*/}
            {/*<CustomIcon name={CustomIcons.BreadHeart} width={24} height={24} />*/}
            {/*</View>*/}
            {/*</View>*/}
            {/*<View style={styles.ratingIcon}>*/}
            {/*<Text style={styles.ratingCount}>15</Text>*/}
            {/*<View style={styles.ratingIcon}>*/}
            {/*<CustomIcon name={CustomIcons.BreadOkay} width={24} height={24} />*/}
            {/*</View>*/}
            {/*</View>*/}
            {/*<View style={styles.ratingIcon}>*/}
            {/*<Text style={styles.ratingCount}>2</Text>*/}
            {/*<View style={styles.ratingIcon}>*/}
            {/*<CustomIcon name={CustomIcons.BreadCross} width={24} height={24} />*/}
            {/*</View>*/}
            {/*</View>*/}
            {/*</View>*/}
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    marginLeft: 1,
    marginRight: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
  },
  coverImage: {
    height: 130,
  },

  deets: {
    flexDirection: 'column',
    flex: 1,
    padding: LayoutConstants.margins.s,
    paddingTop: LayoutConstants.margins.xs,
  },

  name: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 20,
    fontWeight: 'bold'
  },
  location: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 15,
  },
  cuisines: {
    fontSize: 15,
    marginBottom: 4,
  },

  ratings: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  ratingIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: 7,
  },
  ratingCount: {
    opacity: 0.6,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#9b4e20',
    marginRight: 4,
  },
});
