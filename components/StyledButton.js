import React from 'react';
import AwesomeButton from "react-native-really-awesome-button/src/themes/cartman"
import { View, Text } from 'react-native';

let margin = 5;

export class StyledButton extends React.Component {
    render() {
        if(this.props.margin){
            margin = this.props.margin;
        }
        return(
        <View style={{margin: margin, width:"80%"}}>
            <AwesomeButton onPress={this.props.onPress} stretch={true}>
                <Text style={{color: 'white', fontSize:20, fontFamily:"monospace"}}> {this.props.title} </Text>
            </AwesomeButton>
        </View>
        )
    }
}