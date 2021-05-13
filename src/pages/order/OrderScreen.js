import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import TakeOutOrder from './TakeOutOrder'
import OtherOrder from './OtherOrder'
import HistoryOrder from './HistoryOrder'

export default class OrderScreen extends Component {
    state = {
        active: 1
    }
    render() {
        return (
            <View style={{ flex: 1,marginTop:40 }}>
                {/* 1-顶部tab栏，搜索框跳转搜索界面 */}
                <View style={{ marginBottom:10,flexDirection: 'row', justifyContent: 'space-around',alignItems:'center' }}>
                    <TouchableOpacity style={{ borderBottomColor: this.state.active == 1 ? '#00CB88' : 'transparent',borderBottomWidth: this.state.active == 1 ? 4 : 0 }} onPress={() => { this.setState({ active: 1 }) }}>
                        <Text>外卖单</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderBottomColor: this.state.active == 2 ? '#00CB88' : 'transparent',borderBottomWidth: this.state.active == 2 ? 4 : 0 }} onPress={() => { this.setState({ active: 2 }) }}>
                        <Text>其他单</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderBottomColor: this.state.active == 3 ? '#00CB88' : 'transparent',borderBottomWidth: this.state.active == 3 ? 4 : 0 }} onPress={() => { this.setState({ active: 3 }) }}>
                        <Text>历史订单</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Search') }} style={{ flexDirection: 'row',alignItems:'center',backgroundColor:'#dcdcdc',padding:5,paddingLeft:15,paddingRight:15,borderRadius:15 }}>
                        <Image style={{ resizeMode: 'contain', width: 18, height: 18 }} source={require('../../assets/images/png/search.png')}></Image><Text>搜索</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1,marginTop:10 }}>
                    {this.state.active == 1 ? <TakeOutOrder></TakeOutOrder> : this.state.active == 2 ? <OtherOrder></OtherOrder> : <HistoryOrder></HistoryOrder>}
                </View>
            </View>
        )
    }
}

