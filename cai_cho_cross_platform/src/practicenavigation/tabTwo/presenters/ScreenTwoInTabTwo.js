'use strict'
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation'


export default class ScreenTwoInTabTwo extends Component {
    test() {
        this.props.navigation.dispatch({ type: 'JUMP_TO_ROOT' })
    }
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>{'Tab Two - Screen One'}</Text>

                <TouchableOpacity
                    onPress={() => { this.props.navigation.goBack() }}
                    style={{
                        padding: 20,
                        borderRadius: 10,
                        backgroundColor: 'green'
                    }}>
                    <Text>{'Go back'}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={
                        () => this.test()
                    }
                    style={{
                        padding: 20,
                        borderRadius: 10,
                        backgroundColor: 'gray',
                        marginTop: 20
                    }}>
                    <Text>{'jump to tab one (RESET)'}</Text>
                </TouchableOpacity>

            </View>
        )
    }
}
