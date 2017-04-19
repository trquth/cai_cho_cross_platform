import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import MainLayoutContainer from './../main_layout/MainLayout.Container';
import ActivityListProductsContainer from './ActivityListProducts.Container';
import SideMenuIcon from './../side_menu/presenters/SideMenuIcon.View';
import CartIcon from './../card/presenters/CartIcon.View';
import { initializeApp } from './Activity.Action';

const Activity = (MainLayout, ActivityListProducts, SideMenu, Card) => {
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
                title = <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Activity</Text>;
                right = <Card />;
                return { style, left, right, title }
            }
        };

        render() {
            return (
                <MainLayout
                    ref='mainlayout'
                >
                    <ActivityListProducts
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
        list_products: state.activity.products
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        initializeApp
    }, dispatch);
}

export default ActivityContainer = connect(mapStateToProps, mapDispatchToProps)(Activity(MainLayoutContainer,
    ActivityListProductsContainer, SideMenuIcon, CartIcon))