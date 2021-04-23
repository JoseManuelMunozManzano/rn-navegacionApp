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

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#5856d6'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              // mandar argumentos
              id: 1,
              nombre: 'Adriana',
            })
          }>
          <Text style={styles.botonGrandeTexto}>Adriana</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#ff9427'}}
          onPress={() =>
            navigation.navigate('PersonaScreenFormaBuena', {
              id: 2,
              nombre: 'José Manuel',
            })
          }>
          <Text style={styles.botonGrandeTexto}>José Manuel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
