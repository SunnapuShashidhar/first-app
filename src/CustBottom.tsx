import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet } from 'react-native';
import About from './About';
import Home from './Home';
import Settings from './Settings';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from "react-native-vector-icons/Ionicons";
import CustDesign from './CurveDesign';


const Tab = createBottomTabNavigator();
export class Bottom extends Component {
  state = {
    pathX: "357",
    pathY: "675",
    pathA: "689",
    pathB: "706",
  }
  render() {

    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#fcba03",
          tabBarActiveBackgroundColor: "red",

        }}

      >
        <Tab.Screen name="Favorites" component={Home} options={{
          tabBarIcon: ({ color }) => {
            return (
              <View style={{
                shadowColor: "red",

              }}>
                <Icon color={color} name="star" size={30} />
              </View>
            )
          }
        }}
        />
        <Tab.Screen name=" " component={About} options={{
          tabBarIcon: ({ color }) => {
            return (
              <View style={Styles.plusParent}>
                <View
                  style={Styles.btnTab}>
                  <Icons
                    name="add-circle-outline"
                    size={42}
                    color="#000"
                    style={Styles.plus}
                  />
                </View>
              </View>
            )
          }
        }} />
        <Tab.Screen name="Recent" component={Settings} options={{
          tabBarIcon: ({ color }) =>
            <Icons color={color} name="stopwatch-outline" size={30} />
        }}
        />
      </Tab.Navigator>
    )
  }
}

export default Bottom


const Styles = StyleSheet.create({
  plus: {

  },
  btnTab: {
    position: 'absolute',
    bottom: -3,
    left: -5,
    height: 70,
    width: 70,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gey',
    padding: 3,
    backgroundColor: "#0bd96e",
  },
  plusParent: {
    position: "absolute",
    height: 70,
    width: 80,
    borderRadius: 70,
    bottom: 5,
    borderColor: "#fcba03",
    borderWidth: 10
  },
  activeAction: {
    color: "#fcba03"
  },

})