import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MainLayoutContainer from '../main_layout/MainLayout.Container';
import Profile from './presenters/Profile.View';

const SideMenu = (MainLayoutContainer, Profile) => {
    return class extends Component {

        render() {
            return (
                <MainLayoutContainer
                    ref='mainlayout'
                >
                    <Profile />
                </MainLayoutContainer>
            );
        }
    }
}



export default ProfileContainer = SideMenu(MainLayoutContainer, Profile)