import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


import Cellphone from '../Cellphone/Cellphone';
import Register from "../Register/Register";
import Confirmation from "../Confirmation/Confirmation";

const Search = '../../assets/Menu/search.png';
const FilledSearch = '../../assets/Menu/search-bold.png';


const Tab = createBottomTabNavigator();


export default function Menu() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Cellphone') {
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                    } else if (route.name === 'Register') {
                        iconName = focused ? 'ios-list-box' : 'ios-list';
                    }

                    // You can return any component that you like here!
                    return <Image />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Cellphone" component={Cellphone} />
            <Tab.Screen name="Register" component={Register} />
        </Tab.Navigator>
    )
}