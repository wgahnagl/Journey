import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SplashScreen from "../screens/SplashScreen";
import SignInScreen from "../screens/SignInScreen";
import AddMemory from "../screens/AddMemory";

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Splash: SplashScreen,
  SignIn: SignInScreen,
  AddMemory: AddMemory,
  Main: MainTabNavigator,
}));