import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ActivityContainer extends Component {
    static navigationOptions = {
        title: 'Activity',
    }
    render() {
        return <View style={{ flex: 1, backgroundColor: "gray" }}>
            <Text>test</Text>
        </View>
    }
}