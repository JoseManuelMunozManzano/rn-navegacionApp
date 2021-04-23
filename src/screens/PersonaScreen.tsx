import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {styles} from '../theme/appTheme';

// Forma "fea" de recibir parámetros
interface Props extends StackScreenProps<any, any> {}

export const PersonaScreen = ({route, navigation}: Props) => {
  // Recibir parámetros
  // console.log(JSON.stringify(props, null, 3));

  // En la forma "fea" en route tengo la propiedad params con mis parámetros
  // Es feo porque no tengo los tipos de los parámetros, no se si vienen realmente o no
  const params = route.params!;

  useEffect(() => {
    const options: StackNavigationOptions = {
      title: params.nombre,
    };

    navigation.setOptions(options);
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
