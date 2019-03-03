import React from 'react';
import { AppLoading, Asset, Font, Icon } from 'expo';
import {Platform, StyleSheet} from "react-native";
import { View }  from 'react-native';

import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {

  state = {
    isLoadingComplete: false,
    //fontLoaded: false
  };

  /*async componentDidMount() {
    await Font.loadAsync({
      'alice': require('./assets/fonts/Alice-Regular.ttf')
    });
    this.setState({fontLoaded: true});
  }; */

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'playfair': require('./assets/fonts/PlayfairDisplay-Regular.ttf'),
        'alice': require('./assets/fonts/Alice-Regular.ttf'),
        'lora': require('./assets/fonts/Lora-Regular.ttf'),
        'new-athena': require('./assets/fonts/new_athena_unicode.ttf'),
        'inter-thin': require('./assets/fonts/Inter-Thin-BETA.ttf')
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
