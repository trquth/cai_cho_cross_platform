import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Profile from './presenters/Profile.View';

const SideMenu = (Profile) => {
    return class extends Component {

        render() {
            return (
                <Profile />
            );
        }
    }
}



export default ProfileContainer = SideMenu(Profile)