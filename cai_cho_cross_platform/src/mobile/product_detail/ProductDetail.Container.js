import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import MainLayoutContainer from './../main_layout/MainLayout.Container';
import ProductDetail from './presenters/ProductDetail.View';
import SideMenuIcon from './../side_menu/presenters/SideMenuIcon.View';
import CartIcon from './../card/presenters/CartIcon.View';

const ProductDetailInScreen = (MainLayout, ProductDetail, SideMenu, Card) => {
    return class extends Component {
        constructor() {
            super()
            this.onOpenSideMenu = this.onOpenSideMenu.bind(this);
        }

        componentDidMount() {
            this.props.navigation.setParams({ onOpenSideMenu: this.onOpenSideMenu });
        }

        onOpenSideMenu() {
            this.refs.mainlayout.onOpenSideMenu();
        }

        static navigationOptions = {
            header: ({ state, goBack, navigate }) => {
                style = { backgroundColor: '#55acee' };
                left = <SideMenu onOpenSideMenu={() => state.params.onOpenSideMenu()} />;
                title = <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Product Detail</Text>;
                right = <Card />;
                return { style, left, right, title }
            }
        };

        render() {
            return (
                <MainLayout
                    ref='mainlayout'
                >
                    <ProductDetail product={this.props.navigation.state.params}/>
                </MainLayout>
            );
        }
    }
}



export default ActivityContainer = ProductDetailInScreen(MainLayoutContainer, ProductDetail, SideMenuIcon, CartIcon)