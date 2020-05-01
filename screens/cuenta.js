import React,{Component} from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import COLORS from '../constants/colors';
import Wallpaper from '../assets/images/bg_home.png';

function Cuenta({ route }){
  return (  
    <ImageBackground style={styles.container} source={Wallpaper} resizeMode='cover'>
        <View style={styles.masterBox}>
          <View style={styles.header}>          
            <Image source={{uri: 'https://bolerang.com/apps/avatar.png'}} style={styles.perfil} />
          </View>
          <Text style={{color:COLORS.rojo}}>FRANCISCO PÉREZ MENDIVIL</Text>
          <Text>FPMENDIVIL@GMAIL.COM<br/>46 AÑOS<br/>MASCULINO</Text>
          <Text>CERRADA FRANCISTO #54<br/>RESIDENCIAL SAN CRISTOBAL<br/>HERMOSILLO, SON. 83150</Text>
          <TouchableOpacity>
              <Text>Editar</Text>
          </TouchableOpacity>
        </View>
    </ImageBackground>  
  );
}

export default Cuenta;

const styles = StyleSheet.create({
  botonera: {
    alignItems: 'center',
    paddingVertical: 10,
    width: '100%',
  },  
  btnTrans: {
    borderColor: COLORS.grisOscuro,
    borderRadius: 4,    
    borderWidth: 1,
    color: COLORS.grisOscuro,
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 5,
  },
  container: {
    flex: 1,
    alignItems: 'center',    
    backgroundColor: COLORS.fondo,
    justifyContent: 'center',
    padding: 20,
    tintColor: COLORS.fondo,     
  },
  header: {
    marginBottom: 15,
    position: 'absolute',
    top: -50,
  },
  linea: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grisOscuro,
  },
  perfil: {
    borderRadius: 100,
    borderColor: COLORS.blanco,
    borderWidth: 6,
    height: 100,
    width: 100,
  },
  masterBox: {
    alignItems: 'center',
    backgroundColor: COLORS.gris,
    borderRadius: 16,
    minHeight: 200,
    maxHeight: '80%',
    paddingHorizontal: 10,
    paddingTop: 70,
    paddingBottom: 6,
    textAlign: 'center',
    width: '100%',
  },
  txtNombre: {
    color: COLORS.rojo,
    fontSize: 21,
    fontWeight: 600,
    marginBottom: 10,
  },
  txtInfo: {
    color: COLORS.negro,
    fontSize: 15,
    lineHeight: 25,
    paddingVertical: 15,
    textAlign: 'center',
    width: '100%',
  },    
});