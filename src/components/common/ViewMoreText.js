import React, { PureComponent } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'
import { LinearGradient } from 'expo'

/**
 * Text component which is shortened by the numberOfLines prop,
 * and expands to full height onPress.
 */
class ViewMoreText extends PureComponent {

  state = {
    shouldToggle: false,
    numberOfLines: null,
  }

  async componentDidMount() {
    await nextFrameAsync()
    const fullHeight = await measureHeightAsync(this._text)
    this.setState({ numberOfLines: this.props.numberOfLines })
    await nextFrameAsync()
    const limitedHeight = await measureHeightAsync(this._text)
    if (fullHeight > limitedHeight) {
      this.setState({
        shouldToggle: true,
        numberOfLines: this.props.numberOfLines
      })
    }
  }

  handlePress = () => {
    const { shouldToggle, numberOfLines } = this.state
    if (shouldToggle && numberOfLines) {
      this.setState({ numberOfLines: null })
    }
    else {
      this.setState({ numberOfLines: this.props.numberOfLines })
    }
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
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <View>
          <Text
            numberOfLines={this.state.numberOfLines}
            style={this.props.textStyle}
            ref={text => { this._text = text }}
          >
            {this.props.children}
          </Text>
          { this.state.shouldToggle && this.state.numberOfLines && this.blur }
        </View>
      </TouchableOpacity>
    )
  }
}

function measureHeightAsync(component) {
  return new Promise(resolve => {
    component.measure((x, y, w, h) => {
      resolve(h)
    })
  })
}

function nextFrameAsync() {
  return new Promise(resolve => requestAnimationFrame(() => resolve()))
}

ViewMoreText.propTypes = {
  numberOfLines: PropTypes.number.isRequired,
  textStyle: PropTypes.object,
}

ViewMoreText.defaultProps = {
  textStyle: {},
}

export default ViewMoreText
