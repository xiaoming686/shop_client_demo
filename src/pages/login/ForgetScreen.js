import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default class ForgetScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={{marginTop:40,width:'100%',marginLeft:40}}>
          <Text>账号</Text>
        </View>
        <View style={{ justifyContent: 'center', borderBottomWidth: 1, height: 50, width: '92%', }}>
          <TextInput style={{ fontSize: 16, }} placeholder="请输入邮箱或手机"></TextInput>
        </View>
        <View style={{ height: 50, width: '80%', backgroundColor: '#00CB88', borderRadius: 10, paddingTop: 12, marginTop: 50 }}>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('NavTab') }}>
            <Text style={{ textAlign: 'center', fontSize: 18, color: '#FFFFFF' }}>确定</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}