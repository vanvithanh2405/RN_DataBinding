import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { RenderHeader } from './components/demoText'





export default class demoProps extends Component {
  render() {
    return (
      <View>
        <Text>demoProps</Text>
        <Text>demoProps</Text>
        <Text>demoProps</Text>
        <Text>demoProps</Text>
        {/* {RenderHeader()} */}
        <RenderHeader title="Hello react" />
      </View>
    )
  }
}