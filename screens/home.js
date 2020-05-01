import React,{Component} from 'react';
import { Button, Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';

import COLORS from '../constants/colors';
import Wallpaper from '../assets/images/bg_home.png';

const Alto  = Dimensions.get('window').height;
const Ancho = Dimensions.get('window').width;

function Home({ route }){


  return (  
    <ImageBackground style={styles.container} source={Wallpaper} resizeMode='cover'>
        <Image
            style={styles.logoHome}
            source={require('../assets/images/logoMain.png')}
        />
        <View style={styles.masterBox}>
            <Text>Aqui irá el Home</Text>  
        </View>
        
    </ImageBackground>  
  );  
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',    
    backgroundColor: COLORS.fondo,
    justifyContent: 'center',
    padding: 20,
    tintColor: COLORS.fondo,    
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