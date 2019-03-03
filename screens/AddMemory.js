import React from 'react';
import {
    TextInput,
    View,
    Text
} from 'react-native';
import * as Styles from "../constants/Styles";
import * as LocationsFile from "../utils/LocationsFile"
import {StyledButton} from "../components/StyledButton";
import Camera from "./Camera";
const styles = Styles.globalStyles();


class AddMemory extends React.Component {


render() {
    const { navigate } = this.props.navigation;
    const type = this.props.navigation.getParam('type', 'picture');
    const location = this.props.navigation.getParam('location', null);

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Camera/>
            </View>
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: "10%"}}
                    placeholder="Title"
                    onChangeText={(title) => this.setState({title})}
                />
                <TextInput
                    style={{height: "50%"}}
                    placeholder="Description"
                    onChangeText={(description) => this.setState({description})}
                />
            </View>
            <View style={styles.backButton}>
                <StyledButton title={"save"} onPress={()=>AddMemory._save(navigate, location, this.state)}/>
            </View>
        </View>
        );}

    static _save(navigate, location, text) {
    console.log(text);
        let description;
        let title;
    if(text){
        if(text.description){
            description = text.description;
        }else{
            description = "none given"
        }
        if(text.title){
            title = text.title;
        } else{
            title = "good place"
        }
    }
        LocationsFile.markers.push(
            {
                coordinate: {
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                },
                title: title,
                description: description,
            },
        )
        navigate("Main")
    }

}


export default AddMemory;