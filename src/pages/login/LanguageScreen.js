import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default class LanguageScreen extends Component {
  render() {
    return (
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 30, alignItems: 'center' }}>
          <View>
            <Text style={{ fontSize: 20 }}>Yami</Text>
            <Text style={{ color: '#BABABA' }}>English</Text>
          </View>
          <View>
            <BouncyCheckbox
              isChecked={true}
              textColor="#000"
              fillColor='#00CB88'
              unfillColor="white"
              onPress={(checked) => console.log("Checked: ", checked)}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 30, alignItems: 'center' }}>
          <View>
            <Text style={{ fontSize: 20 }}>美味</Text>
            <Text style={{ color: '#BABABA' }}>中文</Text>
          </View>
          <View>
            <BouncyCheckbox
              isChecked={true}
              textColor="#000"
              fillColor='#00CB88'
              unfillColor="white"
              onPress={(checked) => console.log("Checked: ", checked)}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 30, alignItems: 'center' }}>
          <View>
            <Text style={{ fontSize: 20 }}>おいしい</Text>
            <Text style={{ color: '#BABABA' }}>日本语</Text>
          </View>
          <View>
            <BouncyCheckbox
              isChecked={true}
              textColor="#000"
              fillColor='#00CB88'
              unfillColor="white"
              onPress={(checked) => console.log("Checked: ", checked)}
            />
          </View>
        </View>
      </View>
    )
  }
}