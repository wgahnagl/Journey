import React from 'react';
import {
    ScrollView,
    Text,
    View,

} from 'react-native';
import { AuthSession } from 'expo';

import * as Styles from "../constants/Styles";
import {StyledButton} from "../components/StyledButton";

const googleButtonText = "Sign In With Github";
const whateverButtonTExt = "Sign In With x";
const styles = Styles.globalStyles();

const APP_ID = 'the app id';

export default class SignInScreen extends React.Component {

    state = {
        result: null,
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <View style={styles.SplashContainer}>
                        <StyledButton onPress={this._handlePressAsync} title={googleButtonText}/>
                        {this.state.result ? (
                            <Text>{JSON.stringify(this.state.result)}</Text>
                        ): null }
                        <StyledButton onPress={()=> this.props.navigation.navigate('SignIn')} title={whateverButtonTExt}/>
                        <Text>
                        </Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
    _handlePressAsync = async () => {
        let redirectUrl = AuthSession.getRedirectUrl();
        let result = await AuthSession.startAsync({
            authUrl:
                `https://www.facebook.com/v2.8/dialog/oauth?response_type=token` +
                `` +
                `&redirect_uri=${encodeURIComponent(redirectUrl)}`,
        });
        this.setState({ result });
    };
}

