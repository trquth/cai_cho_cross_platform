import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    Dimensions,
    Image, ScrollView
} from 'react-native';
const { height, width } = Dimensions.get('window');

const SettingView = () => {
    return (
        <View style={{
            padding: 10,
            flexDirection: 'column',
            flex: 1,
            backgroundColor: 'white',
            margin: 10,
            borderRadius: 6, borderWidth: 0.5,
            borderColor: 'gray',
            borderStyle: 'solid',
            shadowRadius: 2,
            shadowOpacity: 0.5,
        }}>
            <ScrollView style={{
                flex: 1,
                width: width,
                flexDirection: 'row'
            }}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                }}>
                    <Text style={{ fontSize: 18 }}>Address:</Text>
                </View>
                <View style={{
                    height: 1,
                }}>
                    <Image source={require('../../../assets/images/line.png')}
                        style={{ width: width - 40, height: 1, resizeMode: 'cover' }} />
                </View>
                <View style={{
                    flex: 9,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Image source={require('../../../assets/images/logo.png')}
                        style={{ height: 150, resizeMode: 'contain' }} />
                </View>
            </ScrollView>
        </View >
    )
}


export default SettingView 