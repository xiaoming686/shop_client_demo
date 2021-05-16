import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';

export default class RegisterScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View><Image style={{ width: 280, height: 280 }} source={require('../../assets/images/png/login.png')} /></View>
        <View><Image style={{ width: 80, height: 80, resizeMode: 'contain' }} source={require('../../assets/images/png/dl_zhujixiangwu.png')} /></View>
        <View style={{ justifyContent: 'center', borderRadius: 10, height: 60, width: '80%', backgroundColor: '#FFFFFF', flexDirection: 'row', marginTop: 10, alignItems: 'center', }}>
          <Image style={{ marginLeft: 20, width: 20, height: 20, resizeMode: 'contain' }} source={require('../../assets/images/png/email.png')} />
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('EmailRegister') }}>
            <Text style={{ fontSize: 16 }}> 邮箱注册</Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'center', borderRadius: 10, height: 60, width: '80%', backgroundColor: '#FFFFFF', flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
          <Image style={{ marginLeft: 20, width: 20, height: 20, resizeMode: 'contain' }} source={require('../../assets/images/png/telephone.png')} />
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('PhoneRegister') }}>
            <Text style={{ fontSize: 16 }}> 手机注册</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 50, flexDirection: 'row' }}>
          <Image style={{ width: 80, height: 80 }} source={require('../../assets/images/png/zc_apple_button.png')} />
          <Image style={{ width: 80, height: 80 }} source={require('../../assets/images/png/zc_google_button.png')} />
          <Image style={{ width: 80, height: 80 }} source={require('../../assets/images/png/zc_line_button.png')} />
        </View>
        <View style={{ marginTop: 10, flexDirection: 'row' }}>
          <Text>已有账号？</Text>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Login') }}>
            <Text style={{ color: '#01AC73', textDecorationLine: 'underline' }}>立即登录</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
