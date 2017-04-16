import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Dimensions, Image } from 'react-native';

const DeleteProduct = () => {
    return (
        <View style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'center',
            margin: 10,
            //marginLeft: 10
        }}>
            <TouchableHighlight style={{
            }}>
                <View style={{ flexDirection: 'row', flex: 1 }} >
                    <Image source={require('../../../assets/cart/delete.png')} style={{
                        width: 18, height: 18,
                        resizeMode: 'contain'
                    }} />
                </View>
            </TouchableHighlight>
        </View >
    )
}

export default DeleteProduct