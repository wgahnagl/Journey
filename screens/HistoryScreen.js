import React from 'react';
import {
    ImageBackground,
    Platform,
    ScrollView,
    Text,
    View,
    ListView, Image
} from 'react-native';
import {Constants, Location, MapView, Permissions} from 'expo';
import * as Styles from "../constants/Styles";

const styles = Styles.globalStyles();
var PAST_PICTURE_DATA = [
    {source: require('../assets/images/relaxing.jpg'), description: 'This is a description! :)'},
    {source: require('../assets/images/relaxing2.jpg'), description: 'Another description! Woo :D'}
];

export default class HistoryScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        };
    }

    componentDidMount() {
        var picture = PAST_PICTURE_DATA;
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(picture)
        });
    }

    render() {
        return (
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderPicture.bind(this)}
                    style={{paddingTop: 5, paddingBottom: 5}}
                />
            </ScrollView>
        </View>
        )
    }

    renderPicture(picture) {
        return (
            <View style={styles.fullPicContainer}>
                <Image source={picture.source} style={styles.imageContainer}/>
                <View style={styles.descriptionText}>
                    <Text>{picture.description}</Text>
                </View>
            </View>
        )
    }
}
