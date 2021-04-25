import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {TouchableIcon} from '../components/TouchableIcon';
import {styles, colores} from '../theme/appTheme';

export const Tab1Screen = () => {
  const {top} = useSafeAreaInsets();

  useEffect(() => {
    console.log('Tab1Screen effect');
  }, []);

  return (
    <View style={{...styles.globalMargin, marginTop: top + 10}}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="american-football-outline" />
        <TouchableIcon iconName="cloud-download-outline" />
        <TouchableIcon iconName="basketball-outline" />
        <TouchableIcon iconName="desktop-outline" />
        <TouchableIcon iconName="moon-outline" />
        <TouchableIcon iconName="logo-linkedin" />
        <TouchableIcon iconName="logo-octocat" />
      </Text>
    </View>
  );
};
