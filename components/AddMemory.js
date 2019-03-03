import React from "react";
import { View } from 'react-native';
import CircleButton from 'react-native-circle-button';

export default class AddMemory extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <CircleButton size={45} />
            </View>
        );
    }
}