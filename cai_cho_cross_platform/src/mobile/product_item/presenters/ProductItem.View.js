import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Dimensions, Image } from 'react-native';
const { height, width } = Dimensions.get('window');

const ProductItem = (ProductItemFunction) => {
    return class extends Component {
        constructor() {
            super()
            const widthFrame = width / 2;
        }

        render() {
            const { title, maxSalePrice, imageUrl } = this.props.product
            return (
                <View style={{
                    backgroundColor: 'white',
                    flexDirection: 'column',
                    margin: 5,
                    borderRadius: 6, borderWidth: 0.5,
                    borderColor: 'gray',
                    borderStyle: 'solid',
                    width: this.widthFrame,
                    height: this.widthFrame,
                    shadowRadius: 2,
                    shadowOpacity: 0.5,
                }}>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1
                    }}>
                        <View style={{ flex: 2, paddingRight: 10, paddingLeft: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                                <TouchableHighlight
                                    onPress={this.props.pressDetail}
                                    underlayColor={'#fff'}
                                >
                                    <Image source={{ uri: imageUrl }} style={{
                                        width: 150,
                                        height: 150,
                                        resizeMode: 'contain'
                                    }} />
                                </TouchableHighlight>
                            </View>
                        </View>

                        <View style={{
                            height: 5,
                            flexDirection: 'row',
                        }}>
                            <Image source={require('../../../assets/images/line.png')}
                                style={{
                                    flex: 1,
                                    width: null,
                                    height: null,
                                    resizeMode: 'contain'
                                }} />
                        </View>
                        <View style={{
                            flexDirection: 'row', flex: 1, padding: 5
                        }}>
                            <View style={{ flex: 3 }}>
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 12 }} numberOfLines={1}>{title}</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 12 }}>${maxSalePrice}</Text>
                                </View>

                            </View>
                            <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{
                                    flexDirection: 'row',
                                    flex: 1,
                                }}>
                                    <ProductItemFunction />
                                </View >
                            </View>
                        </View>
                    </View>
                </View >
            )
        }
    }
}

export default ProductItem