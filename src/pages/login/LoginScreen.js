import React, { Component } from 'react'
import { View, Text, Alert, TouchableOpacity, TextInput, StyleSheet, ActivityIndicator, Image, ToastAndroid } from 'react-native'
import validator from '../../utils/validator'
import MyLogin from '../../utils/mytoast/myLogin'
import MyLoading from '../../utils/mytoast/myloading'

export default class LoginScreen extends Component {
  state = {
    account: '',
    password: '',
    username: '',
    accountValid: true,
    checked: true,
    isShowMyLogin: false,
    isShowMyLoading: false,
  }
  /* 2-1-邮箱格式校验 */
  checkAccount = (currentAccount) => {
    const accountValid = validator.validateEmail(currentAccount);
    if (!accountValid) {
      console.log(accountValid);
      return
    }
    this.setState({ account: currentAccount });
  }
  /* 3-1-用户名校验 */
  checkUserame = (currentUserame) => {
    this.setState({ username: currentUserame });
  }
  /* 4-1-密码校验 */
  checkPassword = (currentPassword) => {
    this.setState({ password: currentPassword });
  }
  /* 6-1-登录验证并跳转,利用mytoast实现弹窗 */
  submit = () => {
    if (!this.state.account) {
      this.setState({ isShowMyLogin: true });
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
    this.setState({ isShowMyLogin: false });
  }
  cancelMyToast = () => {
    this.setState({ isShowMyLogin: false });
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f8f9' }}>
        {/* 1-吉祥物图片 */}
        <Image style={{ marginTop: 141, width: 145.5, height: 134, resizeMode: 'contain' }} source={require('../../assets/images/png/dl_zhujixiangwu.png')} />
        {/* 2-邮箱输入 */}
        <View style={{ borderRadius: 10, height: 46, width: 277.5, backgroundColor: '#FFFFFF', flexDirection: 'row', marginTop: 39, alignItems: 'center',borderRightWidth:4,borderBottomWidth:4,borderColor:'#f5f5f5' }}>
          <Image style={{ marginLeft: 20.5, width: 20, height: 20, resizeMode: 'contain' }} source={require('../../assets/images/png/email.png')} />
          <TextInput onChangeText={this.checkAccount} clearButtonMode="always" style={{ marginLeft: 35, fontSize: 15,width:200 }} placeholder="请输入邮箱"></TextInput>
        </View>
        {/* 3-用户名输入 */}
        <View style={{ borderRadius: 10, height: 46, width: 277.5, backgroundColor: '#FFFFFF', flexDirection: 'row', marginTop: 20, alignItems: 'center',borderRightWidth:4,borderBottomWidth:4,borderColor:'#f5f5f5' }}>
          <Image style={{ marginLeft: 20, width: 20, height: 20, resizeMode: 'contain' }} source={require('../../assets/images/png/dl_youxiangshouji_icon.png')} />
          <TextInput onChangeText={this.checkUserame} clearButtonMode="always" style={{ marginLeft: 35, fontSize: 15,width:200 }} placeholder="请输入用户名"></TextInput>
        </View>
        {/* 4-密码输入 */}
        <View style={{ borderRadius: 10, height: 46, width: 277.5, backgroundColor: '#FFFFFF', flexDirection: 'row', marginTop: 20, alignItems: 'center',borderRightWidth:4,borderBottomWidth:4,borderColor:'#f5f5f5' }}>
          <Image style={{ marginLeft: 20, width: 20, height: 20, resizeMode: 'contain' }} source={require('../../assets/images/png/password.png')} />
          <TextInput onChangeText={this.checkPassword} clearButtonMode="always" secureTextEntry={true} style={{ marginLeft: 35, fontSize: 15,width:200 }} placeholder="请输入密码"></TextInput>
        </View>
        {/* 5-记住我 */}
        <View style={{ marginTop: 25, width: 277.5, flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => { this.setState({ checked: !this.state.checked }) }} >
            {
              this.state.checked ?
                <Image style={{ width: 20.5, height: 20.5, resizeMode: 'contain' }} source={require('../../assets/images/png/dl_jizhuwo1.png')} />
                :
                <Image style={{ width: 20.5, height: 20.5, resizeMode: 'contain' }} source={require('../../assets/images/png/dl_jizhuwo2.png')} />
            }
          </TouchableOpacity>
          <Text style={{ fontSize: 15, marginLeft: 6 }}>记住我</Text>
        </View>
        {/* 6-登录按钮以及弹窗提示 */}
        <View style={{ height: 46.5, width: 277.5, backgroundColor: this.state.account && this.state.username && this.state.password ? '#00CB88' : '#c9c9c9', borderRadius: 5, marginTop: 35 }}>
          <TouchableOpacity onPress={this.submit} disabled={this.state.account && this.state.username && this.state.password ? false : true}>
            <Text style={{ textAlign: 'center', fontSize: 18.41, color: '#FFFFFF', marginTop: 11 }}>登 录</Text>
          </TouchableOpacity>
        </View>
        <MyLogin
          content='请输入邮箱'
          confirm={this.ensureMyToast}
          cancel={this.cancelMyToast}
          visible={this.state.isShowMyLogin} />
        <MyLoading
          visible={this.state.isShowMyLoading} />
        {/* 7-语言选择 */}
        <View style={{ width: 305, flexDirection: 'row', marginTop: 110, alignItems: 'center' }}>
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
