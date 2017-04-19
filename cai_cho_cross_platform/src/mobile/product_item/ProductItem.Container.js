import React, { Component } from 'react';
import { ScrollView, View, Text, Button, TouchableOpacity } from 'react-native';
import ProductItem from './../product_item/presenters/ProductItem.View';
import AddProduct from '../product_item/presenters/AddProductIcon.View';
import DeleteProduct from '../product_item/presenters/DeleteProductIcon.View';

const ProductItemInScreen = (Product) => {
    return class extends Component {
        render() {
            return (
                <Product product={this.props.product}
                    pressDetail={this.props.pressDetail} />
            );
        }
    }
}

const AddProductFunction = AddProduct => ProductItem(AddProduct);
const AddProductItem = ProductItemInScreen(AddProductFunction(AddProduct));
const DeleteProductFunction = DeleteProduct => ProductItem(DeleteProduct);
const DeleteProductItem = ProductItemInScreen(DeleteProductFunction(DeleteProduct));

export {
    AddProductItem,
    DeleteProductItem
}