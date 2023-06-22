import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import WebView from 'react-native-webview'
export class Setting extends Component {
  render() {
    return (
      <WebView
        source={{ uri: "https://lottiefiles.com/73418-person-at-desk" }}
        style={Styles.ifram}
      />
    )
  }
}

export default Setting
const Styles = StyleSheet.create({
  container: {
    backgroundColor: "#fcba03",
    height: "100%"
  },
  ifram: {
    width: "100%",
    height: "100%"
  }
})


// <iframe src="https://embed.lottiefiles.com/animation/73418"></iframe>