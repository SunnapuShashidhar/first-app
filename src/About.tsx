import React, { Component } from 'react'
import { Text, View, StyleSheet, SectionList } from 'react-native'

export class About extends Component {
  state = {
    data: [
      {
        title: 'Main dishes',
        data: ['Pizza', 'Burger', 'Risotto'],
      },
      {
        title: 'Sides',
        data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
      },
      {
        title: 'Drinks',
        data: ['Water', 'Coke', 'Beer'],
      },
      {
        title: 'Desserts',
        data: ['Cheese Cake', 'Ice Cream'],
      },
    ]
  }
  render() {
    return (
      <View style={Styles.container}>
        <Text style={{ color: "#000" }}> About </Text>
        <SectionList
          sections={this.state.data}
          renderItem={({ item }) => {
            return <View><Text>{item}</Text></View>
          }}
          renderSectionHeader={({ section: { title } }) => {//it should be string 
            return <Text style={Styles.title}>{title}</Text>
          }}
        />
      </View>
    )
  }
}

export default About
const Styles = StyleSheet.create({
  container: {
    backgroundColor: "#fcba39",
    height: "100%"
  },
  title: {
    fontSize: 20,
    color: "#000"
  }
})