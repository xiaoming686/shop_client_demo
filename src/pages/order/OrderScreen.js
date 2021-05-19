import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, Alert,BackHandler } from 'react-native';
import TakeOutOrder from './TakeOutOrder'
import OtherOrder from './OtherOrder'
import HistoryOrder from './HistoryOrder'

export default class OrderScreen extends Component {
    state = {
        active: 1
    }
    render() {
        return (
            <View style={{ flex: 1, paddingTop: 50, backgroundColor: '#f8f8f9' }}>
                {/* 1-顶部tab栏，搜索框跳转搜索界面 */}
                <View style={{ width: 320, marginLeft: 25, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                    <TouchableOpacity style={{ borderBottomColor: this.state.active == 1 ? '#00CB88' : 'transparent', borderBottomWidth: this.state.active == 1 ? 4 : 0 }} onPress={() => { this.setState({ active: 1 }) }}>
                        <Text style={{ color: this.state.active == 1 ? '#3f3c3c' : '#989897', }}>外卖单</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderBottomColor: this.state.active == 2 ? '#00CB88' : 'transparent', borderBottomWidth: this.state.active == 2 ? 4 : 0 }} onPress={() => { this.setState({ active: 2 }) }}>
                        <Text style={{ color: this.state.active == 2 ? '#3f3c3c' : '#989897', }}>其他单</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderBottomColor: this.state.active == 3 ? '#00CB88' : 'transparent', borderBottomWidth: this.state.active == 3 ? 4 : 0 }} onPress={() => { this.setState({ active: 3 }) }}>
                        <Text style={{ color: this.state.active == 3 ? '#3f3c3c' : '#989897', }}>历史订单</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Search') }} style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#e5e5e4', width: 90, height: 28.5, marginLeft: 30, borderRadius: 15 }}>
                        <Image style={{ resizeMode: 'contain', width: 14, height: 14, marginLeft: 22 }} source={require('../../assets/images/png/search.png')}></Image><Text style={{ color: '#a09e9e', marginLeft: 5 }}>搜索</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, marginTop: 28.5 }}>
                    {this.state.active == 1 ? <TakeOutOrder></TakeOutOrder> : this.state.active == 2 ? <OtherOrder></OtherOrder> : <HistoryOrder props={this.props}></HistoryOrder>}
                </View>
            </View>
        )
    }
}

