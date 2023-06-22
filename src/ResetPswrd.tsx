import React, { Component } from 'react';
import { Text, View, Button, Image, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from 'react-native-check-box'


interface IProps {
  navigation?: {
    navigate: React.FC
  }
}
interface Istate {
  eyeCheck: boolean;
  eyeCheckRe: boolean;
  isChecked: boolean;
  data: {
    name: string,
    email: string,
    password: string,
  }[],
  name: string,
  email: string,
  password: string,
  cpassword: string
}
export class Reset extends Component<IProps, Istate> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      eyeCheck: false,
      isChecked: false,
      data: [],
      name: "",
      email: "",
      password: "",
      eyeCheckRe: false,
      cpassword: ""
    }
  }

  SubmitHandler = async () => {
    const emailAsc = await AsyncStorage.getItem("email")
    let { email, data } = this.state
    let item: { name: string, email: string, password: string };
    for (let i = 0; i < data.length; i++) {
      if (data[i].email == email) {
        item = data[i];
        await AsyncStorage.setItem("password", JSON.stringify(item.password))
        this.props.navigation?.navigate("SignIn")
        return;
      }
    }
    Alert.alert("Enter Valid Email..!")
  }
  async componentDidMount() {
    let data = await AsyncStorage.getItem("data");
    this.setState({ data: JSON.parse(String(data)) })
  }
  render() {
    return (
      <ImageBackground source={require("./asserts/backGround.png")}>
        <View style={styles.containerStyle}>
          <View style={styles.headingCon}>
            <Text style={styles.heading}>Set Password</Text>
            <View style={styles.innerContainer}>
              <View >
                <View style={styles.logo}>
                  <Image style={styles.brandImg} source={require("./asserts/correct.png")} />
                  <Text style={styles.text}>Code Verified</Text>
                </View>
                <View style={styles.pswrdParent}>
                  <TextInput
                    placeholder='Enter New Password'
                    style={styles.input}
                    secureTextEntry={!this.state.eyeCheck}
                    placeholderTextColor={"grey"}
                  />
                  <TouchableOpacity
                    style={styles.eye}
                    onPress={() => { this.setState({ eyeCheck: !this.state.eyeCheck }) }}
                  >
                    {!this.state.eyeCheck ?
                      <Image source={require("./asserts/eyecross.png")} /> :
                      <Image source={require("./asserts/EyeFill.png")} />}
                  </TouchableOpacity>
                </View>
                <View style={styles.pswrdParent}>
                  <TextInput
                    placeholder='Re-Enter New Password'
                    style={styles.input}
                    secureTextEntry={!this.state.eyeCheck}
                    placeholderTextColor={"grey"}
                  />
                  <TouchableOpacity
                    style={styles.eye}
                    onPress={() => { this.setState({ eyeCheckRe: !this.state.eyeCheckRe }) }}
                  >
                    {!this.state.eyeCheckRe ?
                      <Image source={require("./asserts/eyecross.png")} /> :
                      <Image source={require("./asserts/EyeFill.png")} />}
                  </TouchableOpacity>
                </View>
              </View>
              <Text>
                At-least 8 characters
              </Text>
              <TouchableOpacity style={styles.Createparent}
                onPress={() => this.props.navigation?.navigate("SignIn")}
              >
                <Text style={styles.createAc}>Set Password</Text>
              </TouchableOpacity>

            </View>
          </View>

        </View>
      </ImageBackground>
    )
  }
}
export default Reset

const styles = StyleSheet.create({
  createAc: {
    color: "#111"
  },
  brandImg: {
    height: 50,
    width: 50
  },
  text: {
    fontStyle: "italic",
    fontFamily: "Gotham",
    fontSize: 16,
    color: "#fff"
  },
  imgParent: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  logo: {
    alignItems: "center",
    marginTop: 4,
    marginBottom: 5
  },
  innerContainer: {
    backgroundColor: "rgba(49, 51, 51,0.4)",
    marginTop: 20,
    marginBottom: 40,
    padding: 20,
    borderRadius: 5
  },
  Createparent: {
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 12,
    paddingTop: 12,
    borderRadius: 5,
    fontFamily: "Gotham"
  },
  checkParent: {
    flexDirection: "row",
  },
  github: {
    color: "#000"
  },
  signUp: {
    color: "#1c059e"
  },
  btmtxt: {
    marginTop: 30,
    justifyContent: "center",
    flexDirection: "row"

  },
  gitbtn: {
    borderWidth: 1,
    borderColor: "#CDD1E0",
    flexDirection: "row",
    padding: 4,
    paddingRight: 45,
    paddingLeft: 45,
    borderRadius: 5,

  },
  containerStyle: {

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,

    height: "100%"
  },
  btnCon: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  containerStyle2: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "90%",

    alignItems: "center",
  },
  headingCon: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-start",
  },
  heading: {
    color: "#fff",
    fontFamily: "Manrope",
    fontWeight: "600",
    fontSize: 25
  },
  txt: {
    color: "#fff",
    paddingLeft: 5,
    fontFamily: "Gotham",
    fontWeight: "bold"

  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    color: "#111",
    backgroundColor: "#fff",
    marginBottom: 5,
    paddingLeft: 15,


  },
  orWith: {
    textAlign: "center",
    color: "#000"
  },
  orWithParent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",

  },
  orWithline: {
    height: 1,
    backgroundColor: "#000",
    width: 100
  },
  inpBtm: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",

  },
  forgot: {
    color: "#aaa",
    fontFamily: "Manrope",

  },
  rember: {
    color: "#000"
  },
  pswrdParent: {
    position: "relative",
  },
  eye: {
    position: "absolute",
    right: 5,
    top: 15
  }
})

// <Button title="Login" onPress={() => this.props.navigation?.navigate("bottom")} />
{/* <Text style={styles.forgot}>Forgot Passwords</Text>
          </View>
          <Button title="Login" onPress={() => this.props.navigation?.navigate("bottom")} />
          <View style={styles.orWithParent}>
            <View style={styles.orWithline}></View>
            <Text style={styles.orWith}>Or</Text>
            <View style={styles.orWithline}></View>
          </View> */}