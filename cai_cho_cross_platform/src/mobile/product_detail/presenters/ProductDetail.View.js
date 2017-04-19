import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Dimensions, Image } from 'react-native';
const { height, width } = Dimensions.get('window');

const ProductView = (product) => {
    const widthFrame = width;
    const { imageUrl, title, maxSalePrice } = product.product;
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: 'white',
            margin: 10,
            borderRadius: 6, borderWidth: 0.5,
            borderColor: 'gray',
            borderStyle: 'solid',
            shadowRadius: 2,
            shadowOpacity: 0.5,
        }}>
            <View style={{
                flex: 3, flexDirection: 'row', padding: 10,
                justifyContent: 'center', alignItems: 'center'
            }}>
                <View style={{
                    alignItems: 'center',
                    flex: 1,
                    justifyContent: 'center'
                }}>
                    <Image source={{ uri: imageUrl }} style={{
                        width: widthFrame - 20,
                        height: widthFrame / 2,
                        resizeMode: 'contain'
                    }} />
                </View>
            </View>
            <View style={{
                height: 5,
                flexDirection: 'row',
            }}>
                <Image source={require('../../../assets/activity/line.png')}
                    style={{
                        flex: 1,
                        width: null,
                        height: null,
                        resizeMode: 'contain'
                    }} />
            </View>
            <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 10, paddingRight: 10 }}>
                <View style={{ flex: 3, justifyContent: 'center' }}>
                    <Text style={{ fontWeight: 'bold' }}>{title}</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold' }}>${maxSalePrice}</Text>
                </View>
            </View>
            <View style={{
                height: 5,
                flexDirection: 'row',
            }}>
                <Image source={require('../../../assets/activity/line.png')}
                    style={{
                        flex: 1,
                        width: null,
                        height: null,
                        resizeMode: 'contain'
                    }} />
            </View>
            <View style={{
                flex: 5,
                flexDirection: 'column', padding: 10,
                justifyContent: 'flex-end',
                alignItems: 'center'
            }}>
                <View style={{ flex: 3 }}>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableHighlight style={{
                        flex: 1,
                        backgroundColor: '#55acee',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 30,
                        height: 40,
                        marginLeft: 100,
                        marginRight: 100
                    }}>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold', color: 'white' }}>+ Add to card</Text>
                        </View>
                    </TouchableHighlight>
                </View>

            </View>
        </View>

    )
}

export default ProductView