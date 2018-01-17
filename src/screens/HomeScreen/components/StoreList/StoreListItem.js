import React, { Component } from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CustomIcon, { Names as CustomIcons } from '../../../../components/common/Icons/CustomIcon'
import LayoutConstants from '../../../../styles/constants/LayoutConstants'
import GalleryThumbs from '../../../../components/common/gallery/GalleryThumbs'

export default class StoreListItem extends Component {

  handleOnPress = () => {
    this.props.navigateToStore(this.props.store)
  }

  randomPhotos = () => {
    let rng = Math.floor(Math.random() * 3)
    const images = []
    if (rng === 1) {
      rng = 5
      for (i = 0; i < rng; i++) {
        images.push({ id: i+1, photo: this.randomImage() })
      }
    }
    return images
  }

  randomImage = () => {
    const images = [
      'https://i.imgur.com/r6tqLf9.jpg',
      'https://i.imgur.com/9K3icV0.jpg',
      'https://i.imgur.com/8RZOOVo.jpg',
      'https://b.zmtcdn.com/data/pictures/chains/6/16562676/a940c87e002969862e518cbf196c0017.jpg',
      'https://b.zmtcdn.com/data/res_imagery/16564570_RESTAURANT_058971a49fafe87b9c772331b251b1fa.jpg',
      'https://b.zmtcdn.com/data/res_imagery/16566109_RESTAURANT_2b839d1d4dc4319e53bfd12373277d7e.jpg',
      'https://b.zmtcdn.com/data/reviews_photos/15a/f7279f7dd36cbd4ee3094f618df5c15a_1496048929.jpg',
      'https://b.zmtcdn.com/data/res_imagery/16557552_CHAIN_37949bc01ae3dd8b992db428a9c35581.jpg',
      'https://b.zmtcdn.com/data/res_imagery/16566176_RESTAURANT_bdf8b31d9ee9fe53ed91fc17208c0893_c.jpg',
      'https://b.zmtcdn.com/data/res_imagery/16566248_CHAIN_491a164e22b19761f36df7c833a62e49_c.jpg',
      'https://b.zmtcdn.com/data/res_imagery/16559171_RESTAURANT_619e090fe7c62a879ce0179d5fedd69f_c.jpg',
      'https://b.zmtcdn.com/data/res_imagery/16557237_RESTAURANT_1bddec09c720a87210b64e26104f3066_c.jpg'
    ]
    const rng = Math.floor(Math.random() * images.length)
    return images[rng]
  }

  render() {
    const store = this.props.store
    const view = Object.assign({}, store)
    const photos = this.randomPhotos()
    view.location = `${store.suburb.name}, ${store.suburb.city.name}`
    if (store.location) {
      view.location = `${store.location.name}, ${view.location}`
    }

    view.cuisines = ''
    if (store.cuisines) {
      view.cuisines = store.cuisines.map(cuisine => cuisine.name).join(', ')
    }

    return (
      <TouchableOpacity onPress={this.handleOnPress}>
        <View key={view.id} style={styles.wrap}>
          <View style={styles.header}>
            <Image
              style={styles.coverImage}
              source={{ uri: view.cover_image }}
            />
            <View style={styles.deets}>
              <Text style={styles.name}>{view.name}</Text>
              <Text style={styles.location}>{view.location}</Text>
              <Text style={styles.cuisines} numberOfLines={1} ellipsizeMode={'tail'}>{view.cuisines}</Text>
              <View style={styles.ratings}>
                <View style={styles.ratingIcon}>
                  <Text style={styles.ratingCount}>23</Text>
                  <View style={styles.ratingIcon}>
                    <CustomIcon name={CustomIcons.BreadHeart} width={24} height={24} />
                  </View>
                </View>
                <View style={styles.ratingIcon}>
                  <Text style={styles.ratingCount}>15</Text>
                  <View style={styles.ratingIcon}>
                    <CustomIcon name={CustomIcons.BreadOkay} width={24} height={24} />
                  </View>
                </View>
                <View style={styles.ratingIcon}>
                  <Text style={styles.ratingCount}>2</Text>
                  <View style={styles.ratingIcon}>
                    <CustomIcon name={CustomIcons.BreadCross} width={24} height={24} />
                  </View>
                </View>
              </View>
            </View>
          </View>

          {photos.length > 0 && (
            <View style={styles.gallery}>
              <GalleryThumbs images={photos} />
            </View>
          )}

        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: LayoutConstants.margins.s,
    marginBottom: LayoutConstants.margins.s
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    marginRight: LayoutConstants.margins.m,
    marginLeft: LayoutConstants.margins.m
  },
  coverImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 3,
  },

  deets: {
    flexDirection: 'column',
    flex: 1,
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

  gallery: {
    marginLeft: LayoutConstants.margins.m,
    marginTop: LayoutConstants.margins.xs,
  },
})
