// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  Button,
  TouchableNativeFeedback,
} from 'react-native';
import MapView, {
  Marker,
  Polyline,
  PROVIDER_GOOGLE,
  Polygon,
} from 'react-native-maps';
import Geolocation, {clearWatch} from 'react-native-geolocation-service';
import axios from 'axios';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      initialPosition: {
        latitude: 0,

        longitude: 0,

        latitudeDelta: 0,

        longitudeDelta: 0,
      },
      watcher: '',
      points: [],
      show: false,
    };
  }
  componentDidMount() {
    // Geolocation.getCurrentPosition(
    //   (position) => {
    //     console.log(position);
    //   },
    //   (error) => {
    //     // See error code charts below.
    //     console.log(error.code, error.message);
    //   },
    //   { forceRequestLocation:true, timeout: 8000, maximumAge: 10000 }
    // );
    axios(
      'https://mya2swe8zd.execute-api.ap-northeast-1.amazonaws.com/develoment_v2/franco_goolemaps',
    )
      .then(res => {
        let res1 = res.data.result[0];
        for (let i of res1) {
          this.state.points.push({latitude: i[0], longitude: i[1]});
        }
        console.log(this.state.points, 12312321);
        this.setState({
          show: true,
        });
      })
      .catch(err => {
        console.log(err.response);
      });
    // this.setState({
    //   watcher : Geolocation.watchPosition(
    //     (success)=>{
    //         console.log(success)
    //     },
    //     (err)=>{
    //       console.log(err)
    //     },
    //     {
    //       enableHighAccuracy:true ,forceRequestLocation:true,timeout: 15000, maximumAge: 10000
    //     }
    //   )
    // })

    // axios('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCasgDjsZhV9Sg_0U4lyg2BV7Nnzq275SY').then(res=>{
    //   console.log(res.data)
    // }).catch(err=>{
    //   console.log(err.response,12312)
    // })
  }
  componentWillUnmount() {
    // clearWatch(this.state.watcher)
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            initialRegion={{
              latitude: 30.554228,
              longitude: 104.07671,
              latitudeDelta: 0.006,
              longitudeDelta: 0.006,
            }}
            showsUserLocation={true}>
            <Marker
              title="123"
              coordinate={{latitude: 30.554228, longitude: 104.07671}}></Marker>

            <Marker
              title="456"
              coordinate={{latitude: 30.556228, longitude: 104.07671}}></Marker>
            {this.state.show ? (
              <Polyline
                coordinates={this.state.points}
                strokeColor="#01AC73" // fallback for when `strokeColors` is not supported by the map-provider
                // strokeColors={[
                //   '#01AC73',
                //   '#01AC73', // no color, creates a "long" gradient between the previous and next coordinate
                //   '#01AC73',
                //   '#01AC73',
                //   '#01AC73',
                //   '#01AC73'
                // ]}
                strokeWidth={6}
              />
            ) : (
              <></>
            )}
            {this.state.show ? (
              <Marker title="456" coordinate={this.state.points[0]}></Marker>
            ) : (
              <></>
            )}
            {this.state.show ? (
              <Marker
                title="456"
                coordinate={
                  this.state.points[this.state.points.length - 1]
                }></Marker>
            ) : (
              <></>
            )}
          </MapView>
        </View>
        {/* <Text>123</Text>
        <TouchableNativeFeedback>
          <Text>sdasds</Text>
        </TouchableNativeFeedback> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
// import getDirections from 'react-native-google-maps-directions'

// export default class gmapsDirections extends Component {

//   handleGetDirections = () => {
//     const data = {
//        source: {
//         latitude: -33.8356372,
//         longitude: 18.6947617
//       },
//       destination: {
//         latitude: -33.8600024,
//         longitude: 18.697459
//       },
//       params: [
//         {
//           key: "travelmode",
//           value: "driving"        // may be "walking", "bicycling" or "transit" as well
//         },
//         {
//           key: "dir_action",
//           value: "navigate"       // this instantly initializes navigation using the given travel mode
//         }
//       ],
//       waypoints: [
//         {
//           latitude: -33.8600025,
//           longitude: 18.697452
//         },
//         {
//           latitude: -33.8600026,
//           longitude: 18.697453
//         },
//            {
//           latitude: -33.8600036,
//           longitude: 18.697493
//         }
//       ]
//     }

//     getDirections(data)
//   }

//   render() {
//     return (
//       <View style={{}}>
//         <Button onPress={this.handleGetDirections} title="Get Directions" />
//       </View>
//     );
//   }
// }
