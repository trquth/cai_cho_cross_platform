import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import MainLayoutContainer from './../main_layout/MainLayout.Container';
import ActivityView from './presenters/Activity.View.js';

const Activity = (MainLayoutContainer, ActivityView) => {
    return class extends Component {
        constructor() {
            super()
            this.test = this.test.bind(this);
        }

        static navigationOptions = ({ navigation, screenProps }) => ({
            title: "activity",
            headerRight: <Button title="yyyyy" />,
        });

        test() {
            this.refs.mainlayout.onCloseSideMenu();
        }

        render() {
            return (
                <MainLayoutContainer
                    ref='mainlayout'
                >
                    <ActivityView />
                </MainLayoutContainer>
            );
        }
    }
}

export default ActivityContainer = Activity(MainLayoutContainer, ActivityView);