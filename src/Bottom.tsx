import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from './About';
import Home from './Home';
import Settings from './Settings';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from "react-native-vector-icons/Ionicons"
const Tab = createBottomTabNavigator();

export class Bottom extends Component {
  render() {
    return (
      <Tab.Navigator initialRouteName='library'>
        <Tab.Screen name="home" component={Home} options={{
          tabBarIcon: () =>
            <Icon color={"#000"} name="home" size={30} />,
          headerShown: false
        }} />
        <Tab.Screen name="library" component={About} options={{
          tabBarIcon: () =>
            <Icons color="#000" name="library" size={30} />,
          headerShown: false
        }}

        />
        <Tab.Screen name="settings" component={Settings} options={{
          tabBarIcon: () =>
            <Icon color={"#000"} name="setting" size={30} />,
          headerShown: false
        }} />
      </Tab.Navigator>
    )
  }
}

export default Bottom
