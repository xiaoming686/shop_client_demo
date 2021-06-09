import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import EventBus from 'react-native-event-bus'
import Language from '../../utils/languages/languages'
import Storage from '../../utils/storage/storage'

export default class LanguageScreen extends Component {
  state = {
    lang: 'cn'
  }
  // 设置初始语言
  componentDidMount() {
    Storage.load({
      key: 'languageState',
    }).then(ret => {
      this.setState({ lang: ret.lang });
    }).catch(err => {
      // console.warn(err.message);
      this.setState({ lang: 'cn' });
    })
  }
  // 语言切换
  changeEnLanguage = () => {
    Storage.save({
      key: 'languageState',
      data: {
        lang: 'en'
      },
      expires: 1000 * 3600,
    })
    Language.locale = 'en'
    this.props.navigation.replace('Login')
  }
  changeCnLanguage = () => {
    Storage.save({
      key: 'languageState',
      data: {
        lang: 'cn'
      },
      expires: 1000 * 3600,
    })
    Language.locale = 'cn'
    this.props.navigation.replace('Login')
  }
  changeJapLanguage = () => {
    Storage.save({
      key: 'languageState',
      data: {
        lang: 'jap'
      },
      expires: 1000 * 3600,
    })
    Language.locale = 'jap'
    this.props.navigation.replace('Login')
  }
  render() {
    return (
      <View style={{ backgroundColor: '#f8f8f9', flex: 1 }}>
        <View style={{
          marginTop: 50, flexDirection: 'row', marginBottom: 20,marginHorizontal: 20, justifyContent: 'space-between', alignItems: 'center',
        }}>
          <TouchableOpacity style={{ padding: 10, paddingLeft: 0,paddingRight:30 }} activeOpacity={1} onPress={() => { this.props.navigation.goBack() }}>
            <Image style={{ width: 10, height: 15, resizeMode: 'contain', }}
              source={require('../../assets/images/png/sousuo_gengduo_icon.png')}></Image>
          </TouchableOpacity>
          <Text style={{ fontSize: 19, fontWeight: 'bold' }}>语言切换</Text>
          <View style={{ padding: 10, paddingLeft: 30,paddingRight:0 }}>
            <Image style={{ opacity: 0, width: 10, height: 15 }} source={require('../../assets/images/png/sousuo_gengduo_icon.png')}></Image>
          </View>
        </View>
        {/* 1 */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20, marginTop: 35, alignItems: 'center' }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Yummy</Text>
            <Text style={{ color: '#BABABA' }}>English</Text>
          </View>
          <TouchableOpacity onPress={this.state.lang == 'en' ? () => { } : this.changeEnLanguage}>
            {
              this.state.lang == 'en' ?
                <Image style={{ width: 28, height: 28, resizeMode: 'contain' }} source={require('../../assets/images/png/dl_jizhuwo1.png')} />
                :
                <Image style={{ width: 28, height: 28, resizeMode: 'contain' }} source={require('../../assets/images/png/dl_jizhuwo2.png')} />
            }
          </TouchableOpacity>
        </View>
        {/* 2 */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20, marginTop: 0, alignItems: 'center' }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>美味</Text>
            <Text style={{ color: '#BABABA' }}>中文</Text>
          </View>
          <TouchableOpacity onPress={this.state.lang == 'cn' ? () => { } : this.changeCnLanguage}>
            {
              this.state.lang == 'cn' ?
                <Image style={{ width: 28, height: 28, resizeMode: 'contain' }} source={require('../../assets/images/png/dl_jizhuwo1.png')} />
                :
                <Image style={{ width: 28, height: 28, resizeMode: 'contain' }} source={require('../../assets/images/png/dl_jizhuwo2.png')} />
            }
          </TouchableOpacity>
        </View>
        {/* 3 */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20, marginTop: 0, alignItems: 'center' }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>おいしい</Text>
            <Text style={{ color: '#BABABA' }}>日本语</Text>
          </View>
          <TouchableOpacity onPress={this.state.lang == 'jap' ? () => { } : this.changeJapLanguage}>
            {
              this.state.lang == 'jap' ?
                <Image style={{ width: 28, height: 28, resizeMode: 'contain' }} source={require('../../assets/images/png/dl_jizhuwo1.png')} />
                :
                <Image style={{ width: 28, height: 28, resizeMode: 'contain' }} source={require('../../assets/images/png/dl_jizhuwo2.png')} />
            }
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}