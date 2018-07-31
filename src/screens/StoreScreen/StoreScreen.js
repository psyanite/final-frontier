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

  componentWillMount() {
    this.props.actions.fetchStoreById(this.props.navigation.getParam('id'));
  }

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
    const { store, navigation } = this.props;

    return (
      <ScrollView>

        <ImageOverlayHeader gradientYah>
            <HeaderBack navigation={navigation} type={'line'} color={'#fff'} />
            <HeaderShare share={() => this.share(store)} color={'#fff'} />
        </ImageOverlayHeader>

        {
          store.phone_number !== undefined &&
          (<StoreDetails store={store} />)
        }

        <PostListContainer
          storeId={navigation.getParam('id')}
          navigate={navigation.navigate}
        />
      </ScrollView>
    );
  }
}


const mapStateToProps = (state, props) => {
  const store = state.stores[props.navigation.getParam('id')];
  return store ? { store } : { store: null };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(StoreActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(StoreScreen);
