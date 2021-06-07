import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, Alert,BackHandler } from 'react-native';
import TakeOutOrder from './TakeOutOrder'
import OtherOrder from './OtherOrder'
import HistoryOrder from './HistoryOrder'
import I18n from '../../utils/languages/languages'

export default class OrderScreen extends Component {
    state = {
        active: 1
    }
    render() {
        return (
            <View style={{ flex: 1, paddingTop: 50, backgroundColor: '#f8f8f9' }}>
                {/* 1-顶部tab栏，搜索框跳转搜索界面 */}
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                    <TouchableOpacity style={{ borderBottomColor: this.state.active == 1 ? '#00CB88' : 'transparent', borderBottomWidth: this.state.active == 1 ? 4 : 0 }} onPress={() => { this.setState({ active: 1 }) }}>
                        <Text style={{ color: this.state.active == 1 ? '#3f3c3c' : '#989897',fontSize:17 }}>{I18n.t('takeout')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderBottomColor: this.state.active == 2 ? '#00CB88' : 'transparent', borderBottomWidth: this.state.active == 2 ? 4 : 0 }} onPress={() => { this.setState({ active: 2 }) }}>
                        <Text style={{ color: this.state.active == 2 ? '#3f3c3c' : '#989897',fontSize:17 }}>其他</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderBottomColor: this.state.active == 3 ? '#00CB88' : 'transparent', borderBottomWidth: this.state.active == 3 ? 4 : 0 }} onPress={() => { this.setState({ active: 3 }) }}>
                        <Text style={{ color: this.state.active == 3 ? '#3f3c3c' : '#989897',fontSize:17 }}>历史</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Search') }} style={{ alignItems: 'center', backgroundColor: '#e5e5e4', width: 60, height: 28.5, borderRadius: 15,justifyContent:'center' }}>
                        <Image style={{ resizeMode: 'contain', width: 14, height: 14, }} source={require('../../assets/images/png/search.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, marginTop: 20 }}>
                    {this.state.active == 1 ? <TakeOutOrder props={this.props}></TakeOutOrder> : this.state.active == 2 ? <OtherOrder props={this.props}></OtherOrder> : <HistoryOrder props={this.props}></HistoryOrder>}
                </View>
            </View>
        )
    }
}

