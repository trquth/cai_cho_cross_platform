import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

const Infor = () => {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: '#55acee',
            justifyContent: 'center',
            alignItems: 'flex-start'
        }}>
            <View style={{
                flex: 1,
                justifyContent: 'flex-end',
                marginLeft: 20
            }}>
                <Image source={require('../../../assets/profile/avatar.png')} style={{
                    width: 100,
                    height: 100,
                    resizeMode: 'contain',
                    borderRadius: 52,
                }} />
            </View>
            <View style={{
                flex: 1,
                marginLeft: 20,
                marginTop: 10,
            }}>
                <Text style={{ fontSize: 20, color: 'white', marginTop: 5, marginBottom: 5 }}>Andrei martin</Text>
                <Text style={{ fontSize: 15, color: 'white' }}>chyan_me@gmail.com</Text>
            </View>
        </View>
    )
}

export default Infor