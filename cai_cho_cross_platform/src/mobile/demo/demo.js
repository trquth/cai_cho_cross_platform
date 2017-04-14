import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import MainLayoutContainer from './../main_layout/MainLayout.Container';

const Demo = (MainLayoutContainer) => {
    return class extends Component {
        constructor() {
            super()
            this.test = this.test.bind(this);
        }
        static navigationOptions = ({ navigation, screenProps }) => ({
            title: "demo",
            right: <Button title="xxxxxx" />,
        });

        test() {
            this.refs.mainlayout.onCloseSideMenu();
        }

        render() {
            return (
                <MainLayoutContainer
                    ref='mainlayout'
                >
                    <View>
                        <Text>
                            ABC
                        </Text>
                    </View>
                </MainLayoutContainer>
            );
        }
    }
}

export default DemoContainer = Demo(MainLayoutContainer);