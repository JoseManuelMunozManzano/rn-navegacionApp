import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {ChatScreen} from '../screens/ChatScreen';
import {ContactsScreen} from '../screens/ContactsScreen';
import {AlbumsScreen} from '../screens/AlbumsScreen';

type RootTabParams = {
  ChatScreen: undefined;
  ContactsScreen: undefined;
  AlbumsScreen: undefined;
};

const Tab = createMaterialTopTabNavigator<RootTabParams>();

export const TopTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ContactsScreen" component={ContactsScreen} />
      <Tab.Screen name="AlbumsScreen" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};
