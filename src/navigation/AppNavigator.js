import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import PetListScreen from '../screens/PetListScreen';
import PetDetailScreen from '../screens/PetDetailScreen';
import RegisterPetScreen from '../screens/RegisterPetScreen';
import TipsScreen from '../screens/TipsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabIcon({ emoji, focused }) {
  return (
    <Text style={{ fontSize: 20, opacity: focused ? 1 : 0.5 }}>{emoji}</Text>
  );
}

function PetsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PetList"
        component={PetListScreen}
        options={{ title: 'Mis Mascotas' }}
      />
      <Stack.Screen
        name="PetDetail"
        component={PetDetailScreen}
        options={{ title: 'Detalle' }}
      />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: true,
            tabBarActiveTintColor: '#3a6fd8',
          }}
        >
          <Tab.Screen
            name="Mascotas"
            component={PetsStack}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => <TabIcon emoji="🐾" focused={focused} />,
            }}
          />
          <Tab.Screen
            name="Registrar Mascota"
            component={RegisterPetScreen}
            options={{
              title: 'Registrar',
              tabBarIcon: ({ focused }) => <TabIcon emoji="➕" focused={focused} />,
            }}
          />
          <Tab.Screen
            name="Consejos"
            component={TipsScreen}
            options={{
              title: 'Consejos',
              tabBarIcon: ({ focused }) => <TabIcon emoji="💡" focused={focused} />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default AppNavigator;