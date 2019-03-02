import React from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import * as Styles from "../constants/Styles";
import {getNativeSourceAndFullInitialStatusForLoadAsync} from "expo/build/av/AV";


export default class SplashScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
    ButtonText = "Sign In";
    render() {
        return(
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <View style={styles.SplashContainer}>
                        <Text style={{textAlign: 'center', fontSize: 25, fontFamily: 'BodoniFLF-Roman'}}>
                            {'\n'}An app about slowing down and taking in the beauty around you
                        </Text>
                        <View style={styles.buttonContainer}>
                            <Button onPress={()=> this.props.navigation.navigate('SignIn')} title={this.ButtonText}/>
                        </View>
                        <Text style={{textAlign: 'center', fontSize: 200}}>
                            ☺
                        </Text>
                        <Text style={{textAlign: 'center'}}>
                            Join now!
                        </Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}



const styles = Styles.globalStyles();