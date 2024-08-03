// App.tsx
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SecondScreen from './screens/SecondScreen';
import MainScreen from './screens/MainScreen';
import Toast from 'react-native-toast-message';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ title: 'Desarrollo Mobile - Plan de carrera' }}/>
        <Stack.Screen name="SecondScreen" component={SecondScreen} options={{ title: 'Redireccionado' }}/>
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
};

export default App;
