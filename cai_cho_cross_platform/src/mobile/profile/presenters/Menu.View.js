import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';

const Menu = (activityScreen) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'rgba(68, 155, 221, 1.5)',
            justifyContent: 'center',
            alignItems: 'flex-start',
        }}>
            <View style={{
                flex: 4,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                marginTop: 10
            }}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 20,
                    flexDirection: 'row',
                    paddingTop: 20,
                    paddingBottom: 20,
                }}>
                    <View style={{
                        flex: 1,
                    }}>
                        <Image source={require('../../../assets/profile/exploreico.png')} style={{ height: 22, width: 22, resizeMode: 'contain' }} />
                    </View>
                    <View style={{ flex: 4 }}>
                        <Text style={{ color: 'white', fontSize: 13 }}>Explore</Text>
                    </View>

                </View>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 20,
                    flexDirection: 'row',
                    paddingTop: 20,
                    paddingBottom: 20,
                }}>
                    <View style={{
                        flex: 1,
                    }}>
                        <Image source={require('../../../assets/profile/activityico.png')} style={{ height: 22, width: 22, resizeMode: 'contain' }} />
                    </View>
                    <View style={{ flex: 4 }}>
                        <TouchableHighlight
                            onPress={activityScreen.backToActivity.backToActivity}
                            underlayColor="rgba(68, 155, 221, 1.5)">
                            <Text style={{ color: 'white', fontSize: 13 }}>Activity</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 20,
                    flexDirection: 'row',
                    paddingTop: 20,
                    paddingBottom: 20,
                }}>
                    <View style={{
                        flex: 1,
                    }}>
                        <Image source={require('../../../assets/profile/cartico.png')} style={{ height: 22, width: 22, resizeMode: 'contain' }} />
                    </View>
                    <View style={{ flex: 4 }}>
                        <Text style={{ color: 'white', fontSize: 13 }}>Cart</Text>
                    </View>
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 20,
                    flexDirection: 'row',
                    paddingTop: 20,
                    paddingBottom: 20,
                }}>
                    <View style={{
                        flex: 1,
                    }}>
                        <Image source={require('../../../assets/profile/settingico.png')} style={{ height: 22, width: 22, resizeMode: 'contain' }} />
                    </View>
                    <View style={{ flex: 4 }}>
                        <Text style={{ color: 'white', fontSize: 13 }}>Settings</Text>
                    </View>
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 20,
                    flexDirection: 'row',
                    paddingTop: 20,
                    paddingBottom: 20,
                }}>
                    <View style={{
                        flex: 1,
                    }}>
                        <Image source={require('../../../assets/profile/logoutico.png')} style={{ height: 22, width: 22, resizeMode: 'contain' }} />
                    </View>
                    <View style={{ flex: 4 }}>
                        <Text style={{ color: 'white', fontSize: 13 }}>Sign out</Text>
                    </View>
                </View>


            </View>
            <View style={{ flex: 3, backgroundColor: 'red', }}>
            </View>
        </View>
    )
}

export default Menu