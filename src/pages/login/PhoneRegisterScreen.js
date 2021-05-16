import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';

export default class PhoneRegisterScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View><Image style={{ width: 80, height: 80, resizeMode: 'contain' }} source={require('../../assets/images/png/dl_zhujixiangwu.png')} /></View>
        <View style={{ marginTop: 40, width: '100%', marginLeft: 40 }}>
          <Text>手机</Text>
        </View>
        <View style={{ justifyContent: 'center', borderBottomWidth: 1, height: 50, width: '92%', }}>
          <TextInput style={{ fontSize: 16, }} placeholder="请输入手机号码"></TextInput>
        </View>
        <View style={{ marginTop: 40, width: '100%', marginLeft: 40 }}>
          <Text>验证码</Text>
        </View>
        <View style={{ flexDirection: 'row', borderBottomWidth: 1, height: 50, width: '92%', alignItems: 'center', justifyContent: 'space-between' }}>
          <TextInput style={{ fontSize: 16, }} placeholder="请输入验证码"></TextInput>
            <TouchableOpacity style={{ borderRadius:5,padding:5,backgroundColor: '#00CB88' }} onPress={() => { this.props.navigation.navigate('Login') }}>
              <Text style={{color:'#FFFFFF',fontSize:16,textAlign:'center'}}>获取验证码</Text>
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
