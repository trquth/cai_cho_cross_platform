import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Dimensions, Image } from 'react-native';

const AddProduct = () => {
    return (
        <TouchableHighlight style={{
            flex: 1,
            margin: 15,
            backgroundColor: '#55acee',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
            marginLeft: 1,
            marginRight: 1
        }}>
            <View style={{ justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold', color: 'white' }}>+ Add</Text>
            </View>
        </TouchableHighlight>
    )
}

export default AddProduct