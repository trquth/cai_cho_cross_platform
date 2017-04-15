import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SideMenuItem from './presenters/SideMenuItem.View';

export default class SideMenu extends Component {
    render() {
        return (<View style={menuStyle.container}>
            <View style={{
                backgroundColor: '#29262c', height: 200,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={menuStyle.textTitle}>idealpos</Text>
            </View>
            <View style={styles.settings}>

            </View>
        </View>)
    }
}

const menuStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'red'
    },
    textTitle: {
        fontSize: 68,
        color: 'white',
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    containerNoBoder: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    rightIcon: {
        height: 20,
        width: 20,
    },
    text: {
        color: 'white'
    }
});