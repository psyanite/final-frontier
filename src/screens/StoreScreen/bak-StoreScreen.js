import React, { Component } from 'react';
import { ScrollView, Share, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ObjectHelpers from '../../lib/ObjectHelpers';
import * as StoreActionCreators from '../../modules/store/actions';
import StoreDetails from './components/StoreDetails';
import PostListContainer from './components/PostListContainer';
import HeaderBack from '../../components/navigation/components/HeaderBack';
import HeaderShare from '../../components/navigation/components/HeaderShare';
import ImageOverlayHeader from '../../components/navigation/components/ImageOverlayHeader';

class StoreScreen extends Component {

  static navigationOptions = { header: null };

  componentDidMount() {
    this.props.actions.fetchStoreById(this.props.navigation.state.params.id);
  }

  randomPhotos = () => {
    let rng = Math.floor(Math.random() * 3);
    const images = [];
    if (rng === 1) {
      rng = 5;
      for (i = 0; i < rng; i++) {
        images.push({ id: i + 1, photo: this.randomImage() });
      }
    }
    return images;
  };

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
    ];
    const rng = Math.floor(Math.random() * images.length);
    return images[rng];
  };

  share = (store) => {
    Share.share({
      message: `Check out ${store.name}'s profile`,
      url: 'https://expo.io/@psyanite/burntoast',
      title: `Check out ${store.name}'s profile`,
    }, {
      dialogTitle: `Share ${store.name}'s profile`,
    });
  };

  render() {
    const photos = this.randomPhotos();
    return (
      <ScrollView>

        <ImageOverlayHeader gradientYah>
          <HeaderBack navigation={this.props.navigation} type={'line'} color={'#fff'} />
          <HeaderShare share={() => this.share(this.props.store)} color={'#fff'} />
        </ImageOverlayHeader>

        {
          ObjectHelpers.isNonEmpty(this.props.store)
          && (
            <View>
              <StoreDetails store={this.props.store} />
            </View>
          )
        }


        {/*{ photos.length > 0 && (*/}
        {/*<View style={styles.gallery}>*/}
        {/*<GalleryThumbs images={photos} />*/}
        {/*</View>*/}
        {/*)}*/}

        <PostListContainer
          storeId={this.props.navigation.state.params.id}
          navigate={this.props.navigation.navigate}
        />
      </ScrollView>
    );
  }
}


const mapStateToProps = (state, props) => {
  const store = state.stores[props.navigation.state.params.id];
  return store ? { store } : { store: null };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(StoreActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(StoreScreen);
