import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import MainLayoutContainer from './../main_layout/MainLayout.Container';
import ProductServerListProductsContainer from './ProductServerListProducts.Container';
import SideMenuIcon from './../side_menu/presenters/SideMenuIcon.View';
import CartIcon from './../cart/presenters/CartIcon.View';
import { initializeApp } from './ProductServer.Action';

const ProductsServerInScreen = (MainLayout, ProductServerListProducts, SideMenu, Card) => {
    return class extends Component {
        constructor() {
            super()
            this.onOpenSideMenu = this.onOpenSideMenu.bind(this);
        }

        componentDidMount() {
            this.props.navigation.setParams({ onOpenSideMenu: this.onOpenSideMenu });
            this.props.initializeApp();
        }

        onOpenSideMenu() {
            this.refs.mainlayout.onOpenSideMenu();
        }

        // static navigationOptions = {
        //     header: ({ navigate }) => {
        //         style = { backgroundColor: '#55acee' };
        //         left = <SideMenu onOpenSideMenu={() => state.params.onOpenSideMenu()} />;
        //         title = <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Demo</Text>;
        //         right = <Card />;
        //         return { style, left, right, title }
        //     }
        // };

        static navigationOptions = ({ navigation, screenProps }) => ({
            title: 'abc',
            headerRight: <Button title='abc' onPress={() => { }} />,
        });


        render() {
            return (
                <MainLayout
                    ref='mainlayout'
                >
                    <ProductServerListProducts
                        products={this.props.list_products}
                        navigation={this.props.navigation}
                    />
                </MainLayout>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        list_products: state.productServer.products
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        initializeApp
    }, dispatch);
}

export default ProductsServerContainer = connect(mapStateToProps, mapDispatchToProps)(ProductsServerInScreen(MainLayoutContainer,
    ProductServerListProductsContainer, SideMenuIcon, CartIcon))