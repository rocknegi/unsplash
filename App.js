import React from 'react'
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import Home from "./src/components/home";
import SecondScreen from './src/components/secondScreen';


const TabNavigator = createMaterialTopTabNavigator({
  Home,
  SecondScreen
})


const AppContainer = createAppContainer(TabNavigator)

export default App = () => {
  return (

    <AppContainer />

  )
}