import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import MainLayoutContainer from './../main_layout/MainLayout.Container';
import ActivityListProductsContainer from './ActivityListProducts.Container';
import SideMenuIcon from './../side_menu/presenters/SideMenuIcon.View';
import CartIcon from './../card/presenters/CartIcon.View';

const Activity = (MainLayout, ActivityListProducts, SideMenu, Card) => {
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
                    <ActivityListProducts />
                </MainLayout>
            );
        }
    }
}



export default ActivityContainer = Activity(MainLayoutContainer, ActivityListProductsContainer, SideMenuIcon, CartIcon)