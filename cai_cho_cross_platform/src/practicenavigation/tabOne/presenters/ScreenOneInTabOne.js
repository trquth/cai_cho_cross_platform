'use strict'
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class ScreenOneInTabOne extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>{'This is SCREEN ONE in TAB ONE'}</Text>

                <TouchableOpacity
                    onPress={() => { this.props.navigation.navigate("ScreenTwoInTabOne") }}
                    style={{
                        padding: 20,
                        borderRadius: 10,
                        backgroundColor: 'blue'
                    }}>
                    <Text style={{ color: '#fff' }}>{'Go to next screen this tab'}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
