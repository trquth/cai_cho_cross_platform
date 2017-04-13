import React, { Component } from 'react';
import { View } from 'react-native';
import SideMenuItem from './presenters/SideMenuItem.View';

export default class SideMenu extends Component {
    render() {
        return (
            <View>
                <SideMenuItem />
            </View>
        )
    }
}