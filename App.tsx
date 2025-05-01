import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import AppointmentScreen from './AppointmentScreen'
import HealthMonitoringScreen from './HealthMonitoringScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        {/* All of the screens (4/7) featured in this prototype to
            get a better feel of the design and flow of navigation */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Appointments" component={AppointmentScreen} />
        <Stack.Screen name="Health Monitoring" component={HealthMonitoringScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
