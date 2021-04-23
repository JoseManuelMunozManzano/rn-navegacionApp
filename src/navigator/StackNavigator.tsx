import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {Pagina1Screen} from '../screens/Pagina1Screen';
import {Pagina2Screen} from '../screens/Pagina2Screen';
import {Pagina3Screen} from '../screens/Pagina3Screen';
import {PersonaScreen} from '../screens/PersonaScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName="Pagina2Screen"
      // Estilizado de todas las pantallas
      screenOptions={{
        // headerShown: false,
        headerStyle: {
          // quita la línea de separación del header para android
          elevation: 0,
          // quita la línea de separación del header para ios
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      {/* Nombre que aparecerá en cada ruta con options */}
      <Stack.Screen
        name="Pagina1Screen"
        options={{title: 'Página 1'}}
        component={Pagina1Screen}
      />
      <Stack.Screen
        name="Pagina2Screen"
        options={{title: 'Página 2'}}
        component={Pagina2Screen}
      />
      <Stack.Screen
        name="Pagina3Screen"
        options={{title: 'Página 3'}}
        component={Pagina3Screen}
      />
      <Stack.Screen
        name="PersonaScreen"
        options={{title: 'Persona'}}
        component={PersonaScreen}
      />
    </Stack.Navigator>
  );
};
