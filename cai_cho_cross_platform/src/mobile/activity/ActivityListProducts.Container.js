import React, { Component } from 'react';
import { ScrollView, View, Text, Button, TouchableOpacity } from 'react-native';
import ProductItem from './../product_item/presenters/ProductItem.View';

const ActivityListProducts = (ProductItem) => {
    return class extends Component {
        render() {
            return (
                <ScrollView style={{ flexDirection: 'column', flex: 1 }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <ProductItem />
                        <ProductItem />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <ProductItem />
                        <ProductItem />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <ProductItem />
                        <ProductItem />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <ProductItem />
                        <ProductItem />
                    </View>
                </ScrollView>
            );
        }
    }
}



export default ActivityListProductsContainer = ActivityListProducts(ProductItem);