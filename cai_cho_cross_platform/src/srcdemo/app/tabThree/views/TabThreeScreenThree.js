'use strict'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
export default class TabThreeScreenThree extends React.Component {

  render() {
    console.log('LOG GO', this.props.navigation)
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'brown',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text>{'Tab Three Screen Three'}</Text>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.dispatch({ type: 'JUMP_TO_TAB', payload: { index: 0 } })
            }
          style={{
            padding: 20,
            borderRadius: 20,
            backgroundColor: 'yellow',
            marginTop: 20
          }}>
          <Text>{'GO HOME'}</Text>
        </TouchableOpacity>

      </View>
    )
  }
}
