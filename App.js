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
import CounterApp from './Components/Countdown/Countdown';



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
          component={Cellphone}
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
          name="HomePage"
          component={Menu}
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
          name="Perfil"
          component={Perfil}
        />

        <Stack.Screen
          name="Visitas"
          component={Visitas}
        />

        <Stack.Screen
          name="Propostas"
          component={PropostasData}
        />

        <Stack.Screen
          name="Notificacoes"
          component={ManageNotifications}
        />

        <Stack.Screen
          name="Mapa"
          component={Mapa}
        />

      </Stack.Navigator>
    </NavigationContainer >
  );
}