import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import EventBus from 'react-native-event-bus';
import Language from '../../utils/languages/languages';
import I18n from '../../utils/languages/languages'

export default class LanguageScreen extends Component {
  state = {
    en: true,
    cn: false,
    jap: false
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
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20, alignItems: 'center' }}>
          <View>
            <Text style={{ fontSize: 20 }}>Yami</Text>
            <Text style={{ color: '#BABABA' }}>English</Text>
          </View>
          <TouchableOpacity onPress={this.changeEnLanguage0}>
            {
              this.state.en ?
                <Image style={{ width: 30, height: 30, resizeMode: 'contain' }} source={require('../../assets/images/png/checkbox_checked.png')} />
                :
                <Image style={{ width: 30, height: 30, resizeMode: 'contain' }} source={require('../../assets/images/png/checkbox_unchecked.png')} />
            }
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20, marginTop: 0, alignItems: 'center' }}>
          <View>
            <Text style={{ fontSize: 20 }}>美味</Text>
            <Text style={{ color: '#BABABA' }}>中文</Text>
          </View>
          <TouchableOpacity onPress={this.changeCnLanguage}>
            {
              this.state.cn ?
                <Image style={{ width: 30, height: 30, resizeMode: 'contain' }} source={require('../../assets/images/png/checkbox_checked.png')} />
                :
                <Image style={{ width: 30, height: 30, resizeMode: 'contain' }} source={require('../../assets/images/png/checkbox_unchecked.png')} />
            }
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20, marginTop: 0, alignItems: 'center' }}>
          <View>
            <Text style={{ fontSize: 20 }}>おいしい</Text>
            <Text style={{ color: '#BABABA' }}>日本语</Text>
          </View>
          <TouchableOpacity onPress={this.changeJapLanguage}>
            {
              this.state.jap ?
                <Image style={{ width: 30, height: 30, resizeMode: 'contain' }} source={require('../../assets/images/png/checkbox_checked.png')} />
                :
                <Image style={{ width: 30, height: 30, resizeMode: 'contain' }} source={require('../../assets/images/png/checkbox_unchecked.png')} />
            }
          </TouchableOpacity>
        </View>
        <Text style={{marginTop:30,padding:30,backgroundColor:'green'}}>{I18n.t('languageChanged')}</Text>
      </View>
    )
  }
}