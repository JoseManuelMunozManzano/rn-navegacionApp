import React, {useContext, useEffect} from 'react';
import {Text, View} from 'react-native';
import {
  StackNavigationOptions,
  StackScreenProps,
} from '@react-navigation/stack';

import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

// Forma 1 de colocar tipo de datos de argumentos. La fácil
// Hacemos una interface con los parámetros que esperamos
interface RouterParams {
  id: number;
  nombre: string;
}

// Forma "fea" de recibir parámetros
interface Props extends StackScreenProps<any, any> {}

export const PersonaScreen = ({route, navigation}: Props) => {
  const {changeUsername} = useContext(AuthContext);

  // Recibir parámetros
  // console.log(JSON.stringify(props, null, 3));

  // En la forma "fea" en route tengo la propiedad params con mis parámetros
  // Es feo porque no tengo los tipos de los parámetros, no se si vienen realmente o no
  const params = route.params as RouterParams;

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
