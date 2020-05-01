import React,{Component} from 'react';
import { Dimensions, FlatList, Image, ImageBackground, Picker, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import COLORS from '../constants/colors';
import Wallpaper from '../assets/images/bg_home.png';

const Alto  = Dimensions.get('window').height;
const Ancho = Dimensions.get('window').width;

function Item({ title, marca, foto, navigation }) {
  const showFoto = {uri: {foto}.foto}

  return (
    <TouchableOpacity
      style={styles.producto} onPress={() => 
        navigation.navigate('Producto')
      }>
      <View>
        <Image source={showFoto} style={styles.prodImage} />
        <Text style={styles.txtProd}>{title}</Text>
        <Text style={styles.txtMarca}>{marca}</Text>
      </View>
    </TouchableOpacity>
  );
}

function Tienda({ route, navigation }){
  return (
    <ImageBackground style={styles.container} source={Wallpaper}>
        <View style={styles.masterBox}> 
            <View style={styles.header}>
              <Picker
                  //selectedValue={selectedValue}
                  style={styles.SelectCategoria}
                  //onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
                  <Picker.Item label="VER TODOS" value="" />
                  <Picker.Item label="LIGA MEXICANA DEL PACIFICO" value="LMP" />
                  <Picker.Item label="MARCAS" value="BRD" />
                  <Picker.Item label="URBANA" value="URB" />
                  <Picker.Item label="BEISBOL (MLB)" value="MLB" />
                  <Picker.Item label="BASQUETBOL (NBA)" value="NBA" />
                  <Picker.Item label="FUTBOL AMERICANO (NFL)" value="NFL" />
              </Picker>
              <Ionicons name="ios-arrow-down" style={styles.iconPicker} size={25} />
          </View>
          <ScrollView style={styles.AddMargin}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item
                    title={item.titulo}
                    marca={item.marca}
                    foto={item.foto}
                    navigation={navigation}
                />}
                keyExtractor={item => item.id}
                numColumns = {3}
            />
          </ScrollView>
        </View>
    </ImageBackground>
  );  
}

export default Tienda;

const styles = StyleSheet.create({
  AddMargin: {
    marginBottom: 6,
    marginHorizontal: 6,
    marginTop: 0,
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
    backgroundColor: COLORS.gris,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 8,
  },
  iconPicker: {
    alignItems: 'center',
    backgroundColor: COLORS.gris,
    color: COLORS.negro,
    justifyContent: 'center',
    padding: 4,
    position: 'absolute',
    right: 10,
    top: 8,
  },
  masterBox: {
    backgroundColor: COLORS.blanco,
    borderRadius: 16,
    maxHeight: Alto * 0.8,
    padding: 0,
  },
  producto: {
    paddingBottom: 6,
    paddingHorizontal: 6,
     width: '33.3%',
  },
  prodImage: {
    height: 95,
    marginBottom: 4,
    width: '100%',
  },
  SelectCategoria: {
    backgroundColor: COLORS.gris,    
    borderWidth: 0,
    fontSize: 22,
    fontWeight: 'bold',
    height: 36,
    paddingLeft: 10,
    width: '100%',
  },
  txtMarca: {
    color: COLORS.rojo,
    fontSize: 11,
  },  
  txtProd: {
    fontSize: 14,
  },
  Wallpaper: {
    backgroundColor: COLORS.fondo,    
    flex: 1,
    justifyContent: 'center',    
    padding: 20,
    resizeMode: "cover",
  }
});


