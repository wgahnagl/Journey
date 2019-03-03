import React from 'react';
import {
    ImageBackground,
    ActivityIndicator,
    ScrollView,
    Text,
    View,
    AsyncStorage
} from 'react-native';
import firebase from 'firebase';
import * as Styles from "../constants/Styles";
import {StyledButton} from "../components/StyledButton";
import getGithubTokenAsync from "../utils/GithubAuth";
import * as Secrets from "../conf";
import {LoadingIcon} from "../components/LoadingIcon";

const googleButtonText = "Sign In With Github";
const styles = Styles.globalStyles();

const GithubStorageKey = '@Expo:GithubToken';


const firebaseConfig = {
    apiKey: Secrets.FIREBASE_API_KEY,
    projectId: Secrets.FIREBASE_PROJECT_ID,
};

let hasTriedSignIn = false;


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
        hasTriedSignIn = true;

        firebase.auth().onAuthStateChanged(async auth => {
            const isSignedIn = !!auth;
            this.setState({ isSignedIn });
            if (!isSignedIn) {
                attemptToRestoreAuthAsync();
            }else{
                this.props.navigation.navigate('Main')
            }
        });
    };


    render() {
        if (!hasTriedSignIn) {
            return (
                <View style={styles.centerText}>
                    <LoadingIcon/>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <ImageBackground source={require('../assets/images/relaxing2.jpg')}
                                     style={styles.backgroundImageContainer}>
                        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                            <View style={styles.SplashContainer}>
                                <StyledButton onPress={() => signInAsync()} title={googleButtonText}/>
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
}

