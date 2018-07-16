import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import StoreList from './StoreList';
import * as ActionCreators from '../../../../modules/store/actions';

class StoreListContainer extends Component {
  componentDidMount() {
    this.props.actions.fetchAllStores();
    // this.props.actions.mockFetchAllStores()
  }

  navigateToStore = (store) => {
    this.props.navigate('Store', store);
  };

  render() {
    const list = <StoreList stores={this.props.stores} navigateToStore={this.navigateToStore} />;
    console.log(this.props.stores);
    return this.props.stores ? list : null;
  }
}

const mapStateToProps = state => {
  const stores = [];
  Object.keys(state.stores).map((key) => stores.push(state.stores[key]));
  return { stores };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(StoreListContainer);
