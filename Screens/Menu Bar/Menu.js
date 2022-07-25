import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Cellphone from '../Cellphone/Cellphone';
import Register from "../Register/Register";
import Confirmation from "../Confirmation/Confirmation";
import Mapa from "../Mapa/Mapa";
import Perfil from "../Perfil/Perfil";
import HomePage from "../Home Page/HomePage";
import { StackActions } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


export default function Menu() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarStyle: {
                    position: 'absolute',
                    flex: 1,
                    elevation: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'white',
                    borderRadius: 0,
                    height: 100,
                },
                tabBarLabelStyle: {
                    fontSize: 16,
                    color: '#193A6F',
                    fontWeight: 'normal'

                }
            }}>
            <Tab.Screen
                name="Pesquisar"
                component={HomePage}
                options={{
                    tabBarLabel: ({ focused, color, fontWeight }) => (
                        <Text style={{ color: focused ? '#193A6F' : '#193A6F', fontWeight: focused ? "bold" : fontWeight, }}>Busca</Text>
                    ),
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={
                                focused
                                    ? require('../../assets/Menu/search-bold.png')
                                    : require('../../assets/Menu/search.png')
                            }
                            style={{
                                width: 28,
                                height: 28,
                            }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Favoritos"
                component={Register}
                options={{
                    tabBarLabel: ({ focused, color, fontWeight }) => (
                        <Text style={{ color: focused ? '#193A6F' : '#193A6F', fontWeight: focused ? "bold" : fontWeight, }}>Favoritos</Text>
                    ),
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={
                                focused
                                    ? require('../../assets/Menu/heart-bold.png')
                                    : require('../../assets/Menu/heart.png')
                            }
                            style={{
                                width: 28,
                                height: 28,
                            }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Confirmation"
                component={Confirmation}
                options={{
                    tabBarLabel: ({ focused, color, fontWeight }) => (
                        <Text style={{ color: focused ? '#193A6F' : '#193A6F', fontWeight: focused ? "bold" : fontWeight, }}>Meu Lar</Text>
                    ),
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={
                                focused
                                    ? require('../../assets/Menu/home-bold.png')
                                    : require('../../assets/Menu/home.png')
                            }
                            style={{
                                width: 28,
                                height: 28,
                            }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Usuario"
                component={Perfil}
                options={{
                    tabBarLabel: ({ focused, color, fontWeight }) => (
                        <Text style={{ color: focused ? '#193A6F' : '#193A6F', fontWeight: focused ? "bold" : fontWeight, }}>Perfil</Text>
                    ),
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={
                                focused
                                    ? require('../../assets/Menu/user-bold.png')
                                    : require('../../assets/Menu/user.png')
                            }
                            style={{
                                width: 28,
                                height: 28,
                            }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
