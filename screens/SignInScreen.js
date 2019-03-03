import React from 'react';
import {
    ScrollView,
    Text,
    View,
    AsyncStorage
} from 'react-native';
import { AuthSession } from 'expo';
import firebase from 'firebase';
import * as Styles from "../constants/Styles";
import {StyledButton} from "../components/StyledButton";
import getGithubTokenAsync from "../utils/GithubAuth";
import * as Secrets from "../conf";

const googleButtonText = "Sign In With Google";
const whateverButtonTExt = "Sign In With x";
const styles = Styles.globalStyles();

const GithubStorageKey = '@Expo:GithubToken';

const firebaseConfig = {
    apiKey: Secrets.FIREBASE_API_KEY,
    projectId: Secrets.FIREBASE_PROJECT_ID,
};

function initializeFirebase() {
    // Prevent reinitializing the app in snack.
    if (!firebase.apps.length) {
        return firebase.initializeApp(firebaseConfig);
    }
}


async function signInAsync(token) {
    try {
        if (!token) {
            const token = await getGithubTokenAsync();
            if (token) {
                await AsyncStorage.setItem(GithubStorageKey, token);
                return signInAsync(token);
            } else {
                return;
            }
        }
        const credential = firebase.auth.GithubAuthProvider.credential(token);
        return firebase.auth().signInAndRetrieveDataWithCredential(credential);
    } catch ({ message }) {
        alert(message);
    }
}

async function signOutAsync() {
    try {
        await AsyncStorage.removeItem(GithubStorageKey);
        await firebase.auth().signOut();
    } catch ({ message }) {
        alert('Error: ' + message);
    }
}

async function attemptToRestoreAuthAsync() {
    let token = await AsyncStorage.getItem(GithubStorageKey);
    if (token) {
        console.log('Sign in with token', token);
        return signInAsync(token);
    }
}

export default class SignInScreen extends React.Component {
    state = { isSignedIn: false };

    componentDidMount() {
        this.setupFirebaseAsync();
    }

    setupFirebaseAsync = async () => {
        initializeFirebase();

        firebase.auth().onAuthStateChanged(async auth => {
            const isSignedIn = !!auth;
            this.setState({ isSignedIn });
            if (!isSignedIn) {
                attemptToRestoreAuthAsync();
            }
        });
    };


    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <View style={styles.SplashContainer}>
                        <StyledButton onPress={() => signInAsync()} title={googleButtonText}/>
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
                `https://github.com/login/oauth/authorize` +
                `?client_id=` + github.CLIENT_ID +
                `&client_secret=` + github.CLIENT_SECRET +
                `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
                `&scope=${encodeURIComponent(githubFields.join(' '))}`,
        });
        this.setState({ result });
    };
}

