import React from 'react'
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import Home from "./src/components/home";
import SecondScreen from './src/components/secondScreen';


const TabNavigator = createMaterialTopTabNavigator({
  Nature:Home,
  Pets:SecondScreen
},{
  tabBarOptions: {
    labelStyle: {
      fontSize: 18,
      // color:'#000',
    },
    style: {
      backgroundColor: '#d9d9d9',
      width:'70%',
      alignSelf:'center',
      height:50,
      elevation:5,
      marginTop:'5%',
      marginBottom:'5%',
      borderRadius:10
    },
    indicatorStyle:{
      maxHeight:0
    },
    activeTintColor:'black',
    inactiveTintColor :'white'
  },
})


const AppContainer = createAppContainer(TabNavigator)

export default App = () => {
  return (

    <AppContainer />

  )
}