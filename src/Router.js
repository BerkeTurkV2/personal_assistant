import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './pages/Main/Main';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#34495e",
        },
        headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "white"
        },
        headerTitleAlign: 'center'
        }} >
        <Stack.Screen name="Main" component={Main}
        options={{
            title: "CHAOS"
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;