import ItemsList from '@/components/ItemsList';
import UserLocationMap from '@/components/UserLocationMap';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParamList } from '../constants/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppLayout() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={ItemsList} />
        <Stack.Screen name="Map" component={UserLocationMap} />
      </Stack.Navigator>
  );
}

export default AppLayout
