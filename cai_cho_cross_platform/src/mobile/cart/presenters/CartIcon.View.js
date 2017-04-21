import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Dimensions, Image } from 'react-native';

const CartIcon = () => {
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
                <View style={{ flexDirection: 'row', flex: 1 }} >
                    <Image source={require('../../../assets/activity/cart.png')} style={{
                        width: 45, height: 45,
                        resizeMode: 'contain'
                    }} />
                    <Text style={{
                        fontSize: 7, justifyContent: 'center', alignItems: 'center',
                        position: 'absolute',
                        top: 9,
                        right: 7,
                    }}>3</Text>
                </View>

            </TouchableHighlight>
        </View >
    )
}

export default CartIcon