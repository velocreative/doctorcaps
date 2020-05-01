import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { colors } from './constants/colors';

import Home      from './screens/home';
import Tienda    from './screens/tienda';
import Producto  from './screens/producto';
import Ubicacion from './screens/ubicacion';
import Pedido    from './screens/pedido';
import Cuenta    from './screens/cuenta';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
            borderTopWidth: 3,
            height: 56,
          }          
        }     
        }      
      >
        <Tab.Screen name="Home"      component={Home}      initialParams={{bicicleta:'Specialized'}} />
        <Tab.Screen name="Tienda"    component={Tienda}    initialParams={{bicicleta:'Specialized'}} />
        <Tab.Screen name="Pedido"    component={Pedido}    initialParams={{bicicleta:'Specialized'}} />        
        <Tab.Screen name="Ubicacion" component={Ubicacion} initialParams={{bicicleta:'Specialized'}} />
        <Tab.Screen name="Cuenta"    component={Cuenta}    initialParams={{bicicleta:'Specialized'}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  iconMenu: {
    height: 27,
    width: 32
  }
});