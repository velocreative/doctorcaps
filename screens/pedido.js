import React,{Component} from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import COLORS from '../constants/colors';
import Wallpaper from '../assets/images/bg_home.png';


class bloque extends Component{
  render(){
    return
      <Text>LOCAL: {this.props.titulo} - {this.props.ciudad}</Text>    
  }
}

function Pedido({ route }){

    return ( 
    <ImageBackground style={styles.container} source={Wallpaper} resizeMode='cover'>
        <View style={styles.masterBox}>
            <Text>Pedidos</Text>

            <bloque valor={UBIC} />
        </View>
    </ImageBackground>
  );
}

export default Pedido;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',    
    backgroundColor: COLORS.fondo,
    justifyContent: 'center',
    padding: 20,
    tintColor: COLORS.fondo,    
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

const UBIC = [
  {
    id: "101",
    titulo: "DOCTOR CAPS",
    direccion1: "BLVD. NAVARRETE 195A",
    direccion2: "COL. LOMA LINDA",
    cp: "83010",
    ciudad: "HERMOSILLO",
    estado: "SON.",
    horario: "10:00 A 18:00 HRS.",
    telefono: "6623103032",    
  },
  {
    id: "102",
    titulo: "OVANDO'S",
    direccion1: "JUAREZ 1922",
    direccion2: "COL. LOMA LINDA",
    cp: "83010",
    ciudad: "HERMOSILLO",
    estado: "SON.",
    horario: "10:00 A 18:00 HRS.",
    telefono: "66210203040",   
  },
  {
    id: "103",
    titulo: "LIVERPOOL",
    direccion1: "JUAREZ 1922",
    direccion2: "COL. LOMA LINDA",
    cp: "83010",
    ciudad: "HERMOSILLO",
    estado: "SON.",
    horario: "10:00 A 18:00 HRS.",
    telefono: "66240405050",   
  },
    {
    id: "104",
    titulo: "SEARS",
    direccion1: "JUAREZ 1922",
    direccion2: "COL. LOMA LINDA",
    cp: "83010",
    ciudad: "HERMOSILLO",
    estado: "SON.",
    horario: "10:00 A 18:00 HRS.",
    telefono: "66260605050",   
  },
  {
    id: "105",
    titulo: "SAMBORNS",
    direccion1: "JUAREZ 1922",
    direccion2: "COL. LOMA LINDA",
    cp: "83010",
    ciudad: "HERMOSILLO",
    estado: "SON.",
    horario: "10:00 A 18:00 HRS.",
    telefono: "66211111111",   
  },        
];