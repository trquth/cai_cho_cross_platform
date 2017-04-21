import React, { Component } from 'react';
import { ScrollView, View, Text, Button, TouchableOpacity } from 'react-native';
import ProductServerItem from './../products_server/presenters/ProductServerItem.View';

const ProductServerListProducts = (ProductItem) => {
    return class extends Component {
        render() {
            const listProducts = this.props.products.map((item, index) =>
                <ProductItem key={index} product={item} index={index} />)
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

export default ProductServerListProductsContainer = ProductServerListProducts(ProductServerItem);