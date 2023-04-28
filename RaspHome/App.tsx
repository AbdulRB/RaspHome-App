import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import styles from './style'

import HomeScreen from './screens/home';
import DeviceList from './screens/bluetoothDevices';
import SearchScreen from './screens/searchDevices';

const AuthStack = createStackNavigator();

export default class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <AuthStack.Navigator
        initialRouteName='Home'
        >
          <AuthStack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
          {/* <AuthStack.Screen name="Device Scan List" component={DeviceList}/> */}
          <AuthStack.Screen name="Search Devices" component={SearchScreen} />
        </AuthStack.Navigator>
      </NavigationContainer>
    )
  }
};
