import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {useWindowDimensions} from 'react-native';

import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';

export type RootStackParams = {
  StackNavigator: undefined;
  SettingsScreen: undefined;
};

const Drawer = createDrawerNavigator<RootStackParams>();

export const MenuLateralBasico = () => {
  const {width, height} = useWindowDimensions();

  return (
    <Drawer.Navigator
      // posición del Drawer
      // drawerPosition="right"

      // "front" es el valor por defecto, no se ve el drawer
      // "permanent" hace que el drawer se vea por defecto
      drawerType={width > height ? 'permanent' : 'front'}>
      <Drawer.Screen
        name="StackNavigator"
        options={{title: 'Home'}}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};
