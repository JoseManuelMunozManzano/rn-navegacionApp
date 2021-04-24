import React, {useEffect} from 'react';
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
// import {StackScreenProps} from '@react-navigation/stack';
import {DrawerScreenProps} from '@react-navigation/drawer';

import {styles} from '../theme/appTheme';

// interface Props extends StackScreenProps<any, any> {}
// Para que funcione el toggleDrawer ahora tiene que tirar de DrawerScreenProps
interface Props extends DrawerScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  // Acceso a navegación a través de props. Opción deseada.
  // Ver Pagina2Screen.tsx para ver el uso del hook useNavigation()

  // Menú Hamburguesa. Se ve sólo si no se ve el drawer por defecto (ver MenuLateralBasico)
  const {width, height} = useWindowDimensions();
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () =>
        width <= height ? (
          <Button
            title="Menú"
            onPress={() => {
              navigation.toggleDrawer();
            }}
          />
        ) : null,
    });
  }, [width]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> Pagina1Screen </Text>
      <Button
        title="Ir página 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />

      <Text style={{marginVertical: 20, fontSize: 20, marginLeft: 5}}>
        Navegar con argumentos
      </Text>

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
