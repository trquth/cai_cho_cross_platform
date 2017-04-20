import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Profile from './presenters/Profile.View';
import { NavigationActions } from 'react-navigation'

const SideMenu = (Profile) => {
    return class extends Component {
        constructor() {
            super()
            this.backToActivity = this.backToActivity.bind(this);
            this.backToExplore = this.backToExplore.bind(this);
        }

        backToActivity() {
            this.props.backToActivity()
        }

        backToExplore() {
            this.props.backToExplore()
        }

        render() {
            return (
                <Profile
                    backToActivity={this.backToActivity}
                    backToExplore={this.backToExplore} />
            );
        }
    }
}



export default ProfileContainer = SideMenu(Profile)