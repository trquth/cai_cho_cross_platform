import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Dimensions, Image } from 'react-native';

const SideMenuIcon = () => {
    return (
        <View style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10
        }}>
            <TouchableHighlight style={{
            }}>
                <Image source={require('../../../assets/activity/menu.png')} style={{
                    width: 22, height: 22,
                    resizeMode: 'contain'
                }} />
            </TouchableHighlight>
        </View >
    )
}

export default SideMenuIcon