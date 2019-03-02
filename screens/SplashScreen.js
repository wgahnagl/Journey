import React from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import * as Styles from "../constants/Styles";


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
                        <Button onPress={()=> this.props.navigation.navigate('SignIn')} title={this.ButtonText}/>
                            <Text>

                            </Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}



const styles = Styles.globalStyles();