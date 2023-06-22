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
    Name?: string,
    email?: string,
    password?: string,
  }[],
  Name: string,
  email: string,
  password: string,

}
export class SignUp extends Component<IProps, Istate> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      eyeCheck: false,
      isChecked: false,
      data: [],
      Name: "",
      email: "",
      password: "",
    }
  }

  async componentDidMount() {
    const data = await AsyncStorage.getItem("data")
    
    this.setState({ data: JSON.parse(String(data)) })
  }

  SubmitHandler = async () => {
    let { Name, email, password, data } = this.state;
    let newData = { name: Name, email: email, password: password }
    data = [...data, newData]
    await AsyncStorage.setItem("data", JSON.stringify(data))
      .then(() => this.props.navigation?.navigate("SignIn"))
      .catch(() => Alert.alert("some thing went Wrong"))
  }

  render() {
    const { Name, email, password } = this.state
    return (
      <ImageBackground source={require("./asserts/backGround.png")}>
        <View style={styles.containerStyle}>
          <View style={styles.headingCon}>
            <Text style={styles.heading}> Sign Up </Text>
            <View style={styles.innerContainer}>
              <Text style={styles.txt}>Looks like you don’t have an account.
                Let’s create a new account for you.</Text>
              <View>
                <TextInput
                  placeholder='Name'
                  style={styles.input}
                  placeholderTextColor={"grey"}
                  keyboardType='default'
                  onChangeText={(e) => this.setState({ Name: e.trim() })}
                />
                <TextInput
                  placeholder='Email'
                  keyboardType='email-address'
                  secureTextEntry={true}
                  style={styles.input}
                  placeholderTextColor={"grey"}
                  onChangeText={(e) => this.setState({ email: e.trim() })}
                />
                <View style={styles.pswrdParent}>
                  <TextInput
                    placeholder='password'
                    style={styles.input}
                    secureTextEntry={!this.state.eyeCheck}
                    placeholderTextColor={"grey"}
                    onChangeText={(e) => this.setState({ password: e.trim() })}
                  />
                  <TouchableOpacity
                    style={styles.eye}
                    onPress={() => { this.setState({ eyeCheck: !this.state.eyeCheck }) }}
                  >
                    {!this.state.eyeCheck ?
                      <Icon name="eye-slash" color={"#000"} size={27} /> :
                      <Icon name="eye" color={"#000"} size={27} />
                    }
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.txt}>
                By selecting Create Account below, I agree to Terms of Service & Privacy Policy
              </Text>
              <TouchableOpacity
                style={(Name == "" || email == "" || password == "") ?
                  styles.Createparent2 : styles.Createparent}
                disabled={Name == "" || email == "" || password == ""}
                onPress={this.SubmitHandler}
              >
                <Text style={styles.createAc}>Create Account</Text>
              </TouchableOpacity>
              <View style={styles.btmtxt}>
                <Text>Already have Account?{" "}</Text>
                <TouchableOpacity onPress={() => this.props.navigation?.navigate("SignIn")} >
                  <Text style={styles.Logintxt}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

        </View>
      </ImageBackground>
    )
  }
}
export default SignUp

const styles = StyleSheet.create({
  createAc: {
    color: "#111"
  },
  innerContainer: {
    backgroundColor: "rgba(49, 51, 51,0.4)",
    marginTop: 20,
    marginBottom: 40,
    padding: 10,
    paddingBottom: 20,
    paddingTop: 20
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
  Createparent2: {
    backgroundColor: "#aaa",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 12,
    paddingTop: 12,
    borderRadius: 5,
    fontFamily: "Gotham"
  },


  btmtxt: {
    marginTop: 30,
    justifyContent: "center",
    flexDirection: "row",
    color: "#EAF4F4"
  },

  containerStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    height: "100%",
    marginTop: 40
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
    color: "#EAF4F4",
    paddingLeft: 5,
    fontFamily: "Gotham",

  },
  Logintxt: {
    color: "#CDD1E0",
    paddingLeft: 5,
    fontFamily: "Gotham",
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    color: "#111",
    backgroundColor: "#fff",
    marginBottom: 5,
    paddingLeft: 15,


  },

  inpBtm: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",

  },
  pswrdParent: {
    position: "relative",
  },
  eye: {
    position: "absolute",
    right: 10,
    top: 13
  }
})

