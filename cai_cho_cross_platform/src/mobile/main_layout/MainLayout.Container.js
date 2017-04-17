import React, { Component } from 'react';
import { View, Animated, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import SideMenu from './../side_menu/SideMenu.Container';
const { height, width } = Dimensions.get('window');
const sideMenuWidth = width / 1.3;

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
    }

    onOpenSideMenu() {
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
            <View style={{
                flex: 1,
                backgroundColor: '#f2f2f2',
            }}>
                <View style={{ flex: 1, zIndex: 1 }}>
                    {this.props.children}
                </View>
                <Animated.View style={{
                    flex: 1,
                    position: 'absolute',
                    zIndex: 2,
                    top: 0,
                    bottom: 0,
                    left: this.state.sideMenuLeft
                }}>
                    <SideMenu />
                </Animated.View>
            </View>
        )
    }
}