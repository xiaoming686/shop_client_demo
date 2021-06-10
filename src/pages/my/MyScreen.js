import React, { Component } from 'react'
import { Image, TouchableOpacity, View, Text } from 'react-native'
import MyLogout from '../../utils/mytoast/myLogout'


export default class MyScreen extends Component {
    state = {
        isShowMyLogout: false
    }
    logout = () => {
        this.setState({ isShowMyLogout: true });
    }
    ensureMyToast = () => {
        // this.setState({ isShowMyLogin: false });
        this.props.navigation.replace('Login')
    }
    cancelMyToast = () => {
        this.setState({ isShowMyLogout: false });
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#f8f8f9', }}>
                {/* 1 */}
                <View style={{ marginTop: 40, marginBottom: -75, zIndex: 99, alignItems: 'center' }}>
                    <Image style={{ width: 97, height: 97, resizeMode: 'contain' }}
                        source={require('../../assets/images/png/dw-dianpukuang.png')}></Image>
                    <Text style={{ fontSize: 22, color: '#3f3c3c', marginTop: 12 }}>盐忆</Text>
                </View>
                {/* 2 */}
                <View style={{
                    backgroundColor: '#ffffff', paddingHorizontal: 20, marginHorizontal: 20,
                    borderRadius: 15, paddingTop: 110, paddingBottom: 33
                }}>
                    <TouchableOpacity onPress={() => { this.props.navigation.push('StoreSetting') }} activeOpacity={1}
                        style={{ alignItems: 'center', paddingVertical: 22, justifyContent: 'space-between', flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#ececec' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={{ width: 18, height: 18, resizeMode: 'contain', marginTop: 2 }}
                                source={require('../../assets/images/png/dw_mendiantubiao.png')}></Image>
                            <Text style={{ marginLeft: 5, fontSize: 18 }}>门店设置</Text>
                        </View>
                        <Image style={{ width: 8, height: 12, resizeMode: 'contain', }} source={require('../../assets/images/png/gr_gengduo_icon1.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.props.navigation.push('OrderSetting') }} activeOpacity={1}
                        style={{ paddingVertical: 22, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#ececec' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={{ width: 18, height: 18, resizeMode: 'contain', marginTop: 2 }}
                                source={require('../../assets/images/png/dw_dingdanicon.png')}></Image>
                            <Text style={{ marginLeft: 5, fontSize: 18 }}>订单设置</Text>
                        </View>
                        <Image style={{ width: 8, height: 12, resizeMode: 'contain', }}
                            source={require('../../assets/images/png/gr_gengduo_icon1.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.props.navigation.push('Language') }} activeOpacity={1}
                        style={{ paddingVertical: 22, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#ececec' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={{ width: 18, height: 18, resizeMode: 'contain' }}
                                source={require('../../assets/images/png/dw_yuyanqiehuan.png')}></Image>
                            <Text style={{ marginLeft: 5, fontSize: 18 }}>语言切换</Text>
                        </View>
                        <Image style={{ width: 8, height: 12, resizeMode: 'contain', }}
                            source={require('../../assets/images/png/gr_gengduo_icon1.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.props.navigation.push('Agreement') }} activeOpacity={1}
                        style={{ paddingVertical: 22, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#ececec' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={{ width: 18, height: 18, resizeMode: 'contain', marginTop: 3 }}
                                source={require('../../assets/images/png/dw_hetongicon.png')}></Image>
                            <Text style={{ marginLeft: 5, fontSize: 18 }}>合同协议</Text>
                        </View>
                        <Image style={{ width: 8, height: 12, resizeMode: 'contain', }}
                            source={require('../../assets/images/png/gr_gengduo_icon1.png')}></Image>
                    </TouchableOpacity>
                    <View style={{ paddingVertical: 22, flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{ width: 18, height: 18, resizeMode: 'contain', marginTop: 3 }}
                            source={require('../../assets/images/png/dw_wodicon.png')}></Image>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', flex: 1 }}>
                            <Text style={{ marginLeft: 5, fontSize: 18 }}>当前账号</Text>
                            <Text style={{ fontSize: 13, color: '#938f8f' }}>今天就要点外卖</Text>
                        </View>
                    </View>
                    {/* 3退出登录以及弹窗 */}
                    <TouchableOpacity
                        activeOpacity={1}
                        style={{
                            marginTop: 22, height: 34.5, backgroundColor: '#00cb88', borderRadius: 15, justifyContent: 'center', alignItems: 'center'
                        }}
                        onPress={this.logout}>
                        <Text style={{ color: '#ffffff', fontSize: 17 }}>退出登录</Text>
                    </TouchableOpacity>
                    <MyLogout
                        content='退出后将无法收到订单信息，是否确认退出登录？'
                        confirm={this.ensureMyToast}
                        cancel={this.cancelMyToast}
                        visible={this.state.isShowMyLogout} />
                </View>
            </View>
        )
    }
}
