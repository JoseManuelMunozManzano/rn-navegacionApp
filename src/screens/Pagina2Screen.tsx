import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationOptions} from '@react-navigation/stack';

import {styles} from '../theme/appTheme';

// Estilismo personal que sobreescribe el estilo global de StackNavigator.tsx
const options: StackNavigationOptions = {
  title: 'Hola Mundo',
  // Cambiar en ios el texto que aparece al lado de la flecha de volver atrás
  // Si se manda string vacío pondrá Atrás en el idioma que tenga el dispositivo
  headerBackTitle: 'Atrás',
};

export const Pagina2Screen = () => {
  // Acceso a navegación a través del hook useNavigation (no props)
  // Es mejor usar los props (ver Pagina1Screen.tsx)
  const navigator = useNavigation();

  // Dependencias con array vacío para que sólo se ejecute una vez, la primera vez que se carga el componente
  useEffect(() => {
    navigator.setOptions(options);
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> Pagina2Screen </Text>

      <Button
        title="Ir página 3"
        onPress={() => navigator.navigate('Pagina3Screen')}
      />
    </View>
  );
};
