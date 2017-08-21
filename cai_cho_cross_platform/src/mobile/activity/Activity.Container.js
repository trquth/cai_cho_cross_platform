import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import MainLayoutContainer from './../main_layout/MainLayout.Container';
import ActivityListProductsContainer from './ActivityListProducts.Container';
import SideMenuIcon from './../side_menu/presenters/SideMenuIcon.View';
import CartIcon from './../card/presenters/CartIcon.View';

const Activity = (MainLayoutContainer, ActivityListProductsContainer, SideMenuIcon, CartIcon) => {
    return class extends Component {
        constructor() {
            super()
            this.test = this.test.bind(this);
        }

        componentDidMount() {
            this.props.navigation.setParams({ handleSave: this.test });
        }

        test() {
            this.refs.mainlayout.onCloseSideMenu();
        }

        static navigationOptions = ({ navigation, screenProps }) => {
            title = <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Activity</Text>
            headerRight = <CartIcon /> ,
                headerLeft = <SideMenuIcon /> ,
                headerStyle = { backgroundColor: '#55acee' }
        };

        render() {
            return (
                <MainLayoutContainer
                    ref='mainlayout'
                >
                    <ActivityListProductsContainer />
                </MainLayoutContainer>
            );
        }
    }
}



export default ActivityContainer = Activity(MainLayoutContainer, ActivityListProductsContainer, SideMenuIcon, CartIcon)