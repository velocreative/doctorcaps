import React,{Component} from 'react';
import { Button, Image, ImageBackground, TouchableOpacity, StyleSheet, Text, View, PickerIOSComponent } from 'react-native';

import COLORS from '../constants/colors';
import Wallpaper from '../assets/images/bg_home.png';

function Cuenta({ route }){
  const {bicicleta} = route.params;
  return (  
    <View style={styles.container}>
      <ImageBackground style={styles.Wallpaper} source={Wallpaper}>
        <View style={styles.masterBox}>
          <View style={styles.header}>
            <Image source={{uri: 'https://bolerang.com/apps/avatar.png'}} style={styles.perfil} />
          </View> 
          <Text style={styles.txtNombre}>FRANCISCO PÉREZ MENDIVIL</Text>
          <Text style={[styles.txtInfo, styles.linea]}>FPMENDIVIL@GMAIL.COM<br/>46 AÑOS<br/>MASCULINO</Text>
          <Text style={styles.txtInfo}>CERRADA FRANCISTO #54<br/>RESIDENCIAL SAN CRISTOBAL<br/>HERMOSILLO, SON. 83150</Text>
          <View style={styles.botonera}>
            <TouchableOpacity>
              <Text style={styles.btnTrans}>Editar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>  
    </View>  
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
    flex:1,
    backgroundColor: '#DDDDDD',
  },
  header: {
    marginBottom: 15,
    position: 'absolute',
    top: -75,
  },
  linea: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grisOscuro,
  },
  perfil: {
    borderRadius: 100,
    borderColor: COLORS.blanco,
    borderWidth: 6,
    height: 150,
    width: 150,
  },
  masterBox: {
    alignItems: 'center',
    backgroundColor: COLORS.gris,
    borderRadius: 16,
    minHeight: 200,
    maxHeight: '80%',
    paddingHorizontal: 10,
    paddingTop: 85,
    paddingBottom: 6,
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
  Wallpaper: {
    backgroundColor: COLORS.fondo,    
    flex: 1,
    justifyContent: 'center',    
    padding: 20,
    resizeMode: "cover",
  }      
});