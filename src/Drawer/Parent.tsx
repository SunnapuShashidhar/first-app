import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'


interface IProps {

}
interface IState {

}

export class Parent extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {

    }
  }
  async componentDidMount() {
    const data = await fetch("https://dummyjson.com/users")
    this.setState({ data: data });
  }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

export default Parent
