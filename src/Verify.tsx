import React, { Component } from 'react';
import { Text, View, Button, Image, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';


interface IProps {
  navigation?: {
    navigate: React.FC,
    goBack: React.FC
  }
}
interface Istate {
  eyeCheck: boolean;
  isChecked: boolean;
  data: {
    fName: string,
    lName: string,
    email: string,
    password: string,
    cPassword: string,
    number: string
  }[],
  fName: string,
  lName: string,
  email: string,
  password: string,
  cPassword: string,
  number: string
}
export class Verify extends Component<IProps, Istate> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      eyeCheck: false,
      isChecked: false,
      data: [],
      fName: "",
      lName: "",
      email: "",
      password: "",
      cPassword: "",
      number: ""
    }
  }

  async componentDidMount() {


  }
  OnChange = (e: string) => {
    this.setState({ lName: e })
  }
  render() {
    return (
      <ImageBackground source={require("./asserts/backGround.png")}>
        <View >
          <TouchableOpacity onPress={() => this.props.navigation?.navigate("SignIn")}>
            <View style={styles.goBack}>
              <Icon name="angle-left" color="#000" />
              <Image source={require("./asserts/leftArrow.png")} />
              <Text style={{ color: "#fff" }}>Back to Log in</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.containerStyle}>
          <View style={styles.headingCon}>
            <Text style={styles.heading}>Verify Code</Text>
            <View style={styles.innerContainer}>
              <View>
                <Text style={styles.txt}>
                  An authentication code has been sent to your email.
                </Text>
                <TextInput
                  placeholder='Enter Code'
                  secureTextEntry={true}
                  style={styles.input}
                  placeholderTextColor={"grey"}
                />
              </View>
              <TouchableOpacity style={styles.Createparent}
                onPress={() => this.props.navigation?.navigate("reset")}>
                <Text style={styles.createAc}>Verify</Text>
              </TouchableOpacity>
              <View style={styles.btmtxt}>
                <Text>Don’t receive a code?{" "}</Text>
                <TouchableOpacity style={styles.resend} >
                  <Text style={styles.resetTxt}>Resend</Text>
                  <Image source={require("./asserts/reset.png")} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    )
  }
}
export default Verify


const styles = StyleSheet.create({
  createAc: {
    color: "#111"
  },
  goBack: {
    flexDirection: "row"
  },
  innerContainer: {
    backgroundColor: "rgba(49, 51, 51,0.4)",
    marginTop: 20,
    marginBottom: 40,
    padding: 20
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
  resend: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  github: {
    color: "#000"
  },
  Forgot: {
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
    fontWeight: "bold"

  },
  heading: {
    color: "#fff",
    fontFamily: "Manrope",
    fontSize: 25,
    fontWeight: "bold"

  },
  resetTxt: {
    color: "#fff",
    paddingLeft: 5,
    fontFamily: "Gotham",
    marginRight: 2
  },
  txt: {
    color: "#fff",
    paddingLeft: 5,
    fontFamily: "Gotham",
    marginBottom: 20
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
    color: "#FB344F",
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