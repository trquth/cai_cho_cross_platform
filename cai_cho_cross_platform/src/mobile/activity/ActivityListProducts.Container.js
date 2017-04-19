import React, { Component } from 'react';
import { ScrollView, View, Text, Button, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { AddProductItem } from './../product_item/ProductItem.Container';

const ActivityListProducts = (ProductItem) => {
    return class extends Component {
        productDetail(product) {
            this.props.navigation.navigate("ProductDetail", { ...product })
        }

        render() {
            const listProducts = this.props.products.map((item, index) =>
                <ProductItem key={index} product={item}
                    pressDetail={this.productDetail.bind(this, item)} />)
            return (
                <ScrollView style={{
                    flexDirection: 'column',
                    flex: 5
                }}>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}>
                        {listProducts}
                    </View>
                </ScrollView>
            );
        }
    }
}

export default ActivityListProductsContainer = ActivityListProducts(AddProductItem);