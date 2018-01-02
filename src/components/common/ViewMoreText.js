import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import PropTypes from 'prop-types'
import { LinearGradient } from 'expo'

class ViewMoreText extends React.Component {
  constructor(props) {
    super(props)
    this.resetData()

    this.state = {
      numberOfLines: null,
      opacity: 0,
      shouldRender: false,
    }
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        shouldRender: true,
      })
    }, this.props.renderTimeout)
  }

  componentWillReceiveProps() {
    this.resetData()

    this.setState({
      numberOfLines: null,
      opacity: 0,
    })
  }

  componentDidUpdate() {
    if (this.state.numberOfLines === null) {
      this.props.afterExpand()
    }
    else {
      this.props.afterCollapse()
    }
  }

  onLayout = (event) => {
    const {
      height,
    } = event.nativeEvent.layout

    if (height === 0 || this.state.opacity === 1) return false

    this.setOriginalHeight(height)
    if (this.state.numberOfLines === this.props.numberOfLines) {
      this.setState({
        opacity: 1,
      })
    }
    return null
  }

  setOriginalHeight = (height) => {
    if (this.originalHeight === 0) {
      this.originalHeight = height

      this.setState({
        numberOfLines: this.props.numberOfLines,
      })
    }
  }

  handlePress = () => {
    if (this.state.numberOfLines > 0) {
      this.setState({
        numberOfLines: null,
      })
    }
    else {
      this.setState({
        numberOfLines: this.props.numberOfLines,
      })
    }
  }

  resetData = () => {
    this.originalHeight = 0
  }

  blur = (
    <View
      style={{
        position: 'absolute',
        right: 0,
        bottom: 0,
        left: 0,
        height: 20,
      }}
    >
      <LinearGradient
        start={[0.0, 0.0]}
        end={[0.0, 1.0]}
        colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.6)']}
        style={{ height: 20 }}
      />
    </View>
  )

  render() {
    if (this.state.shouldRender) {
      return (
        <TouchableOpacity onPress={this.handlePress}>
          <View onLayout={this.onLayout}>
            <Text
              style={this.props.textStyle}
              numberOfLines={this.state.numberOfLines}
            >
              {this.props.children}
            </Text>
            {
              this.state.numberOfLines
              && <View style={{ width: 1, height: 1 }} />
              && this.blur
            }
          </View>
        </TouchableOpacity>
      )
    }
    return null
  }
}

ViewMoreText.propTypes = {
  afterCollapse: PropTypes.func,
  afterExpand: PropTypes.func,
  numberOfLines: PropTypes.number.isRequired,
  textStyle: PropTypes.object,
  renderTimeout: PropTypes.number,
}

ViewMoreText.defaultProps = {
  afterCollapse: () => {},
  afterExpand: () => {},
  textStyle: {},
  renderTimeout: 0,
}

export default ViewMoreText
