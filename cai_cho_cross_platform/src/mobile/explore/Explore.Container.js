import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import MainLayoutContainer from './../main_layout/MainLayout.Container';
import ExploreListProductsContainer from './ExploreListProducts.Container';
import SideMenuIcon from './../side_menu/presenters/SideMenuIcon.View';
import CartIcon from './../cart/presenters/CartIcon.View';
import { initializeApp } from './Explore.Action';

const ExploreInScreen = (MainLayout, ExploreListProducts, SideMenu, Card) => {
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

        static navigationOptions = {
            header: ({ state, goBack, navigate }) => {
                style = { backgroundColor: '#55acee' };
                left = <SideMenu onOpenSideMenu={() => state.params.onOpenSideMenu()} />;
                title = <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Explore</Text>;
                right = <Card />;
                return { style, left, right, title }
            }
        };

        render() {
            return (
                <MainLayout
                    ref='mainlayout'
                >
                    <ExploreListProducts
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
        list_products: state.explore.products
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        initializeApp
    }, dispatch);
}

export default ExploreContainer = connect(mapStateToProps, mapDispatchToProps)(ExploreInScreen(MainLayoutContainer,
    ExploreListProductsContainer, SideMenuIcon, CartIcon))