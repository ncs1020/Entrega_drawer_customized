import * as React from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList,} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeVista from './Vista/HomeVista';
import ValidadorVista from './Vista/ValidadorVista';
import InfoVista from './Vista/InfoVista';
import LoginScreen from './Vista/Login';

const Drawer = createDrawerNavigator();

const CustomDrawer = props => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            backgroundColor: '#f6f6f6',
            marginBottom: 20,
          }}
        >
          <View>
            <Text>Usuario Logeado</Text>
            <Text>mail@usuario.com</Text>
          </View>
          <Image
            source={ require('./assets/img/userSinFoto.jpg')}
            style={{ width: 70, height: 70, borderRadius: 10 }}
          />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 0,
          left: 0,
          bottom: 50,
          backgroundColor: '#f6f6f6',
          padding: 20,
        }}
      >
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: 'transparent',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitle: 'd-_-b',
      }}
      drawerContent={props => <CustomDrawer {...props} />}
    > 
      <Drawer.Screen component={LoginScreen} name='Login' />
      <Drawer.Screen component={HomeVista} name='Inicio' />
      <Drawer.Screen component={ValidadorVista} name='Validador' />
      <Drawer.Screen component={InfoVista} name='Info' />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
