import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import StoreList from './StoreList'
import * as ActionCreators from '../actions'

class StoreListContainer extends Component {
  componentDidMount() {
    if (!this.props.stores.length) {
      // this.props.actions.fetchStores('banana')
      this.props.actions.fetchMeow()
    }
  }

  _navigateToStore = (store) => {
    this.props.navigate('Store', store)
  }

  render() {
    return (
      <StoreList
        fetchStores={this.props.actions.fetchMeow}
        stores={this.props.stores}
        navigateToStore={this._navigateToStore}
      />
    )
  }
}

const mapStateToProps = state => ({ stores: state.stores })

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(StoreListContainer)
