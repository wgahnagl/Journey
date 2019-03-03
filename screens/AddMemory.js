import React from 'react';
import {
    Button,
    View,
} from 'react-native';
import * as Styles from "../constants/Styles";
import {StyledButton} from "../components/StyledButton";
const styles = Styles.globalStyles();





class AddMemory extends React.Component {
render() {
    const { navigate } = this.props.navigation;

    const type = this.props.navigation.getParam('type', 'picture');
    const location = this.props.navigation.getParam('location', null);
    console.log(type);
    console.log(location);

    return (
        <View style={styles.container}>

            <View style={styles.backButton}>
                <StyledButton title={"save"} onPress={()=>AddMemory._save(navigate)}/>
            </View>
        </View>
        );}
    static _save(navigate) {
        navigate("Main")

    }
}

export default AddMemory;