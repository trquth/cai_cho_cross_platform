import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import MainLayoutContainer from './../main_layout/MainLayout.Container';
import SideMenuIcon from './../side_menu/presenters/SideMenuIcon.View';
import OrderView from './presenters/Order.View';

const Order = (MainLayout, OrderView, SideMenu) => {
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

        static navigationOptions = {
            header: ({ state, goBack, navigate }) => {
                style = { backgroundColor: '#55acee' };
                left = <SideMenu />;
                title = <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Card</Text>;
                return { style, left, title }
            }
        };

        render() {
            return (
                <MainLayout
                    ref='mainlayout'
                >
                    <OrderView />
                </MainLayout>
            );
        }
    }
}



export default ActivityContainer = Order(MainLayoutContainer, OrderView, SideMenuIcon) 