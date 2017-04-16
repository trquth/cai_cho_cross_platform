import React, { Component } from 'react';
import { ScrollView, View, Text, Button, TouchableOpacity } from 'react-native';
import { AddProductItem } from './../product_item/ProductItem.Container';

const ActivityListProducts = (ProductItem) => {
    return class extends Component {
        render() {
            return (
                <ScrollView style={{ flexDirection: 'column', flex: 5 }}>
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

export default ActivityListProductsContainer = ActivityListProducts(AddProductItem);