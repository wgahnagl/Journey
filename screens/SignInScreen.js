import React from 'react';
import {
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

export default class SignInScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <View style={styles.SplashContainer}>
                        <Text>
                             fjdklafl;djal;jf l;akjfklsdl; fjl;dkj ajd l;kjal;dkjal;dj f;lak
                         </Text>
                    </View>
                </ScrollView>
            </View>
        );
    }


}

const styles = Styles.globalStyles();
