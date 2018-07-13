import React, { Component } from 'react';
import { Share, ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import StoreDetails from './components/StoreDetails';
import PostListContainer from './components/PostListContainer';
import BackTouchable from '../../components/navigation/touchables/BackTouchable';
import * as StoreActionCreators from '../../modules/store/actions';
import ShareTouchable from '../../components/navigation/touchables/ShareTouchable';

class StoreScreen extends Component {

  static navigationOptions = { header: null };

  componentDidMount() {
    this.props.actions.fetchStoreById(this.props.navigation.state.params.id);
  }

  share = (store) => {
    Share.share({
      message: `911 was an inside job by ${store.name}. Jet fuel can't melt steel beams, here's proof https://expo.io/@psyanite/burntoast`,
      url: 'https://expo.io/@psyanite/burntoast',
      title: `911 was an inside job by ${store.name}`
    }, {
      dialogTitle: `BAM! SHARE IT! ${store.name} TOLD YOU TO.`,
    });
  }

  render() {
    return (
      <ScrollView>
        {
          this.props.store
          && this.props.store.phone_number
          && (
            <View>
              <StoreDetails store={this.props.store} />
              <BackTouchable navigation={this.props.navigation} />
              <ShareTouchable share={() => this.share(this.props.store)} />
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
