import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './Screens/Register/Register';
import Confirmation from './Screens/Confirmation/Confirmation';
import Cellphone from './Screens/Cellphone/Cellphone';
import Profile from './Screens/Profile/Profile';
import ManageNotifications from './Screens/ManageNotifications/ManageNotifications';
import Menu from './Screens/Menu Bar/Menu';
import HeaderMain from './Screens/Header Main/HeaderMain';
import Mapa from './Screens/Mapa/Mapa';
import CardImovel from './Screens/Card Movel/CardImovel';
import HomePage from './Screens/Home Page/HomePage';
import { Header } from './style';
import Perfil from './Screens/Perfil/Perfil';
import Visitas from './Screens/Visitas/Visitas';
import Propostas from './Screens/Propostas/Propostas';
import PropostasData from './Screens/Proposta w:Card/PropostasData';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={PropostasData}
        />

        <Stack.Screen
          name="Confirmation"
          component={Confirmation}
        />

        <Stack.Screen
          name="Register"
          component={Register}
        />

        <Stack.Screen
          name="Profile"
          component={Profile}
        />

        <Stack.Screen
          name="Notifications"
          component={ManageNotifications}
        />

        <Stack.Screen
          name="HomePage"
          component={HomePage}
        />

      </Stack.Navigator>
    </NavigationContainer >
  );
}