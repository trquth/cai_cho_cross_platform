import React, { Component } from 'react';
import { ScrollView, View, Text, Button, TouchableOpacity } from 'react-native';
import { DeleteProductItem } from './../product_item/ProductItem.Container';

const OrderListProducts = (ProductItem) => {
    return class extends Component {
        render() {
            return (
                <ScrollView style={{ flexDirection: 'column', flex: 1 }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}>
                        <ProductItem />
                        <ProductItem />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}>
                        <ProductItem />
                        <ProductItem />
                    </View>
                </ScrollView>
            );
        }
    }
}

export default OrderListProductsContainer = OrderListProducts(DeleteProductItem);