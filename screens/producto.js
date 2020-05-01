import React,{Component} from 'react';
import { Button, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import COLORS from '../constants/colors';
import Wallpaper from '../assets/images/bg_home.png';

function Producto({ route, navigation }){
    const showFoto2 = require('../assets/images/producto.png')
    return (
        <ImageBackground style={styles.container} source={Wallpaper}>
            <View style={styles.masterBox}>
                <Image source={showFoto2} style={styles.prodImageHead} />
                <Ionicons name="ios-arrow-dropleft" style={styles.iconBack} size={32} onPress={() => navigation.goBack()} />
                <Text>WASHINGTON NATIONALS JACKIE ROBINSON DAY 59FIFTY FITTED</Text>


                <View style={styles.greyZone}>
                    <ScrollView style={styles.descripcion}> 
                        <Text>In celebration of the 100th season of the National Football League, the Established Collection honors the era that each franchise was established. The Los Angeles Chargers Official NFL Sideline Low Profile 59FIFTY Fitted features an embroidered Chargers logo at the front panels, date of establishment at the right-wear side and the Official NFL 100 Logo at the rear. Additional details include contrasting team color stitching.</Text>
                    </ScrollView>
                    <View style={styles.botonera}>
                        <Button title="Comprar" />  
                    </View>
                </View>
            </View>
        </ImageBackground>
    );  
}
  
  export default Producto;
  
  const styles = StyleSheet.create({
    botonera: {
        alignItems: 'center',
        paddingVertical: 10,
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
    descripcion: {
        maxHeight: 100,
        width: '100%',
    },
    destacaBox: {
        backgroundColor: COLORS.negro,
        flexDirection: 'row',
        paddingVertical: 12,        
        width: '100%',
    },
    destacaDer: {
        borderLeftColor: COLORS.grisOscuro,
        borderLeftWidth: 1,        
        paddingHorizontal: 6,
        textAlign: 'center',
        width: '50%',
    },
    destacaIzq: {
        borderRightColor: COLORS.grisOscuro,
        borderRightWidth: 1,        
        paddingHorizontal: 6,
        textAlign: 'center',
        width: '50%',
    },
    greyZone: {
        padding: 6,         
    },
    iconBack: {
        color: COLORS.negro,
        left: 15,
        position: 'absolute',
        top: 15,
        zIndex: 10,
    },
    masterBox: {
        backgroundColor: COLORS.gris,
        borderRadius: 16,
        minHeight: 200,
        maxHeight: '80%',
        padding: 0,
        width: '100%',
    },    
    prodImageHead: {
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,        
        width: '100%',
        height: 300,
    },
    txtModelo: {
        fontSize: 18,
        fontWeight: 600,
        padding: 6,
        textAlign: 'center',
    },
    txtMarca: {
        color: COLORS.blanco,        
        fontSize: 14,
        fontWeight: 600,
        textAlign: 'center',        
    },
    txtMarcaTit: {
        color: COLORS.blanco,        
        fontSize: 11,
        textAlign: 'center',
    },
    Wallpaper: {
      backgroundColor: COLORS.fondo,    
      flex: 1,
      justifyContent: 'center',    
      padding: 20,
      resizeMode: "cover",
    }    
  });