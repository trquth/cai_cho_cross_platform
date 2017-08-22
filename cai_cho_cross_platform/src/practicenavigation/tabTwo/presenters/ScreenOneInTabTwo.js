'use strict'
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation'

export default class ScreenOneInTabTwo extends Component {

    goBackTabOne() {
        let resetAction = NavigationActions.reset({
            index: 0,
            key: null,
            actions: [
                NavigationActions.navigate({ routeName: 'ScreenOneInTabOne' })
            ]
        })

        this.props.navigation.dispatch(resetAction)
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
                    onPress={() => { this.props.navigation.navigate("ScreenTwoInTabTwo") }}
                    style={{
                        padding: 20,
                        borderRadius: 10,
                        backgroundColor: 'blue'
                    }}>
                    <Text style={{ color: '#fff' }}>{'Go to next screen this tab'}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={
                        () => {
                            //this.props.navigation.dispatch({ type: 'JUMP_TO_TAB' })
                            console.log('RUN HERE')
                            this.goBackTabOne()
                            //this.props.navigation.navigate("TabOneNavigation")
                        }
                    }
                    style={{
                        padding: 20,
                        borderRadius: 10,
                        backgroundColor: 'gray',
                        marginTop: 20
                    }}>
                    <Text>{'jump to tab one'}</Text>
                </TouchableOpacity>

            </View>
        )
    }
}
