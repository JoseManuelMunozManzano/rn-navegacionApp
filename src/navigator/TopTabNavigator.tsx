import React from 'react';
import {Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {ChatScreen} from '../screens/ChatScreen';
import {ContactsScreen} from '../screens/ContactsScreen';
import {AlbumsScreen} from '../screens/AlbumsScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colores} from '../theme/appTheme';

type RootTabParams = {
  Chat: undefined;
  Contacts: undefined;
  Albums: undefined;
};

const Tab = createMaterialTopTabNavigator<RootTabParams>();

export const TopTabsNavigator = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{paddingTop: insets.top}}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      tabBarOptions={{
        pressColor: colores.primary,
        showIcon: true,
        indicatorStyle: {
          backgroundColor: colores.primary,
        },
        style: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => {
          let iconName: string;

          switch (route.name) {
            case 'Chat':
              iconName = focused
                ? 'chatbubble-ellipses'
                : 'chatbubble-ellipses-outline';
              break;
            case 'Contacts':
              iconName = focused ? 'call' : 'call-outline';
              break;
            case 'Albums':
              iconName = focused ? 'albums' : 'albums-outline';
              break;
          }

          return <Icon name={iconName} size={20} color={colores.primary} />;
        },
      })}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};
