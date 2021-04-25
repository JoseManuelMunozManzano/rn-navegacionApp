import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text, View} from 'react-native';

import {styles, colores} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const Tab1Screen = () => {
  const {top} = useSafeAreaInsets();

  useEffect(() => {
    console.log('Tab1Screen effect');
  }, []);

  return (
    <View style={{...styles.globalMargin, marginTop: top + 10}}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <Icon name="airplane-outline" size={50} color={colores.primary} />
        <Icon
          name="american-football-outline"
          size={50}
          color={colores.primary}
        />
        <Icon name="cloud-download-outline" size={50} color={colores.primary} />
        <Icon name="basketball-outline" size={50} color={colores.primary} />
        <Icon name="desktop-outline" size={50} color={colores.primary} />
        <Icon name="moon-outline" size={50} color={colores.primary} />
        <Icon name="logo-linkedin" size={50} color={colores.primary} />
        <Icon name="logo-octocat" size={50} color={colores.primary} />
      </Text>
    </View>
  );
};
