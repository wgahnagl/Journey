import React from 'react';
import {View, Text, Button, StyleSheet, ScrollView, ImageBackground} from 'react-native';
import * as Styles from "../constants/Styles";
import {getNativeSourceAndFullInitialStatusForLoadAsync} from "expo/build/av/AV";
import {StyledButton} from "../components/StyledButton";


const ButtonText = "Sign In";
const styles = Styles.globalStyles();
export default class SplashScreen extends React.Component {

    static navigationOptions = {
        header: null,
    };

    render() {
        return(
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/relaxing.jpg')} style={styles.backgroundImageContainer}>
                    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                        <View style={styles.SplashContainer}>
                            <Text style={{textAlign: 'center', fontSize: 40, fontFamily: 'inter-thin'}}>
                                {'\n'}An app about slowing down and taking in the beauty around you
                            </Text>
                            {/*<View style={styles.buttonContainer}>*/}
                                <StyledButton onPress={()=> this.props.navigation.navigate('SignIn')} title={ButtonText}/>
                            {/*</View>*/}
                            <Text style={{textAlign: 'center', fontSize: 100}}>
                                🌻
                            </Text>
                        </View>
                    </ScrollView>
            </ImageBackground>
            </View>
        )
    }
}

