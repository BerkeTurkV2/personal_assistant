import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './pages/Main/Main';
import Work from './pages/Work/Work';
import Sport from './pages/Sport/Sport';
import Lord from './pages/Lord/Lord';
import Exchange from './pages/Exchange/Exchange';
import English from './pages/English/English';

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
        headerTitleAlign: 'center',
        headerTintColor: "white",
        }} >
        <Stack.Screen name="Main" component={Main}
        options={{
            title: "- CHAOS -"
        }}/>
        <Stack.Screen name="Work" component={Work}
        options={{
            title: "Çalışma"
        }}/>
        <Stack.Screen name="Sport" component={Sport}
        options={{
            title: "Spor"
        }}/>
        <Stack.Screen name="Lord" component={Lord}
        options={{
            title: "Lord"
        }}/>
        <Stack.Screen name="Exchange" component={Exchange}
        options={{
            title: "Borsa"
        }}/>
        <Stack.Screen name="English" component={English}
        options={{
            title: "Ingilizce"
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;