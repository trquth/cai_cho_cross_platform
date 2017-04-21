import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import MainLayoutContainer from './../main_layout/MainLayout.Container';
import SettingView from './presenters/Setting.View';
import SideMenuIcon from './../side_menu/presenters/SideMenuIcon.View';
import CartIcon from './../cart/presenters/CartIcon.View';

const SettingInScreen = (MainLayout, SettingView, SideMenu) => {
    return class extends Component {
        constructor() {
            super()
            this.onOpenSideMenu = this.onOpenSideMenu.bind(this);
        }

        componentDidMount() {
            this.props.navigation.setParams({ onOpenSideMenu: this.onOpenSideMenu });
            // this.props.initializeApp();
        }

        onOpenSideMenu() {
            this.refs.mainlayout.onOpenSideMenu();
        }

        static navigationOptions = {
            header: ({ state, goBack, navigate }) => {
                style = { backgroundColor: '#55acee' };
                left = <SideMenu onOpenSideMenu={() => state.params.onOpenSideMenu()} />;
                title = <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Settings</Text>;
                return { style, left, title }
            }
        };

        render() {
            return (
                <MainLayout
                    ref='mainlayout'
                >
                    <SettingView
                        navigation={this.props.navigation}
                    />
                </MainLayout>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch);
}

export default SettingContainer = connect(mapStateToProps, mapDispatchToProps)(SettingInScreen(MainLayoutContainer,
    SettingView, SideMenuIcon))