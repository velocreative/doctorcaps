import React from 'react';
import { Button, Dimensions, FlatList, Linking, MapView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import COLORS from '../constants/colors';

const Alto  = Dimensions.get('window').height;
const Ancho = Dimensions.get('window').width;

function dialCall(number){
  let phoneNumber = `tel:${number}`;
  Linking.openURL(phoneNumber);
}

function Ubicacion({ route }){
  return (  
    <View style={styles.container}>
      <View style={styles.boxMapa}>
        <MapView style={styles.mapStyle} />  
      </View>
      <View style={styles.boxListado}>
        <FlatList
            data={DATA}
            renderItem={({ item }) =>
              <View style={styles.sucurBox}>
                <View style={styles.sucurSideInfo}>
                  <Text style={styles.sucurTit}>{item.titulo}</Text>
                  <Text style={styles.sucurTxt}>{item.direccion1}<br/>{item.direccion2}, {item.cp}<br/>{item.ciudad}, {item.estado}.</Text>
                  <Text style={styles.sucurTxt}>{item.horario}</Text>
                </View>
                <View style={styles.sucurSideIcon}>
                  <TouchableOpacity onPress={()=>{dialCall(item.telefono)}}>
                      <FontAwesome name="phone-square" size={40} color="COLORS.rojo" />
                  </TouchableOpacity>
                </View>
              </View>
            }
            keyExtractor={item => item.id}
          />
      </View>
    </View>      
  );
}

export default Ubicacion;

const styles = StyleSheet.create({
  boxListado: {
    flex:1,
    backgroundColor: COLORS.gris,   
  },
  boxMapa: {
    alignItems: 'center',
    flex:1,
    justifyContent: 'center',
    backgroundColor: COLORS.blanco,    
  },  
  container: {
    flex:1,
    backgroundColor: COLORS.fondo,
  },
  mapStyle: {
    width: Ancho,
    height: Alto/2,
  },
  sucurBox: {
    borderBottomColor: COLORS.blanco,
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: 15,
  },
  sucurSideInfo: {
    justifyContent: 'center',
    width:'90%',
  },
  sucurSideIcon: {
    justifyContent: 'center',
    marginRight: 15,  
    width:'10%',    
  },  
  sucurTit: {
    fontSize: 15,
    fontWeight: 500,
  },  
  sucurTxt: {
    fontSize: 11,
  },  
});

const DATA = [
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