import {Platform, StyleSheet} from "react-native";

export function globalStyles() {
    return StyleSheet.create({
        container: {
            flex: 1,
        },
        contentContainer: {
            paddingTop: 30,
        },
        SplashContainer: {
            alignItems: 'center',
            marginTop: 10,
            marginBottom: 20,
            marginLeft: 20,
            marginRight: 20
        },
        buttonContainer: {
            alignItems: 'center',
            width: '80%',
        },
        backgroundImageContainer: {
            flex: 1,
            resizeMode: 'cover',
            width: '100%',
            height: '100%',
        },
        colorContainer:{
            paddingTop: 30,
            backgroundColor: "orange"
        },
        centerText: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        loadingText:{
            color: 'orange',
            fontFamily:"monospace",
            fontSize: 20
        },
        addMemory: {
            position: 'absolute',
            bottom: 10,
            right: 10,
            width: 50,
            height: 50
        },
        imageContainer: {
            marginRight: 10,
            marginLeft: 10,
            width: 100,
            height: 100,
        },
        descriptionContainer: {
            fontSize: 20,
            fontFamily: 'lora',
        },
        fullPicContainer: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
        },
        separator: {
            height: 1,
            backgroundColor: '#dddddd'
        },
        map: {
            ...StyleSheet.absoluteFillObject,
        },
        memoryAddOverlay: {
            position: 'absolute',
            bottom: 40,
            right: 40,
            width: 50,
            height: 50
        },
        backButton:{
            justifyContent: 'flex-end',
            alignItems: 'center'
        },
        preview: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center'
        },
        capture: {
            flex: 0,
            backgroundColor: '#fff',
            borderRadius: 5,
            color: '#000',
            padding: 10,
            margin: 40
        },
        flipButton: {
            flex: 0.3,
            height: 40,
            marginHorizontal: 2,
            marginBottom: 10,
            marginTop: 20,
            borderRadius: 8,
            borderColor: 'white',
            borderWidth: 1,
            padding: 5,
            alignItems: 'center',
            justifyContent: 'center',
        },
        flipText: {
            color: 'white',
            fontSize: 15,
        },
        zoomText: {
            position: 'absolute',
            bottom: 70,
            zIndex: 2,
            left: 2,
        },
        picButton: {
            backgroundColor: 'darkseagreen',
        },

        CameraButton: {height: 40, backgroundColor: '#DF0101', width: '80%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center'},
        photoGroup: { height: 400, justifyContent: 'space-around', alignItems: 'center', width: "80%", alignSelf: 'center', borderColor: '#DF0101', borderWidth: 1},
        sideButtonContainer:{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },

        settingsContainer: {
            justifyContent: 'center',
            marginTop: 50,
            padding: 20
        }}
        );
}

export const mapStyle = [
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#1d2c4d"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#8ec3b9"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#1a3646"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#4b6878"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#64779e"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#4b6878"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#334e87"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#023e58"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#283d6a"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#6f9ba5"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#1d2c4d"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#023e58"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#3C7680"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#304a7d"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#98a5be"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#1d2c4d"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#2c6675"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#255763"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#b0d5ce"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#023e58"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#98a5be"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#1d2c4d"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#283d6a"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#3a4762"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#0e1626"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#4e6d70"
            }
        ]
    }
]
