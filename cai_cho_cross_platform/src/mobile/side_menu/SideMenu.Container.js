import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text } from 'react-native';
import ProfileContainer from '../profile/Profile.Container';
import * as constant from './../../assets/constant/constant';


const SideMenuInScreen = (Menu) => {
    return class extends Component {
        constructor() {
            super()
            this.backToActivity = this.backToActivity.bind(this);
        }
        backToActivity() {
            this.props.backToScreen(constant.ACTIVITY_SCREEN);
        }
        render() {
            return (
                <Menu
                    backToActivity={this.backToActivity} />
            )
        }
    }
}

const mapDispatchToProps = dispatch => ({
    backToScreen: (screen) => dispatch({ type: screen }),
});

export default SideMenuContainer = connect(null, mapDispatchToProps)(SideMenuInScreen(ProfileContainer)); 
