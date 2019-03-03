import React from 'react';
import {
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {Constants, Location, MapView, Permissions} from 'expo';
import * as Styles from "../constants/Styles";

const styles = Styles.HomeScreenStyles();

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    mapRegion: null,
    hasLocationPermissions: false,
    locationResult: null
  };

  componentDidMount() {
    this._getLocationAsync();
  }

  _handleMapRegionChange = mapRegion => {
    // console.log(mapRegion);
    // this.setState({ mapRegion });
  };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location was denied',
      });
    } else {
      this.setState({ hasLocationPermissions: true });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ locationResult: JSON.stringify(location) });

  this.setState({mapRegion: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }});
};

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.container}>
            <Text style={styles.paragraph}>
              Pan, zoom, and tap on the map!
            </Text>

            {
              this.state.locationResult === null ?
                  <Text>Finding your current location...</Text> :
                  this.state.hasLocationPermissions === false ?
                      <Text>Location permissions are not granted.</Text> :
                      this.state.mapRegion === null ?
                          <Text>Map region doesn't exist.</Text> :
                          <MapView
                              style={{ alignSelf: 'stretch', height: 400 }}
                              region={this.state.mapRegion}
                              onRegionChange={this._handleMapRegionChange}
                          />
            }
          </View>
        </ScrollView>
      </View>
    );
  }

}

