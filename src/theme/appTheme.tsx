import {Platform, StyleSheet} from 'react-native';

export const colores = {
  primary: '#5856d6',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  menuHamburgesa: {
    alignItems: 'center',
    marginLeft: 10,
  },
  botonGrande: {
    width: 100,
    height: 100,
    marginRight: 10,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botonGrandeTexto: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 15 : 10,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 50,
  },
  menuBoton: {
    marginVertical: 5,
  },
  menuOpcion: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuTexto: {
    marginLeft: 10,
    fontSize: 20,
  },
});
