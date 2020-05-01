import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from './constants/colors';


import Home      from './screens/home';
import Tienda    from './screens/tienda';
import Producto  from './screens/producto';
import Ubicacion from './screens/ubicacion';
import Pedido    from './screens/pedido';
import Cuenta    from './screens/cuenta';

const Tab = createBottomTabNavigator();
const BaseSite = createStackNavigator();

function MainStackScreen() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: () => {
        if (route.name === 'Home')            return <Image source={require('./assets/images/icon_bar_home.png')} style={styles.iconMenu} /> ;
        else if (route.name === 'Tienda')     return <Image source={require('./assets/images/icon_bar_tienda.png')} style={styles.iconMenu} /> ;
        else if (route.name === 'Pedido')     return <Image source={require('./assets/images/icon_bar_pedidos.png')} style={styles.iconMenu} /> ;
        else if (route.name === 'Ubicacion')  return <Image source={require('./assets/images/icon_bar_ubicacion.png')} style={styles.iconMenu} /> ;
        else if (route.name === 'Cuenta')     return <Image source={require('./assets/images/icon_bar_cuenta.png')} style={styles.iconMenu} /> ;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#FFF',
      inactiveTintColor: '#FFF',
      activeBackgroundColor: '#000',
      showLabel : false,
      style: {
        backgroundColor: '#F00',
        borderTopColor: '#FFF',
        borderTopWidth: 2,
        height: 56,
      }          
    }     
    }      
  >
    <Tab.Screen name="Home"      component={Home} />
    <Tab.Screen name="Tienda"    component={Tienda} />
    <Tab.Screen name="Pedido"    component={Pedido} />        
    <Tab.Screen name="Ubicacion" component={Ubicacion} />
    <Tab.Screen name="Cuenta"    component={Cuenta} />
  </Tab.Navigator>    
  );
}

function App(){
  return (
    <NavigationContainer>
      <BaseSite.Navigator mode="modal" headerMode="none">
        <BaseSite.Screen name="Main" component={MainStackScreen} />
        <BaseSite.Screen name="Producto" component={Producto} />
      </BaseSite.Navigator>
    </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({
  iconMenu: {
    height: 27,
    width: 32
  }, 
});