import React from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import * as Styles from "../constants/Styles";
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
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <View style={styles.SplashContainer}>
                        <StyledButton onPress={()=> this.props.navigation.navigate('SignIn')} title={ButtonText}
                                styles = {styles.button}/>
                            <Text>

                            </Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

