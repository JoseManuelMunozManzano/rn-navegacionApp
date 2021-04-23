import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {styles} from '../theme/appTheme';

export const Pagina2Screen = () => {
  // Acceso a navegación a través del hook useNavigation (no props)
  // Es mejor usar los props (ver Pagina1Screen.tsx)
  const navigator = useNavigation();

  return (
    <View style={styles.globalMargin}>
      <Text> Pagina2Screen </Text>

      <Button
        title="Ir página 3"
        onPress={() => navigator.navigate('Pagina3Screen')}
      />
    </View>
  );
};
