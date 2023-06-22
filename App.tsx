import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './src/SignIn';
import SignUp from './src/SignUp';
import Bottom from './src/Bottom';
import Forget from './src/Forget';
import SignInPass from './src/SignPass';
import Verify from './src/Verify';
import Reset from './src/ResetPswrd';
import CustBottom from './src/CustBottom';
import CurvedTabBar from './src/CurvedTabBar';
import DrawerNavigator from './src/Drawer/Drawer';

const Stack = createNativeStackNavigator();

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} >
          <Stack.Screen name="drawer" component={DrawerNavigator} />
          <Stack.Screen name="bottom" component={CurvedTabBar} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
          <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
          <Stack.Screen name="SignInPass" component={SignInPass} options={{ headerShown: false }} />
          <Stack.Screen name="forgot" component={Forget} options={{ headerShown: false }} />
          <Stack.Screen name="verify" component={Verify} options={{ headerShown: false }} />
          <Stack.Screen name="reset" component={Reset} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
