import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import StoreList from './StoreList'
import * as ActionCreators from '../../../../modules/store/actions'

class StoreListContainer extends Component {
  componentDidMount() {
    if (!this.props.stores.length) {
      // this.props.actions.fetchStores('banana')
      this.props.actions.mockFetchStores()
    }
  }

  _navigateToStore = (store) => {
    this.props.navigate('Store', store)
  }

  render() {
    return (
      <StoreList
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
