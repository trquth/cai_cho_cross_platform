import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Profile from './presenters/Profile.View';
import { NavigationActions } from 'react-navigation'

const SideMenu = (Profile) => {
    return class extends Component {
        constructor() {
            super()
            this.backToActivity = this.backToActivity.bind(this);
        }
        backToActivity() {
            this.props.backToActivity()
        }

        render() {
            return (
                <Profile backToActivity={this.backToActivity} />
            );
        }
    }
}



export default ProfileContainer = SideMenu(Profile)