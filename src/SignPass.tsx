import React, { Component } from 'react';
import { Text, View, Button, Image, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome5';


interface IProps {
  navigation?: {
    navigate: React.FC
  }
}
interface Istate {
  eyeCheck: boolean;
  isChecked: boolean;
  data: {
    password: string,
  }[],
  asycPass: string,
  password: string,
}
export class SignInPass extends Component<IProps, Istate> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      eyeCheck: false,
      isChecked: false,
      data: [],
      password: "",
      asycPass: "",
    }
  }

  SubmitHandler = async () => {
    const passAsc = await AsyncStorage.getItem("password")
    let { password, asycPass } = this.state
    if (asycPass.toString() == password.toString()) {
      this.props.navigation?.navigate("drawer")
    }
    else {
      Alert.alert("Enter Valid Password..!")
    }
  }
  async componentDidMount() {
    const password = await AsyncStorage.getItem("password")
    this.setState({ asycPass: String(password) });
  }
  render() {
    return (
      <ImageBackground source={require("./asserts/backGround.png")}>
        <View style={styles.containerStyle}>
          <View style={styles.headingCon}>
            <Text style={styles.heading}> Log in</Text>
            <View style={styles.innerContainer}>
              <View >
                <View style={styles.imgParent}>
                  <Image source={require("./asserts/singnPassimg.png")} />
                  <View>
                    <Text>John Joe</Text>
                    <Text>Jhon.joe@gmail.com</Text>
                  </View>
                  <Image source={require("./asserts/correct.png")} />
                </View>
                <View style={styles.pswrdParent}>
                  <TextInput
                    placeholder='password'
                    style={styles.input}
                    secureTextEntry={!this.state.eyeCheck}
                    placeholderTextColor={"grey"}
                    onChangeText={(e) => this.setState({ password: JSON.stringify(e) })}
                  />
                  <TouchableOpacity
                    style={styles.eye}
                    onPress={() => { this.setState({ eyeCheck: !this.state.eyeCheck }) }}
                  >
                    {!this.state.eyeCheck ?
                      <Icon name="eye-slash" color={"#000"} size={27} /> :
                      <Icon name="eye" color={"#000"} size={27} />}
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity style={styles.Createparent}
                onPress={this.SubmitHandler}
              >
                <Text style={styles.createAc}>Continue</Text>
              </TouchableOpacity>
              <View style={styles.btmtxt}>
                <TouchableOpacity onPress={() => this.props.navigation?.navigate("forgot")} >
                  <Text style={styles.forgot}>Forgot Passwords</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    )
  }
}
export default SignInPass

const styles = StyleSheet.create({
  createAc: {
    color: "#111"
  },
  imgParent: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  innerContainer: {
    backgroundColor: "rgba(49, 51, 51,0.4)",
    marginTop: 20,
    marginBottom: 40,
    padding: 20,
    borderRadius: 5
  },
  Createparent: {
    backgroundColor: "#CDE7BE",
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
    fontWeight: "bold",
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
    color: "#CDE7BE",
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
    right: 10,
    top: 12
  }
})

