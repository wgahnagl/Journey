import React from 'react';
import {
    Button,
    Image,
    ImageBackground,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import * as Styles from "../constants/Styles";
import {StyledButton} from "../components/StyledButton";

const googleButtonText = "Sign In With Google";
const whateverButtonTExt = "Sign In With x";
const styles = Styles.globalStyles();

export default class SignInScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };


    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/relaxing2.jpg')} style={styles.backgroundImageContainer}>
                    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                        <View style={styles.SplashContainer}>
                            <StyledButton onPress={()=> this.props.navigation.navigate('SignIn')} title={googleButtonText}/>
                            <StyledButton onPress={()=> this.props.navigation.navigate('SignIn')} title={whateverButtonTExt}/>
                            <Text style={{fontFamily: 'lora', fontSize: 50, textAlign: 'center', color: 'white'}}>
                                I'm only dying inside a little bit.
                            </Text>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        );
    }

}

