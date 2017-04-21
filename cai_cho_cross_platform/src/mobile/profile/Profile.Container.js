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
            this.backToSetting = this.backToSetting.bind(this);
        }

        backToActivity() {
            this.props.backToActivity()
        }

        backToExplore() {
            this.props.backToExplore()
        }

        backToSetting() {
            this.props.backToSetting()
        }

        render() {
            return (
                <Profile
                    backToActivity={this.backToActivity}
                    backToExplore={this.backToExplore}
                    backToSetting={this.backToSetting} />
            );
        }
    }
}



export default ProfileContainer = SideMenu(Profile)