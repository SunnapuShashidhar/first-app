import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Setting from '../Settings';
import CurvedTabBar from '../CurvedTabBar';
import Icons from "react-native-vector-icons/AntDesign"
import Icon from "react-native-vector-icons/Entypo"
import Bottom from '../Bottom';
import About from '../About';



const Drawer = createDrawerNavigator();
interface IProps {
  navigation?: {
    navigate: React.FC,
  }
}
interface IState {
  data: {
    icon: string,
    label: string,
    navi: string
  }[]
}
export class DrawerNavigator extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      data: [

      ]
    }
  }

  async componentDidMount() {
    const data = await fetch("https://dummyjson.com/users")
    // this.setState({ data: data });
  }

  CustomDrawerContent = () => {
    return <DrawerContentScrollView

    >
      <View style={{ alignItems: "center", marginBottom: 5 }}>
        <Image style={Style.img} source={require("../asserts/singnPassimg.png")} />
      </View>
      <View>
        <View style={[Style.circleContainer]}>
          <Icons name="home" color={"#000"} size={25} />
          <DrawerItem
            label={"Home"}
            style={{ backgroundColor: "#aaa", flexGrow: 1 }}
            labelStyle={[]}
            onPress={() => this.props.navigation?.navigate("home")}
          />
        </View>
        <View style={[Style.circleContainer]}>
          <Icons name="user" color={"#000"} size={25} />
          <DrawerItem
            label={"User"}
            style={[{ backgroundColor: "#aaa", flexGrow: 1 }]}
            labelStyle={[]}
            onPress={() => this.props.navigation?.navigate("setting")}
          />
        </View>
        <View style={[Style.circleContainer]}>
          <Icon name="database" color={"#000"} size={25} />
          <DrawerItem
            label={"Data Base"}
            style={{ backgroundColor: "#aaa", flexGrow: 1 }}
            labelStyle={[]}
            onPress={() => this.props.navigation?.navigate("database")}
          />
        </View>
        <View style={[Style.circleContainer]}>
          <Icons name="infocirlce" color={"#000"} size={25} />
          <DrawerItem
            label={"About"}
            style={{ backgroundColor: "#aaa", flexGrow: 1 }}
            labelStyle={[]}
            onPress={() => this.props.navigation?.navigate("about")}
          />
        </View>
      </View>

    </DrawerContentScrollView >
  }
  render() {
    return (
      <Drawer.Navigator initialRouteName='home'
        drawerContent={() => this.CustomDrawerContent()}
        screenOptions={{
          swipeEnabled: true,
          // swipeMinDistance: 1,
          // headerShown: false,
          drawerPosition: "right"
        }}
      >
        <Drawer.Screen name="home" component={CurvedTabBar} options={{}} />
        <Drawer.Screen name="database" component={Bottom} />
        <Drawer.Screen name="setting" component={Setting} />
        <Drawer.Screen name="about" component={About} />
      </Drawer.Navigator>
    )
  }
}

export default DrawerNavigator


const Style = StyleSheet.create({
  circleContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginLeft: 5,
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 50,
  }
})