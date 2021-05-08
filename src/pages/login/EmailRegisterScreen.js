import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default class EmailRegisterScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View><Image style={{ width: 80, height: 80, resizeMode: 'contain' }} source={require('../../assets/images/png/dl_zhujixiangwu.png')} /></View>
        <View style={{marginTop:40,width:'100%',marginLeft:40}}>
          <Text>邮箱</Text>
        </View>
        <View style={{ justifyContent: 'center', borderBottomWidth: 1, height: 50, width: '92%', }}>
          <TextInput style={{ fontSize: 16, }} placeholder="请输入邮箱"></TextInput>
        </View>
        <View style={{ height: 50, width: '80%', backgroundColor: '#00CB88', borderRadius: 10, paddingTop: 12, marginTop: 50 }}>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('NavTab') }}>
            <Text style={{ textAlign: 'center', fontSize: 18, color: '#FFFFFF' }}>发送注册邮件</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 340, flexDirection: 'row' }}>
          <Text>已有账号？</Text>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Login') }}>
            <Text style={{ color: '#01AC73', textDecorationLine: 'underline' }}>立即登录</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
