import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Dimensions, Image } from 'react-native';
import AddProduct from '../../product_item/presenters/AddProductIcon.View';
const { height, width } = Dimensions.get('window');

const ProductServerItem = (product) => {
    return (
        <View style={{
            backgroundColor: 'white',
            flexDirection: 'column',
            margin: 5,
            borderRadius: 6, borderWidth: 0.5,
            borderColor: 'gray',
            borderStyle: 'solid',
            width: width - 20,
            height: width / 2,
            shadowRadius: 2,
            shadowOpacity: 0.5,
        }}>
            <View style={{
                flex: 1,
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: "red" }}>{product.index}</Text>
            </View>
        </View >
    )
}


export default ProductServerItem