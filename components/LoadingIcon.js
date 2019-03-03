import React from "react";
import { ActivityIndicator } from 'react-native';

export class LoadingIcon extends React.Component {
    render() {
       return  <ActivityIndicator size="large" color="orange"/>
    }
}