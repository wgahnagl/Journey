import React from 'react';
import {
    Button,
    Image,
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
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <View style={styles.SplashContainer}>
                        <StyledButton onPress={()=> this.props.navigation.navigate('SignIn')} title={googleButtonText}/>
                        <StyledButton onPress={()=> this.props.navigation.navigate('SignIn')} title={whateverButtonTExt}/>
                        <Text>
                             This is the sign in pages!
                        </Text>
                    </View>
                </ScrollView>
            </View>
        );
    }

}

