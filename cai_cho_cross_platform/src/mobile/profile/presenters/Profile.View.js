import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import Infor from './Infor.View';
import Menu from './Menu.View';
const { height, width } = Dimensions.get('window');

const Profile = (backToActivity) => {
    return (
        <View style={{
            flexDirection: 'column',
            flex: 1,
            width: width / 1.3
        }}>
            <View style={{ flex: 2 }}>
                <Infor />
            </View>
            <View style={{ flex: 3 }}>
                <Menu backToActivity={backToActivity} />
            </View>
        </View>
    )
}

export default Profile