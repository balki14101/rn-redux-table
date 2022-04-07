import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import HomeScreen from '../screens/Home';

const MainStack = () => {
  return (
    <Stack.Navigator>
      <>
        <Stack.Screen name="Home" component={HomeScreen} />
      </>
    </Stack.Navigator>
  );
};

export default MainStack;