const DATA = [
  {
    id: '101',
    titulo: 'LA CHARGERS DRAFT 9FIFTY SNAPBACK',
    marca: 'NEW ERA',
    categoria: 'NFL',
    precio: 290,
    descripcion: 'In celebration of the 100th season of the National Football League, the Established Collection honors the era that each franchise was established. The Los Angeles Chargers Official NFL Sideline Low Profile 59FIFTY Fitted features an embroidered Chargers logo at the front panels, date of establishment at the right-wear side and the Official NFL 100 Logo at the rear. Additional details include contrasting team color stitching.',
    foto: 'https://www.neweracap.com/medias/sys_master/root/root/hb8/h4d/9479640645662/9479640645662.png'
  },
  {
    id: '102',
    titulo: 'WASHINGTON NATIONALS JACKIE ROBINSON DAY 59FIFTY FITTED',
    marca: 'NEW ERA',
    categoria: 'MLB',
    precio: 290,
    descripcion: 'In celebration of the 100th season of the National Football League, the Established Collection honors the era that each franchise was established. The Los Angeles Chargers Official NFL Sideline Low Profile 59FIFTY Fitted features an embroidered Chargers logo at the front panels, date of establishment at the right-wear side and the Official NFL 100 Logo at the rear. Additional details include contrasting team color stitching.',    
    foto: 'https://www.neweracap.com/medias/sys_master/root/root/h01/hdb/9479632715806/9479632715806.png'
  },
  {
    id: '103',
    titulo: 'LA CHARGERS DRAFT 9FIFTY SNAPBACK',
    marca: 'NEW ERA',
    categoria: 'NFL',
    precio: 290,
    descripcion: 'In celebration of the 100th season of the National Football League, the Established Collection honors the era that each franchise was established. The Los Angeles Chargers Official NFL Sideline Low Profile 59FIFTY Fitted features an embroidered Chargers logo at the front panels, date of establishment at the right-wear side and the Official NFL 100 Logo at the rear. Additional details include contrasting team color stitching.',    
    foto: 'https://www.neweracap.com/medias/sys_master/root/root/hb8/h4d/9479640645662/9479640645662.png'
  },
  {
    id: '104',
    titulo: 'OAKLAND ATHLETICS JACKIE ROBINSON DAY 59FIFTY FITTED',
    marca: 'NEW ERA',
    categoria: 'NBA',
    precio: 290,
    descripcion: 'In celebration of the 100th season of the National Football League, the Established Collection honors the era that each franchise was established. The Los Angeles Chargers Official NFL Sideline Low Profile 59FIFTY Fitted features an embroidered Chargers logo at the front panels, date of establishment at the right-wear side and the Official NFL 100 Logo at the rear. Additional details include contrasting team color stitching.',    
    foto: 'https://www.neweracap.com/medias/sys_master/root/root/h2f/hf9/9309867442206/9309867442206.png'
  },
  {
    id: '105',
    titulo: 'LA CHARGERS DRAFT 9FIFTY SNAPBACK',
    marca: 'NEW ERA',
    categoria: 'NFL',
    precio: 290,
    descripcion: 'In celebration of the 100th season of the National Football League, the Established Collection honors the era that each franchise was established. The Los Angeles Chargers Official NFL Sideline Low Profile 59FIFTY Fitted features an embroidered Chargers logo at the front panels, date of establishment at the right-wear side and the Official NFL 100 Logo at the rear. Additional details include contrasting team color stitching.',    
    foto: 'https://www.neweracap.com/medias/sys_master/root/root/hb8/h4d/9479640645662/9479640645662.png'
  },
  {
    id: '106',
    titulo: 'WASHINGTON NATIONALS JACKIE ROBINSON DAY 59FIFTY FITTED',
    marca: 'NEW ERA',
    categoria: 'MLB',
    precio: 290,
    descripcion: 'In celebration of the 100th season of the National Football League, the Established Collection honors the era that each franchise was established. The Los Angeles Chargers Official NFL Sideline Low Profile 59FIFTY Fitted features an embroidered Chargers logo at the front panels, date of establishment at the right-wear side and the Official NFL 100 Logo at the rear. Additional details include contrasting team color stitching.',    
    foto: 'https://www.neweracap.com/medias/sys_master/root/root/h01/hdb/9479632715806/9479632715806.png' },
  {
    id: '107',
    titulo: 'LA CHARGERS DRAFT 9FIFTY SNAPBACK',
    marca: 'NEW ERA',
    categoria: 'NFL',
    precio: 290,
    descripcion: 'In celebration of the 100th season of the National Football League, the Established Collection honors the era that each franchise was established. The Los Angeles Chargers Official NFL Sideline Low Profile 59FIFTY Fitted features an embroidered Chargers logo at the front panels, date of establishment at the right-wear side and the Official NFL 100 Logo at the rear. Additional details include contrasting team color stitching.',    
    foto: 'https://www.neweracap.com/medias/sys_master/root/root/hb8/h4d/9479640645662/9479640645662.png'
  },
  {
    id: '108',
    titulo: 'OAKLAND ATHLETICS JACKIE ROBINSON DAY 59FIFTY FITTED',
    marca: 'NEW ERA',
    categoria: 'NBA',
    precio: 290,
    descripcion: 'In celebration of the 100th season of the National Football League, the Established Collection honors the era that each franchise was established. The Los Angeles Chargers Official NFL Sideline Low Profile 59FIFTY Fitted features an embroidered Chargers logo at the front panels, date of establishment at the right-wear side and the Official NFL 100 Logo at the rear. Additional details include contrasting team color stitching.',    
    foto: 'https://www.neweracap.com/medias/sys_master/root/root/hb8/h4d/9479640645662/9479640645662.png'
  },
  {
    id: '109',
    titulo: 'LA CHARGERS DRAFT 9FIFTY SNAPBACK',
    marca: 'NEW ERA',
    categoria: 'NFL',
    precio: 290,
    descripcion: 'In celebration of the 100th season of the National Football League, the Established Collection honors the era that each franchise was established. The Los Angeles Chargers Official NFL Sideline Low Profile 59FIFTY Fitted features an embroidered Chargers logo at the front panels, date of establishment at the right-wear side and the Official NFL 100 Logo at the rear. Additional details include contrasting team color stitching.',    
    foto: 'https://www.neweracap.com/medias/sys_master/root/root/hb8/h4d/9479640645662/9479640645662.png'
  },
  {
    id: '110',
    titulo: 'WASHINGTON NATIONALS JACKIE ROBINSON DAY 59FIFTY FITTED',
    marca: 'NEW ERA',
    categoria: 'MLB',
    precio: 290,
    descripcion: 'In celebration of the 100th season of the National Football League, the Established Collection honors the era that each franchise was established. The Los Angeles Chargers Official NFL Sideline Low Profile 59FIFTY Fitted features an embroidered Chargers logo at the front panels, date of establishment at the right-wear side and the Official NFL 100 Logo at the rear. Additional details include contrasting team color stitching.',    
    foto: 'https://www.neweracap.com/medias/sys_master/root/root/h82/h6b/9479641563166/9479641563166.png'
  },
  {
    id: '111',
    titulo: 'LA CHARGERS DRAFT 9FIFTY SNAPBACK',
    marca: 'NEW ERA',
    categoria: 'NFL',
    precio: 290,
    descripcion: 'In celebration of the 100th season of the National Football League, the Established Collection honors the era that each franchise was established. The Los Angeles Chargers Official NFL Sideline Low Profile 59FIFTY Fitted features an embroidered Chargers logo at the front panels, date of establishment at the right-wear side and the Official NFL 100 Logo at the rear. Additional details include contrasting team color stitching.',    
    foto: 'https://www.neweracap.com/medias/sys_master/root/root/hb8/h4d/9479640645662/9479640645662.png'
  },
  {
    id: '114',
    titulo: 'OAKLAND ATHLETICS JACKIE ROBINSON DAY 59FIFTY FITTED',
    marca: 'NEW ERA',
    categoria: 'NBA',
    precio: 290,
    descripcion: 'In celebration of the 100th season of the National Football League, the Established Collection honors the era that each franchise was established. The Los Angeles Chargers Official NFL Sideline Low Profile 59FIFTY Fitted features an embroidered Chargers logo at the front panels, date of establishment at the right-wear side and the Official NFL 100 Logo at the rear. Additional details include contrasting team color stitching.',    
    foto: 'https://www.neweracap.com/medias/sys_master/root/root/h01/hdb/9479632715806/9479632715806.png'
  },    
];