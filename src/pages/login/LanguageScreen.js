import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';

export default class LanguageScreen extends Component {
  state={
    checked:true
  }
  render() {
    return (
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 30, alignItems: 'center' }}>
          <View>
            <Text style={{ fontSize: 20 }}>Yami</Text>
            <Text style={{ color: '#BABABA' }}>English</Text>
          </View>
          <TouchableOpacity onPress={() => { this.setState({ checked: !this.state.checked }) }}>
            {
              this.state.checked ?
                <Image style={{ width: 30, height: 30, resizeMode: 'contain' }} source={require('../../assets/images/png/checkbox_checked.png')} />
                :
                <Image style={{ width: 30, height: 30, resizeMode: 'contain' }} source={require('../../assets/images/png/checkbox_unchecked.png')} />
            }
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 30, alignItems: 'center' }}>
          <View>
            <Text style={{ fontSize: 20 }}>美味</Text>
            <Text style={{ color: '#BABABA' }}>中文</Text>
          </View>
          <TouchableOpacity onPress={() => { this.setState({ checked: !this.state.checked }) }}>
            {
              this.state.checked ?
                <Image style={{ width: 30, height: 30, resizeMode: 'contain' }} source={require('../../assets/images/png/checkbox_checked.png')} />
                :
                <Image style={{ width: 30, height: 30, resizeMode: 'contain' }} source={require('../../assets/images/png/checkbox_unchecked.png')} />
            }
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 30, alignItems: 'center' }}>
          <View>
            <Text style={{ fontSize: 20 }}>おいしい</Text>
            <Text style={{ color: '#BABABA' }}>日本语</Text>
          </View>
          <TouchableOpacity onPress={() => { this.setState({ checked: !this.state.checked }) }}>
            {
              this.state.checked ?
                <Image style={{ width: 30, height: 30, resizeMode: 'contain' }} source={require('../../assets/images/png/checkbox_checked.png')} />
                :
                <Image style={{ width: 30, height: 30, resizeMode: 'contain' }} source={require('../../assets/images/png/checkbox_unchecked.png')} />
            }
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}