import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './Screens/Register/Register';
import Confirmation from './Screens/Confirmation/Confirmation';
import Cellphone from './Screens/Cellphone/Cellphone';
import Profile from './Screens/Profile/Profile';
import ManageNotifications from './Screens/ManageNotifications/ManageNotifications';
import Menu from './Screens/Menu Bar/Menu';




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Menu />

      {/* <Stack.Navigator
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
          name="Profile"
          component={Profile}
        />

        <Stack.Screen
          name="Notifications"
          component={ManageNotifications}
        />

      </Stack.Navigator> */}
    </NavigationContainer>
  );
}