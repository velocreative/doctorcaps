import React,{Component} from 'react';
import { Button, Dimensions, Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';

import COLORS from '../constants/colors';
import Wallpaper from '../assets/images/bg_home.png';

const Alto  = Dimensions.get('window').height;
const Ancho = Dimensions.get('window').width;

function Login(){
    return (  
        <ImageBackground style={styles.container} source={Wallpaper} resizeMode='cover'>
            <Image
                style={styles.logoHome}
                source={require('../assets/images/logoMain.png')}
            />
            <View style={styles.loginBox}>
                <TextInput placeholder="Correo Electrónico" style={styles.campo} />
                <TextInput placeholder="Contraseña"  style={styles.campo} />
            </View>
            <View style={styles.botonera}>
                <Button title="INGRESAR" color={COLORS.rojo}  onPress={() => navigation.navigate('Home')} />
                <Button title="REGISTRATE" color={COLORS.gris} onPress={() => alert("putos todos")} />
            </View>        
        </ImageBackground>  
    );
}

const styles = StyleSheet.create({
  botonera: {
    alignItems: 'center',
    paddingVertical: 10,
    width: '80%',
  },
  campo: {
      backgroundColor: COLORS.blanco,
      padding: 8,
      marginVertical: 16,
      width: '100%',
  },    
  container: {
    flex: 1,
    alignItems: 'center',    
    backgroundColor: COLORS.fondo,
    justifyContent: 'center',
    padding: 20,
    tintColor: COLORS.fondo,    
  },
  loginBox: {
    width: '80%',
  },
  logoHome: {
    height: Ancho * 0.31,
    marginBottom: 30, 
    width: Ancho * 0.4,
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
});