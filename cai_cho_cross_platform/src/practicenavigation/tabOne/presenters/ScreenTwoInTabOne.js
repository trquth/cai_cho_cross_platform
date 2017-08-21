'use strict'
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class ScreenTwoInTabOne extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>{'This is SCREEN TWO in TAB ONE'}</Text>

                <TouchableOpacity
                    onPress={() => { this.props.navigation.goBack() }}
                    style={{
                        padding: 20,
                        borderRadius: 10,
                        backgroundColor: 'green'
                    }}>
                    <Text style={{ color: '#fff' }}>{'Go back a screen this tab'}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
