import React, { Component } from 'react';
import { View, Animated, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import SideMenu from './../side_menu/SideMenu.Container';
const { height, width } = Dimensions.get('window');
const popUpHeight = height * 1 / 3;
const sideMenuWidth = width * 4 / 5;

export default class MainLayoutContainer extends Component {
    constructor() {
        super();
        this.onCloseSideMenu = this.onCloseSideMenu.bind(this);
        this.onOpenSideMenu = this.onOpenSideMenu.bind(this);

        this.state = {
            layout: {
                width: width,
                height: height
            },
            sideMenuWidth: new Animated.Value(sideMenuWidth),
            sideMenuLeft: new Animated.Value(-sideMenuWidth),
            overlaySideMenu: new Animated.Value(0)
        };

        this._panResponder = {};
        if (Device.isPhone) {
            Orientation.lockToPortrait();
        }
    }

    onOpenSideMenu() {
        console.log('onOpenSideMenu')
        const { sideMenuLeft, overlaySideMenu } = this.state;
        Animated.parallel([
            Animated.timing(overlaySideMenu, {
                toValue: 1,
                duration: 400
            }),
            Animated.timing(sideMenuLeft, {
                toValue: 0,
                duration: 300
            })
        ]).start()
    }

    onCloseSideMenu() {
        console.log('onCloseSideMenu', this.state)
        const { sideMenuLeft, overlaySideMenu } = this.state
        Animated.parallel([
            Animated.timing(overlaySideMenu, {
                toValue: 0,
                duration: 400
            }),
            Animated.timing(sideMenuLeft, {
                toValue: -sideMenuWidth,
                duration: 300
            })
        ]).start()
    }

    render() {
        return (
            <View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    zIndex: 1,
                    position: 'absolute'
                }}>
                </View>
                <Animated.View style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    zIndex: 3,
                    backgroundColor: 'green',
                    width: 400,
                    left: 30,
                    flex: 1,
                    flexDirection: 'row'
                }}>

                    <SideMenu />
                </Animated.View>
            </View>
        )
    }
}