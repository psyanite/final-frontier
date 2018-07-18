import React, { Component } from 'react';
import { ScrollView, Share, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ObjectHelpers from '../../lib/ObjectHelpers';
import * as StoreActionCreators from '../../modules/store/actions';
import StoreDetails from './components/StoreDetails';
import PostListContainer from './components/PostListContainer';
import HeaderBack from '../../components/navigation/headers/HeaderBack';
import HeaderShare from '../../components/navigation/headers/HeaderShare';
import ImageOverlayHeader from '../../components/navigation/headers/ImageOverlayHeader';

class StoreScreen extends Component {

  static navigationOptions = { header: null };

  componentDidMount() {
    this.props.actions.fetchStoreById(this.props.navigation.state.params.id);
  }

  render() {
    const share = (store) => {
      Share.share({
        message: `Check out ${store.name}'s profile`,
        url: 'https://expo.io/@psyanite/burntoast',
        title: `Check out ${store.name}'s profile`,
      }, {
        dialogTitle: `Share ${store.name}'s profile`,
      });
    };

    return (
      <ScrollView>

        <ImageOverlayHeader gradientYah>
            <HeaderBack navigation={this.props.navigation} type={'line'} color={'#fff'} />
            <HeaderShare share={() => share(this.props.store)} color={'#fff'} />
        </ImageOverlayHeader>

        {
          ObjectHelpers.isNonEmpty(this.props.store)
          && (
            <View>
              <StoreDetails store={this.props.store} />
            </View>
          )
        }

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
