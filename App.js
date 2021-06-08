import React, { Component } from 'react'
import { View, Text, StatusBar, StyleSheet, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Nav from './src/pages/nav/Nav'
import Storage from './src/utils/storage/storage'


export default class App extends Component {
  state = {
    lanuch: true,
    haslogin: false
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ lanuch: false })
    }, 1000);
    Storage.load({
      key: 'loginState',
    }).then(ret => {
      this.setState({ haslogin: true })
    }).catch(err => {
      this.setState({ haslogin: false })
    })
  }
  render() {
    return (
      <NavigationContainer>
        <StatusBar
          backgroundColor="#f8f8f9"
          barStyle="dark-content"
          translucent={true}
          animated={true}>
        </StatusBar>
        {
          this.state.lanuch ?
            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
              <Image style={{ width: 145.5, height: 125, resizeMode: 'contain' }}
                source={require('./src/assets/images/png/dl_zhujixiangwu.png')} />
              <Text style={{ color: '#3EB480', fontSize: 22, fontWeight: 'bold', marginTop: 10 }}>-商家中心-</Text>
            </View>
            :
            <Nav haslogin={this.state.haslogin} />
        }
      </NavigationContainer>
    )
  }
}