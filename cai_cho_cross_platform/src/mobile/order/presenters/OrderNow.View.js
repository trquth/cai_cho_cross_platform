import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Dimensions, Image } from 'react-native';
const { height, width } = Dimensions.get('window');

const OrderNow = () => {
    const widthFrame = width / 2;
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            margin: 5,
            borderRadius: 6, borderWidth: 0.5,
            borderColor: 'gray',
            borderStyle: 'solid',
            width: this.widthFrame,
            height: this.widthFrame / 3,
            shadowRadius: 2,
            shadowOpacity: 0.5,
        }}>
            <View style={{
                flex: 1, flexDirection: 'row', padding: 10,
                justifyContent: 'center', alignItems: 'center'
            }}>
                <View style={{
                    alignItems: 'flex-start',
                    flex: 1
                }}>
                    <Text style={{
                        fontWeight: 'bold',
                    }}>Total:</Text>
                </View>
                <View style={{
                    alignItems: 'flex-end',
                    flex: 1
                }}>
                    <Text style={{
                        fontWeight: 'bold',

                    }}>$369</Text>
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
                flex: 3,
                flexDirection: 'row', padding: 10,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <TouchableHighlight style={{
                    flex: 1,
                    backgroundColor: '#55acee',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 30,
                    height: 45,
                    marginLeft: 60,
                    marginRight: 60
                }}>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ fontWeight: 'bold', color: 'white' }}>Order Now</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>

    )
}

export default OrderNow