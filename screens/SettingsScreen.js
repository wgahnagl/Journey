import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {View, Text, ScrollView, TextInput} from 'react-native';
import * as Styles from "../constants/Styles";

const styles = Styles.globalStyles();


export default class SettingsScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text: 'Name'};
    }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Text style={{paddingLeft: 10, paddingRight: 10}}>Settings</Text>
            <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10, paddingRight: 10}}
                       onChangeText={(text) => this.setState({text})}
                       value={this.state.text}
                        />
            <Text style={{paddingLeft: 10, paddingRight: 10, paddingTop: 10, paddingBottom: 10, borderColor: 'gray', borderWidth: 1}}>
                GitHub: </Text>
            <Text style={{textAlign: 'center', color: 'blue', paddingTop: 20}} onPress={() => {}}>Sign Out</Text>
        </ScrollView>
      </View>
    )
  }

}
