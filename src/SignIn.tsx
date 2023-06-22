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
    name: string,
    email: string,
    password: string,
  }[],
  email: string,
}
export class SignIn extends Component<IProps, Istate> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      eyeCheck: false,
      isChecked: false,
      data: [],
      email: "",
    }
  }
  SubmitHandler = async () => {
    const emailAsc = await AsyncStorage.getItem("email")
    let { email, data } = this.state
    let item: { name: string, email: string, password: string };
    for (let i = 0; i < data.length; i++) {
      if (data[i].email == email) {
        item = data[i];
        await AsyncStorage.setItem("name", JSON.stringify(item.name))
        await AsyncStorage.setItem("email", JSON.stringify(item.email))
        await AsyncStorage.setItem("password", JSON.stringify(item.password))
        this.props.navigation?.navigate("SignInPass")
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
    const { email } = this.state
    return (
      <ImageBackground source={require("./asserts/backGround.png")}>
        <View style={styles.containerStyle}>
          <View style={styles.headingCon}>
            <Text style={styles.heading}> Log in</Text>
            <View style={styles.innerContainer}>
              <View>
                <TextInput
                  placeholder='Email'
                  keyboardType='email-address'
                  secureTextEntry={true}
                  style={styles.input}
                  onChangeText={(e) => this.setState({ email: e })}
                  placeholderTextColor={"grey"}
                />
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
              <View style={styles.orWithParent}>
                <View style={styles.orWithline}></View>
                <Text style={styles.orWith}>Or</Text>
                <View style={styles.orWithline}></View>
              </View>
              <View>
                <TouchableOpacity style={styles.Createparent}
                  onPress={() => this.props.navigation?.navigate("SignInPass")}
                >
                  <Icon name="facebook" style={styles.facebook} size={20} />
                  <Text style={styles.createAc}>Login with Facebook</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.Createparent}
                  onPress={() => this.props.navigation?.navigate("SignInPass")}
                >
                  <Icon name="google" style={styles.apple} size={20} />
                  <Text style={styles.createAc}>Login with Google</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.Createparent}
                  onPress={() => this.props.navigation?.navigate("SignInPass")}
                >
                  <Icon name="apple" style={styles.apple} size={20} />
                  <Text style={styles.createAc}>Login with Apple</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btmtxt}>
                <Text>Don't have Account?{" "}</Text>
                <TouchableOpacity onPress={() => this.props.navigation?.navigate("SignUp")} >
                  <Text style={styles.txt}>SignUp</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    )
  }
}
export default SignIn

const styles = StyleSheet.create({
  createAc: {
    color: "#111",
    fontWeight: "600"
  },
  innerContainer: {
    backgroundColor: "rgba(49, 51, 51,0.4)",
    marginTop: 20,
    marginBottom: 40,
    padding: 10,
    borderRadius: 5,
    paddingTop: 15
  },
  Createparent: {
    backgroundColor: "#CDE7BE",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 12,
    paddingTop: 12,
    borderRadius: 5,
    fontFamily: "Gotham",
    marginBottom: 15,
  },


  facebook: {
    color: "blue",
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 5,
    borderRadius: 100,

  },
  apple: {
    color: "black"
  },

  btmtxt: {
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 20,
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
    marginTop: 65,
    height: "100%"
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
    color: "#CDE7BE",
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
    color: "#aaa"
  },
  orWithParent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 15
  },
  orWithline: {
    height: 1,
    backgroundColor: "#aaa",
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



})

