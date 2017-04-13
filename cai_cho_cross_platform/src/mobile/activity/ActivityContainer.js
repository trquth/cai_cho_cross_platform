import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MainLayoutContainer from './../main_layout/MainLayoutContainer';

class ActivityContainer extends Component {
    static navigationOptions = {
        title: 'Activity',
    }
    render() {
        return <View style={{ flex: 1, backgroundColor: "green" }}>
            <Text>test</Text>
        </View>
    }
}

export default ActivityContainer