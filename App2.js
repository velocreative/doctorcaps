import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons,FontAwesome } from '@expo/vector-icons';
//import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import icoMoonConfig from './assets/fonts/selection.json';

import Tienda    from './screens/tienda';
import Ubicacion from './screens/ubicacion';
import Pedido    from './screens/pedido';
import Cuenta    from './screens/cuenta';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            
            if (route.name === 'Tienda')          iconName = focused ? 'ios-basket':'ios-basket';
            else if (route.name === 'Ubicacion')  iconName = focused ? 'ios-pin':'ios-pin';
            else if (route.name === 'Trabajo')    iconName = focused ? 'md-tennisball':'md-tennisball';
            else if (route.name === 'Cuenta')     iconName = focused ? 'md-person':'md-person';
            return <Ionicons name={iconName} size={36} color={color} />;
            //return <Image source={require('./assets/icon_bar_tienda.png')} />;
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
            height: 60,
          }          
        }     
        }      
      >
        <Tab.Screen name="Tienda"    component={Tienda}    initialParams={{bicicleta:'Specialized'}} />
        <Tab.Screen name="Ubicacion" component={Ubicacion} initialParams={{bicicleta:'Specialized'}} />
        <Tab.Screen name="Pedido"    component={Pedido}    initialParams={{bicicleta:'Specialized'}} />        
        <Tab.Screen name="Cuenta"    component={Cuenta}    initialParams={{bicicleta:'Specialized'}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}