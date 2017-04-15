import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Dimensions, Image } from 'react-native';
const { height, width } = Dimensions.get('window');

const ProductItem = (ProductItemFunction) => {
    return class extends Component {
        constructor() {
            super()
            let widthFrame = width / 2;
        }

        render() {
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
                    <View style={{ padding: 10, justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <View style={{ flex: 2 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                                <Image source={require('../../../assets/activity/product.png')} style={{
                                    width: 150,
                                    height: 150,
                                    resizeMode: 'contain'
                                }} />
                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row'
                        }}>
                            <Image source={require('../../../assets/activity/line.png')} style={{ width: this.widthFrame }} />
                        </View>
                        <View style={{
                            backgroundColor: 'white',
                            flexDirection: 'row', flex: 1
                        }}>
                            <View style={{ flex: 3 }}>
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 13 }}>Product Name</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 19 }}>$99</Text>
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

                </View>
            )
        }
    }
}

export default ProductItem