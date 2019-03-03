import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {Location, MapView, Permissions} from 'expo';
import * as Styles from "../constants/Styles";
import {LoadingIcon} from "../components/LoadingIcon";
import AddMemory from "../components/AddMemory";

const styles = Styles.globalStyles();

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
          <View style={styles.centerText}>
            <AddMemory/>
            {
              this.state.locationResult === null ?
                  <View style={styles.centerText}>
                    <LoadingIcon/>
                    <Text style={styles.loadingText}>
                    </Text>
                  </View> :
                  this.state.hasLocationPermissions === false ?
                      <View style={styles.centerText}>
                        <Text>Location permissions are not granted.</Text>
                      </View> :
                      this.state.mapRegion === null ?
                          <Text>Map region doesn't exist.</Text> :
                          <MapView
                              style={{ alignSelf: 'stretch', height: '100%' }}
                              region={this.state.mapRegion}
                              onRegionChange={this._handleMapRegionChange}
                          />

            }
          </View>

    );
  }

}

