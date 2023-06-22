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
  isChecked: boolean;
  data: {
    name: string,
    email: string,
    password: string,

  }[],
  Name: string,
  email: string,
  password: string,
}
export class Forgot extends Component<IProps, Istate> {
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


  SubmitHandler = async () => {
    let { email, data } = this.state;
    let item: { name: string, email: string, password: string };
    for (let i = 0; i < data.length; i++) {
      if (String(data[i].email) == email) {
        item = data[i];
        await AsyncStorage.setItem("name", JSON.stringify(item.name))
        await AsyncStorage.setItem("email", JSON.stringify(item.email))
        await AsyncStorage.setItem("password", JSON.stringify(item.password))
        this.props.navigation?.navigate("verify")
        return;
      }
    }
    Alert.alert("Enter Valid email...!")
  }
  async componentDidMount() {
    const data = await AsyncStorage.getItem("data")
    this.setState({ data: JSON.parse(String(data)) })
  }
  render() {
    return (
      <ImageBackground source={require("./asserts/backGround.png")}>
        <View style={styles.containerStyle}>
          <View style={styles.headingCon}>
            <Text style={styles.heading}> Recover Password</Text>
            <View style={styles.innerContainer}>
              <View>
                <Text style={styles.txt}>
                  Forgot your password? Don’t worry, enter your email to reset your current password.
                </Text>
                <TextInput
                  placeholder='Email'
                  keyboardType='email-address'
                  secureTextEntry={true}
                  onChangeText={(e) => this.setState({ email: e })}
                  style={styles.input}
                  placeholderTextColor={"grey"}
                />
              </View>
              <TouchableOpacity style={styles.Createparent}
                onPress={this.SubmitHandler}>
                <Text style={styles.createAc}>Submit</Text>
              </TouchableOpacity>
              <View style={styles.btmtxt}>
                <Text>Don't have Account?{" "}</Text>
                <TouchableOpacity onPress={() => this.props.navigation?.navigate("SignUp")} >
                  <Text style={styles.txt}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

        </View>
      </ImageBackground>
    )
  }
}
export default Forgot

const styles = StyleSheet.create({
  createAc: {
    color: "#111"
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

