import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, PermissionsAndroid,Dimensions } from 'react-native';
import MapView, { Circle, Marker, Polygon, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service'

const height=Dimensions.get('window').height

export default function Map() {
  async function requestPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
        Geolocation.getCurrentPosition(
          (position) => {
            console.log(position);
          },
          (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: false, timeout: 10000, maximumAge: 10000 }
        )
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };
  requestPermission()
  return (
    <View style={styles.container}>
      <ScrollView>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          mapType='standard'
          showsUserLocation={true}
          showsTraffic={true}
          showsIndoorLevelPicker={true}
          region={{
            latitude: 30.549287,
            longitude: 104.077953,
            latitudeDelta: 0.006,
            longitudeDelta: 0.006,
          }}
        >
          <Marker title='666'
            draggable
            coordinate={{ latitude: 30.549287, longitude: 104.077953 }}
            image={require('../../assets/images/png/dy_dianpincheicon3x.png')}
          ></Marker>
          <Polygon
            strokeWidth={3}
            strokeColor='#00cb88'
            coordinates={[
              { latitude: 30.549287, longitude: 104.077953 },
              { latitude: 30.548, longitude: 104.077 }
            ]}>
          </Polygon>
          <Circle
            center={{ latitude: 30.549287, longitude: 104.077953 }}
            radius={200}
            strokeWidth={3}
            strokeColor='#00cb88'
          ></Circle>
        </MapView>
        <View style={{ backgroundColor: 'red', width: '100%', height: 500 }}></View>
        <View><Text>6666666666</Text></View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center'
  },
  map: {
    marginTop:33,
    width:'100%',
    height:height/2,
  },
});