import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import EventBus from 'react-native-event-bus';
import Language from '../../utils/languages/languages';
import I18n from '../../utils/languages/languages'

export default class LanguageScreen extends Component {
  state = {
    en: false,
    cn: true,
    jap: false,
  }

  changeEnLanguage = () => {
    this.state.en ? '' : this.setState({ en: true, cn: false, jap: false })
    Language.locale = 'en'
  }
  changeCnLanguage = () => {
    this.state.cn ? '' : this.setState({ en: false, cn: true, jap: false })
    Language.locale = 'cn'
  }
  changeJapLanguage = () => {
    this.state.jap ? '' : this.setState({ en: false, cn: false, jap: true })
    Language.locale = 'jap'
  }
  render() {
    return (
      <View style={{ backgroundColor: '#f8f8f9', flex: 1 }}>
        <View style={{ marginTop: 50, flexDirection: 'row', marginBottom: 20, marginHorizontal: 20, justifyContent: 'space-between', alignItems: 'center', }}>
          <TouchableOpacity style={{ padding: 10, paddingLeft: 0 }} activeOpacity={1} onPress={() => { this.props.navigation.goBack() }}>
            <Image style={{ width: 10, height: 15, resizeMode: 'contain', }} source={require('../../assets/images/png/sousuo_gengduo_icon.png')}></Image>
          </TouchableOpacity>
          <Text style={{ fontSize: 19, fontWeight: 'bold' }}>语言切换</Text>
          <View style={{ padding: 10, paddingLeft: 0 }}>
            <Image style={{ opacity: 0, width: 10, height: 15 }} source={require('../../assets/images/png/sousuo_gengduo_icon.png')}></Image>
          </View>
        </View>
        {/* 1 */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20, marginTop: 35, alignItems: 'center' }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Yummy</Text>
            <Text style={{ color: '#BABABA' }}>English</Text>
          </View>
          <TouchableOpacity onPress={this.changeEnLanguage}>
            {
              this.state.en ?
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
          <TouchableOpacity onPress={this.changeCnLanguage}>
            {
              this.state.cn ?
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
          <TouchableOpacity onPress={this.changeJapLanguage}>
            {
              this.state.jap ?
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