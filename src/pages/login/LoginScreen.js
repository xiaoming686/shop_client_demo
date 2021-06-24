import React, { Component } from 'react'
import { View, Text, Alert, TouchableOpacity, TextInput, StyleSheet, ActivityIndicator, Image, ToastAndroid } from 'react-native'
import validator from '../../utils/validator'
import MyLogin from '../../utils/mytoast/myLogin'
import MyLoading from '../../utils/mytoast/myloading'
import md5 from 'js-md5'
import Storage from '../../utils/storage/storage'
import { NetPost } from '../../utils/request'

export default class LoginScreen extends Component {
  state = {
    account: '',
    password: '',
    username: '',
    accountValid: true,
    checked: true,
    isShowMyLogin: false,
    isShowMyPass: false,
    isShowMyLoading: false,
  }
  componentDidMount() {
    Storage.load({
      key: 'loginState',
    }).then(ret => {
      this.setState({ account: ret.email });
      console.log(ret.email);
    }).catch(err => {
      console.log(err);
    })
  }
  /* 2-1-邮箱格式校验 */
  checkAccount = (currentAccount) => {
    this.setState({ account: currentAccount });
  }
  /* 3-1-用户名校验 */
  checkUserame = (currentUserame) => {
    this.setState({ username: currentUserame });
  }
  /* 4-1-密码校验 */
  checkPassword = (currentPassword) => {
    this.setState({ password: currentPassword + 'qbaytek2021' });
  }
  /* 6-1-登录验证并跳转,利用mytoast实现弹窗 */
  submit = () => {
    const accountValid = validator.validateEmail(this.state.account);
    if (!accountValid) {
      this.setState({ isShowMyLogin: true });
      setTimeout(() => {
        this.setState({ isShowMyLogin: false })
      }, 1000);
      return
    } else {
      // 发送axios返回结果如果正确
      let loginData = {
        email: this.state.account,
        password: md5(this.state.password),
        grant_type: "password"
      }
      // 显示loading
      this.setState({ isShowMyLoading: true });
      NetPost('/sign_in/v2', loginData).then((res) => {
        console.log(res);
        // 关闭loading并跳转，是否记住密码
        this.setState({ isShowMyLoading: false })
        this.props.navigation.replace('NavTab')
        if (this.state.checked) {
          Storage.save({
            key: 'loginState',
            data: {
              email: loginData.email,
              haslogin: true,
              token: res.access_token
            },
            expires: 1000 * 3600,
          })
        } else {
          Storage.remove(
            { key: 'loginState' }
          )
        }
      }).catch(error => {
        // 关闭loading及提示
        console.log(error);
        this.setState({ isShowMyLoading: false })
        this.setState({ isShowMyPass: true });
        setTimeout(() => {
          this.setState({ isShowMyPass: false });
        }, 1000);
      })
    }
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f8f9' }}>
        {/* 1-吉祥物图片 */}
        <Image style={{ marginTop: 141, width: 145.5, height: 134, resizeMode: 'contain' }}
          source={require('../../assets/images/png/dl_zhujixiangwu.png')} />
        {/* 2-邮箱输入 */}
        <View style={{
          borderRadius: 10, height: 46, width: 277.5, backgroundColor: '#FFFFFF',
          flexDirection: 'row', marginTop: 39, alignItems: 'center', borderRightWidth: 4, borderBottomWidth: 4, borderColor: '#f5f5f5'
        }}>
          <Image style={{ marginLeft: 20.5, width: 20, height: 20, resizeMode: 'contain' }} source={require('../../assets/images/png/email.png')} />
          <TextInput onChangeText={this.checkAccount} clearButtonMode='while-editing' value={this.state.account}
            style={{ marginLeft: 35, fontSize: 15, width: 200 }} placeholder="请输入邮箱"></TextInput>
        </View>
        {/* 3-用户名输入 */}
        <View style={{
          borderRadius: 10, height: 46, width: 277.5, backgroundColor: '#FFFFFF',
          flexDirection: 'row', marginTop: 20, alignItems: 'center', borderRightWidth: 4, borderBottomWidth: 4, borderColor: '#f5f5f5'
        }}>
          <Image style={{ marginLeft: 20, width: 20, height: 20, resizeMode: 'contain' }}
            source={require('../../assets/images/png/dl_youxiangshouji_icon.png')} />
          <TextInput onChangeText={this.checkUserame} clearButtonMode="always"
            style={{ marginLeft: 35, fontSize: 15, width: 200 }} placeholder="请输入用户名"></TextInput>
        </View>
        {/* 4-密码输入 */}
        <View style={{
          borderRadius: 10, height: 46, width: 277.5, backgroundColor: '#FFFFFF',
          flexDirection: 'row', marginTop: 20, alignItems: 'center', borderRightWidth: 4, borderBottomWidth: 4, borderColor: '#f5f5f5'
        }}>
          <Image style={{ marginLeft: 20, width: 20, height: 20, resizeMode: 'contain' }}
            source={require('../../assets/images/png/password.png')} />
          <TextInput onChangeText={this.checkPassword} clearButtonMode="always" secureTextEntry={true}
            style={{ marginLeft: 35, fontSize: 15, width: 200 }} placeholder="请输入密码"></TextInput>
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
        <View style={{
          height: 46.5, width: 277.5, borderRadius: 5, marginTop: 35,
          backgroundColor: this.state.account && this.state.username && this.state.password ? '#00CB88' : '#c9c9c9',
        }}>
          <TouchableOpacity onPress={this.submit} disabled={this.state.account && this.state.username && this.state.password ? false : true}>
            <Text style={{ textAlign: 'center', fontSize: 18.41, color: '#FFFFFF', marginTop: 11 }}>登 录</Text>
          </TouchableOpacity>
        </View>
        <MyLogin
          content='请输入正确邮箱'
          visible={this.state.isShowMyLogin} />
        <MyLogin
          content='用户名或密码错误'
          visible={this.state.isShowMyPass} />
        <MyLoading
          visible={this.state.isShowMyLoading} />
        {/* 7-语言选择 */}
        <TouchableOpacity style={{ width: 305, flexDirection: 'row', marginTop: 90, alignItems: 'center', }}
          onPress={() => { this.props.navigation.navigate('Language') }}>
          <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={require('../../assets/images/png/dw_yuyanqiehuan.png')} />
          <Text style={{ marginLeft: 6, fontSize: 19.53, color: '#5d5757' }}>语言</Text>
        </TouchableOpacity>
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
