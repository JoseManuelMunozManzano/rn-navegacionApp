import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';
import {styles} from '../theme/appTheme';

export type RootStackParams = {
  StackNavigator: undefined;
  SettingsScreen: undefined;
};

const Drawer = createDrawerNavigator<RootStackParams>();

export const MenuLateral = () => {
  const {width, height} = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerType={width > height ? 'permanent' : 'front'}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({
  navigation,
}: DrawerContentComponentProps<DrawerContentOptions>) => {
  return (
    <DrawerContentScrollView>
      {/* Parte del avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri:
              'https://thumbs.dreamstime.com/b/omita-al-avatar-placeholder-de-la-foto-icono-del-perfil-124557887.jpg',
          }}
          style={styles.avatar}
        />
      </View>

      {/* Opciones de menú */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuBoton}
          onPress={() => navigation.navigate('StackNavigator')}>
          <Text style={styles.menuTexto}>Navegación</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuBoton}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Text style={styles.menuTexto}>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
