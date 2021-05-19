import React, { Component } from 'react'
import { View, Text, Alert, TouchableOpacity, TextInput, StyleSheet, ActivityIndicator, Image, ToastAndroid } from 'react-native'
import validator from '../../utils/validator'
import MyToast from '../../utils/myToast'
import MyLoading from '../../utils/myloading'

export default class LoginScreen extends Component {
  state = {
    account: '',
    password: '',
    username: '',
    accountValid: true,
    checked: true,
    isShowMyToast: false,
    isShowMyLoading: false,
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
    this.setState({ username });
  }
  /* 4-1-密码校验 */
  checkPassword = (currentPassword) => {
    let password = currentPassword.nativeEvent.text
    this.setState({ password });
  }
  /* 6-1-登录验证并跳转,利用mytoast实现弹窗 */
  submit = () => {
    if (!this.state.account) {
      this.setState({ isShowMyToast: true });
      return
    } else {
      // 发送axios返回结果如果正确
      // 显示loading
      this.setState({ isShowMyLoading: true });
      if (true) {
        // 关闭loading并跳转
        let that = this
        setTimeout(function () {
          that.setState({ isShowMyLoading: false })
          that.props.navigation.replace('NavTab')
        }, 1000)
      }
    }
  }
  ensureMyToast = () => {
    this.setState({ isShowMyToast: false });
  }
  cancelMyToast = () => {
    this.setState({ isShowMyToast: false });
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f8f9' }}>
        {/* 1-吉祥物图片 */}
        <Image style={{ marginTop: 141, width: 145.5, height: 134, resizeMode: 'contain' }} source={require('../../assets/images/png/dl_zhujixiangwu.png')} />
        {/* 2-邮箱输入 */}
        <View style={{ borderRadius: 10, height: 46, width: 277.5, backgroundColor: '#FFFFFF', flexDirection: 'row', marginTop: 39, alignItems: 'center', }}>
          <Image style={{ marginLeft: 20.5, width: 20, height: 20, resizeMode: 'contain' }} source={require('../../assets/images/png/email.png')} />
          <TextInput onSubmitEditing={this.checkAccount} clearButtonMode="always" style={{ marginLeft: 35, fontSize: 15, }} placeholder="请输入邮箱"></TextInput>
        </View>
        {/* 3-用户名输入 */}
        <View style={{ borderRadius: 10, height: 46, width: 277.5, backgroundColor: '#FFFFFF', flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
          <Image style={{ marginLeft: 20, width: 20, height: 20, resizeMode: 'contain' }} source={require('../../assets/images/png/dl_youxiangshouji_icon.png')} />
          <TextInput onSubmitEditing={this.checkUserame} clearButtonMode="always" style={{ marginLeft: 35, fontSize: 15, }} placeholder="请输入用户名"></TextInput>
        </View>
        {/* 4-密码输入 */}
        <View style={{ borderRadius: 10, height: 46, width: 277.5, backgroundColor: '#FFFFFF', flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
          <Image style={{ marginLeft: 20, width: 20, height: 20, resizeMode: 'contain' }} source={require('../../assets/images/png/password.png')} />
          <TextInput onSubmitEditing={this.checkPassword} clearButtonMode="always" secureTextEntry={true} style={{ marginLeft: 35, fontSize: 15, }} placeholder="请输入密码"></TextInput>
        </View>
        {/* 5-记住我 */}
        <TouchableOpacity onPress={() => { this.setState({ checked: !this.state.checked }) }} style={{ marginTop: 25, width: 277.5, flexDirection: 'row', alignItems: 'center' }}>
          {
            this.state.checked ?
              <Image style={{ width: 20.5, height: 20.5, resizeMode: 'contain' }} source={require('../../assets/images/png/checkbox_checked.png')} />
              :
              <Image style={{ width: 20.5, height: 20.5, resizeMode: 'contain' }} source={require('../../assets/images/png/checkbox_unchecked.png')} />
          }
          <Text style={{ fontSize: 15, marginLeft: 6 }}>记住我</Text>
        </TouchableOpacity>
        {/* 6-登录按钮以及弹窗提示 */}
        <View style={{ height: 46.5, width: 277.5, backgroundColor: '#00CB88', borderRadius: 5, marginTop: 35 }}>
          <TouchableOpacity onPress={this.submit}>
            <Text style={{ textAlign: 'center', fontSize: 18.41, color: '#FFFFFF', marginTop: 11 }}>登 录</Text>
          </TouchableOpacity>
        </View>
        <MyToast
          content='请输入邮箱'
          confirm={this.ensureMyToast}
          cancel={this.cancelMyToast}
          visible={this.state.isShowMyToast} />
        <MyLoading
          visible={this.state.isShowMyLoading} />
        {/* 7-语言选择 */}
        <View style={{ width: 305, flexDirection: 'row', marginTop: 119, alignItems: 'center' }}>
          <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={require('../../assets/images/png/dl_yuyantubiao.png')} />
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Language') }}>
            <Text style={{ marginLeft: 6, fontSize: 19.53 }}>语言</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});
