import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Cellphone from '../Cellphone/Cellphone';
import Register from "../Register/Register";
import Confirmation from "../Confirmation/Confirmation";

const Tab = createBottomTabNavigator();

export default function Menu() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    positon: 'absolute',
                    elevation: 0,
                    backgroundColor: 'grey',
                    borderRadius: 0,
                    height: 100,
                }
            }}
        >
            <Tab.Screen name='Busca' component={Cellphone}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}
                        <Image
                        source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png'}}
                        resizeMode="contain"
                        />  
                        </View>
    )
}}
/>
    < Tab.Screen name = 'Favoritos' component = { Register } />
            <Tab.Screen name='Meu Lar' component={Register} />
            <Tab.Screen name='Perfil' component={Register} />
        </Tab.Navigator >
    )
}