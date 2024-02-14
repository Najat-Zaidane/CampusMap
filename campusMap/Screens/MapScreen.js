
import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, SafeAreaView } from "react-native";
import MapViewDirections from "react-native-maps-directions";
import * as Location from 'expo-location';
import FooterTabs from "../components/nav/FooterTabs";

const GOOGLE_MAPS_APIKEY = "AIzaSyCowwHJ_1-3-4K6b_PY0DGDOzFzdpAaaEE";

export default function MapScreen() {
  const route = useRoute();
  const [userLocation, setUserLocation] = useState(null);
  const latitude = route.params?.latitude;
  const longitude = route.params?.longitude;
  const title = route.params?.title;

  const [region, setRegion] = useState({
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    const fetchUserLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Location permission not granted");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      // Optionally, you can set the region to the user's location
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.3,
        longitudeDelta: 0.3,
      });
    };

    fetchUserLocation();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        minZoomLevel={17}
        maxZoomLevel={20}
        mapType="hybrid"
        style={styles.map}
        initialRegion={region}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        showsMyLocationButton={true}
        followsUserLocation={true} // the map will follow the user's location2
        showsCompass={true} //affichage de la boussole
        zoomEnabled={true}
      >
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
          title={title}
          description={"FSJ " + title}
        />
        {userLocation && (
          <MapViewDirections
            //origin={userLocation} // Use live user location as the origin
            origin={{latitude: userLocation.latitude, longitude: userLocation.longitude}}
            destination={{
              latitude: latitude,
              longitude: longitude,
            }}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={7}
            strokeColor="blue"
            mode="WALKING"
          />
        )}
      </MapView>
      <FooterTabs/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent : "space-between",
    backgroundColor: "#F8EFE0",
  },
  map: {
    marginTop:10,
    width: "100%",
    height: "90%",
  },
});