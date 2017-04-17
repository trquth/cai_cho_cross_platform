import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ProfileContainer from '../profile/Profile.Container';


const SideMenuInScreen = (Menu) => {
    return class extends Component {
        render() {
            return (
                <Menu />)
        }
    }
}

export default SideMenu = SideMenuInScreen(ProfileContainer)
