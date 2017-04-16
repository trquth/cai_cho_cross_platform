import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Dimensions, Image } from 'react-native';
const { height, width } = Dimensions.get('window');
import OrderListProductsContainer from '../OrderListProduct.Container';
import OrderNow from './OrderNow.View';

const OrderInScreen = (ListOrderProduct, OrderNow) => {
    return class extends Component {
        constructor() {
            super()
        }

        render() {
            return (
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={{ flex: 3 }}>
                        <ListOrderProduct />
                    </View>
                    <View style={{ flex: 1 }}>
                        <OrderNow />
                    </View>
                </View>
            )
        }
    }
}

export default OrderView = OrderInScreen(OrderListProductsContainer, OrderNow)