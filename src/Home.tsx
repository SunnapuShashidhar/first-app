import React, { Component, ReactNode } from 'react';
import { Text, View, StyleSheet, Image, FlatList, ImageSourcePropType } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from "react-native-vector-icons/Ionicons"
import { styles } from './CurvedTabBar';
import { TouchableOpacity } from 'react-native-gesture-handler';
interface Props { }
interface IState {
  data: {
    id: number,
    img: ImageSourcePropType,
    title: String
  }[],
  data2: {
    id: number,
    icon: ReactNode,
    title: string
  }[]
}
export class Home extends Component<Props, IState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          img: require("./asserts/Group4.png"),
          title: "Royryan Merc..."
        },
        {
          id: 2,
          img: require("./asserts/Group5.png"),
          title: "Neil Gaiman"
        },
        {
          id: 3,
          img: require("./asserts/Group6.png"),
          title: "Mark mcallister"
        },
        {
          id: 4,
          img: require("./asserts/Group7.png"),
          title: "Michael Doug..."
        },
        {
          id: 5,
          img: require("./asserts/Group4.png"),
          title: "Royryan Merc..."
        },
        {
          id: 6,
          img: require("./asserts/Group5.png"),
          title: "Neil Gaiman"
        },
        {
          id: 7,
          img: require("./asserts/Group6.png"),
          title: "Mark mcallister"
        },
        {
          id: 8,
          img: require("./asserts/Group7.png"),
          title: "Michael Doug..."
        }
      ],
      data2: [
        {
          id: 1,
          icon: <Icon name="fire" />,
          title: "Trending"
        },
        {
          id: 2,
          icon: <Icons name="book-outline" />,
          title: "5-Minutes Read"
        },
        {
          id: 3,
          icon: <Icon name="fire" />,
          title: "Trending"
        },
        {
          id: 4,
          icon: <Icons name="book-outline" />,
          title: "5-Minutes Read"
        }
      ]
    };
  }

  render() {
    const { data, data2 } = this.state;
    return (
      <View style={Styles.container}>
        <View>
          <View style={Styles.Head}>
            <View>
              <Text style={Styles.HeadText}>Good Afternoon</Text>
              <Image source={require("./asserts/Vector1.png")} />
            </View>
            <Image source={require("./asserts/singnPassimg.png")} />
          </View>
          <FlatList
            data={[...data, ...data]}
            renderItem={({ item }) => {
              return <View key={item.id} style={Styles.FScroll}>
                <Image source={item.img} />
                <Text>{item.title}</Text>
              </View>
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <Text>Data</Text>
          <FlatList
            data={data2}
            renderItem={({ item }) => {
              return <View style={Styles.trending}>
                {item.icon}
                <Text style={Styles.trandTxt}>{item.title}</Text>
              </View>
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <Image style={Styles.banner} source={require("./asserts/Frame13.png")} />
      </View>
    );
  }
}

export default Home;
const Styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    height: "100%"
  },
  Head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8
  },
  HeadText: {
    fontFamily: "Gotham",
    fontSize: 24,
    fontWeight: "bold"
  },
  FScroll: {
    alignItems: "center",
  },
  trending: {
    flexDirection: "row",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#fff",
    borderWidth: 1,
    margin: 2,
    borderRadius: 40,
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: "Gotham",
    fontWeight: "bold"

  },
  trandTxt: {
    fontSize: 15,
  },
  banner: {
    width: "97%",
    margin: 5,
  }
})