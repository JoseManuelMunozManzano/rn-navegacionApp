import React from 'react';
import {Button, Text, View, TouchableOpacity} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  // Acceso a navegación a través de props. Opción deseada.
  // Ver Pagina2Screen.tsx para ver el uso del hook useNavigation()

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> Pagina1Screen </Text>
      <Button
        title="Ir página 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />

      <Text>Navegar con argumentos</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('PersonaScreen', {
            // mandar argumentos
            id: 1,
            nombre: 'Adriana',
          })
        }>
        <Text>Adriana</Text>
      </TouchableOpacity>
    </View>
  );
};
