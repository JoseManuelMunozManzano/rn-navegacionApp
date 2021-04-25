import React, {useContext, useEffect} from 'react';
import {Text, View} from 'react-native';
import {
  StackNavigationOptions,
  StackScreenProps,
} from '@react-navigation/stack';

import {RootStackParams} from '../navigator/StackNavigator';
import {AuthContext} from '../context/AuthContext';
import {styles} from '../theme/appTheme';

// Forma "buena" de recibir parámetros.
// Ver también StackNavigator.tsx (es donde esta definido RootStackParams y PersonaScreenFormaBuena)
interface Props
  extends StackScreenProps<RootStackParams, 'PersonaScreenFormaBuena'> {}

export const PersonaScreenFormaBuena = ({route, navigation}: Props) => {
  const {changeUsername} = useContext(AuthContext);

  // Recibir parámetros
  // Ahora, params si tiene los tipos!! Ayuda mucho en la legibilidad del código
  const params = route.params;

  useEffect(() => {
    const options: StackNavigationOptions = {
      title: params.nombre,
    };

    navigation.setOptions(options);
  }, []);

  useEffect(() => {
    changeUsername(params.nombre);
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
