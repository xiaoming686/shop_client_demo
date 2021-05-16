import React, { Component } from 'react'
import { View, Text, Alert, TouchableOpacity, TextInput, ActivityIndicator, Image, ToastAndroid } from 'react-native'
import validator from '../../utils/validator'
import MyToast from '../../utils/myToast'

export default class LoginScreen extends Component {
  state = {
    account: '',
    password: '',
    username: '',
    accountValid: true,
    checked: true,
    isShowMyToast: false,
  }
  /* 2-1-邮箱格式校验 */
  checkAccount = (currentAccount) => {
    let account = currentAccount.nativeEvent.text
    const accountValid = validator.validateEmail(account);
    if (!accountValid) {
      console.log(accountValid);
      return
    }
    this.setState({ account });
  }
  /* 3-1-用户名校验 */
  checkUserame = (currentUserame) => {
    let username = currentUserame.nativeEvent.text
    if (username != 'admin') {
      console.log('error');
      return
    }
    this.setState({ username });
  }
  /* 4-1-密码校验 */
  checkPassword = (currentPassword) => {
    let password = currentPassword.nativeEvent.text
    if (password != '888888') {
      console.log('pserror');
      return
    }
    this.setState({ password });
  }
  /* 6-1-登录验证并跳转,利用mytoast实现弹窗 */
  submit = () => {
    // this.setState({ isShowMyToast: true });
    // this.showToastWithGravity()
    this.props.navigation.navigate('NavTab')
  }
  ensureMyToast = () => {
    this.setState({ isShowMyToast: false });
  }
  cancelMyToast = () => {
    this.setState({ isShowMyToast: false });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* 1-吉祥物图片 */}
        <Image style={{ marginTop: 40, width: 100, height: 100, resizeMode: 'contain' }} source={require('../../assets/images/png/dl_zhujixiangwu.png')} />
        {/* 2-邮箱输入 */}
        <View style={{ borderRadius: 10, height: 50, width: '80%', backgroundColor: '#FFFFFF', flexDirection: 'row', marginTop: 40, alignItems: 'center', }}>
          <Image style={{ marginLeft: 20, width: 20, height: 20, resizeMode: 'contain' }} source={require('../../assets/images/png/email.png')} />
          <TextInput onSubmitEditing={this.checkAccount} clearButtonMode="always" style={{ marginLeft: 30, fontSize: 16, }} placeholder="请输入邮箱"></TextInput>
        </View>
        {/* 3-用户名输入 */}
        <View style={{ borderRadius: 10, height: 50, width: '80%', backgroundColor: '#FFFFFF', flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
          <Image style={{ marginLeft: 20, width: 20, height: 20, resizeMode: 'contain' }} source={require('../../assets/images/png/dl_youxiangshouji_icon.png')} />
          <TextInput onSubmitEditing={this.checkUserame} clearButtonMode="always" style={{ marginLeft: 30, fontSize: 16, }} placeholder="请输入用户名"></TextInput>
        </View>
        {/* 4-密码输入 */}
        <View style={{ borderRadius: 10, height: 50, width: '80%', backgroundColor: '#FFFFFF', flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
          <Image style={{ marginLeft: 20, width: 20, height: 20, resizeMode: 'contain' }} source={require('../../assets/images/png/password.png')} />
          <TextInput onSubmitEditing={this.checkPassword} clearButtonMode="always" secureTextEntry={true} style={{ marginLeft: 30, fontSize: 16, }} placeholder="请输入密码"></TextInput>
        </View>
        {/* 5-记住我 */}
        <TouchableOpacity onPress={() => { this.setState({ checked: !this.state.checked }) }} style={{ marginTop: 15, width: '90%', flexDirection: 'row', alignItems: 'center' }}>
          {
            this.state.checked ?
              <Image style={{ marginLeft: 20, width: 20, height: 20, resizeMode: 'contain' }} source={require('../../assets/images/png/checkbox_checked.png')} />
              :
              <Image style={{ marginLeft: 20, width: 20, height: 20, resizeMode: 'contain' }} source={require('../../assets/images/png/checkbox_unchecked.png')} />
          }
          <Text style={{ fontSize: 16, marginLeft: 5 }}>记住我</Text>
        </TouchableOpacity>
        {/* 6-登录按钮以及弹窗提示 */}
        <View style={{ height: 50, width: '80%', backgroundColor: '#00CB88', borderRadius: 10, paddingTop: 12, marginTop: 15 }}>
          <TouchableOpacity onPress={this.submit}>
            <Text style={{ textAlign: 'center', fontSize: 18, color: '#FFFFFF' }}>登 录</Text>
          </TouchableOpacity>
        </View>
        <MyToast
          content='确定删除个人信息吗？'
          confirm={this.ensureMyToast}
          cancel={this.cancelMyToast}
          visible={this.state.isShowMyToast} />
        {/* 7-忘记密码 */}
        <View style={{ marginTop: 20, }}>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Forget') }}>
            <Text style={{ textDecorationLine: 'underline' }}>忘记密码？</Text>
          </TouchableOpacity>
        </View>
        {/* 6-语言选择 */}
        <View style={{ width: '100%', flexDirection: 'row', marginTop: 90, alignItems: 'center' }}>
          <Image style={{ marginLeft: 20, width: 20, height: 20, resizeMode: 'contain' }} source={require('../../assets/images/png/dl_yuyantubiao.png')} />
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Language') }}>
            <Text style={{ marginLeft: 10, fontSize: 18 }}>语言</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
