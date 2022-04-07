import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import CounterScreen from '../screens/Counter';

const MainStack = () => {
  return (
    <Stack.Navigator>
      <>
        <Stack.Screen name="Counter" component={CounterScreen} />
      </>
    </Stack.Navigator>
  );
};

export default MainStack;
