import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, StyleSheet, Text } from 'react-native';
import ProfileContainer from '../profile/Profile.Container';
import * as constant from './../../assets/constant/constant';
import { backToScreen } from '../navigation_configuration/Navigation.Action';


const SideMenuInScreen = (Menu) => {
    return class extends Component {
        constructor() {
            super()
            this.backToActivity = this.backToActivity.bind(this);
            this.backToExplore = this.backToExplore.bind(this);
        }
        backToActivity() {
            this.props.backToScreen(constant.ACTIVITY_SCREEN);
        }

        backToExplore() {
            this.props.backToScreen(constant.EXPLORE_SCREEN);
        }
        render() {
            return (
                <Menu
                    backToActivity={this.backToActivity}
                    backToExplore={this.backToExplore}
                />
            )
        }
    }
}

const mapDispatchToProps = dispatch => (bindActionCreators({
    backToScreen
}, dispatch));

export default SideMenuContainer = connect(null, mapDispatchToProps)(SideMenuInScreen(ProfileContainer)); 
