import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AboutUs from './src/screens/AboutUs';
import Home from './src/screens/Home'


const Stack = createNativeStackNavigator();
//we create a stack (can be named differently) that will include a navigator and all the screens we want
// we need to add the navigation ocntainer aroun our app
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='home'
      screenOptions={{
        headerStyle:{
        backgroundColor: '#f4511e'
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold'
      },
      headerTitleAlign:'center'
    }}
      >
        <Stack.Screen
          name='home'
          component={Home}
          options={{
            title:'main component name',
            

          }}
        />
        <Stack.Screen
          name='aboutUs'
          component={AboutUs}
          options={ ({route})=>({
            title: route.params.name
          }) }
        />
      </Stack.Navigator>
     
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
