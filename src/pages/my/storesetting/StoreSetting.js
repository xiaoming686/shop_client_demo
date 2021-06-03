import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default class StoreSetting extends Component {
    state = {
        inside: false,
        insidestop: false,
        takeout: false,
        takeoutstop: false
    }
    render() {
        let { isShow } = this.state
        return (
            <View style={{ flex: 1, backgroundColor: '#F8F8F9' }}>
                <View style={{ marginTop: 50, flexDirection: 'row', marginBottom: 20, marginHorizontal: 20, justifyContent: 'space-between', alignItems: 'center', }}>
                    <TouchableOpacity style={{ padding: 10, paddingLeft: 0 }} activeOpacity={1} onPress={() => { this.props.navigation.goBack() }}>
                        <Image style={{ width: 10, height: 15, resizeMode: 'contain', }} source={require('../../../assets/images/png/sousuo_gengduo_icon.png')}></Image>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 19, fontWeight: 'bold' }}>门店设置</Text>
                    <View style={{ padding: 10, paddingLeft: 0 }}>
                        <Image style={{ opacity: 0, width: 10, height: 15 }} source={require('../../../assets/images/png/sousuo_gengduo_icon.png')}></Image>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.checkitem}>
                        <Text style={styles.font}>营业状态 <Text style={{ fontSize: 14, color: '#5D5757' }}>(食堂/自提)</Text></Text>
                        <View>
                            {/* 2-1营业中弹出框 */}
                            <TouchableOpacity activeOpacity={1} style={{ backgroundColor: this.state.insidestop ? '#FF6127' : '#00CB88', width: 77, height: 28, borderRadius: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} onPress={() => { this.setState({ inside: !this.state.inside }) }}>
                                <Text style={{ color: '#ffffff', fontSize: 15, }}>{this.state.insidestop ? '歇业中' : '营业中'}</Text>
                                <Image source={require('../../../assets/images/png/dw_sanjiaoicon.png')}></Image>
                            </TouchableOpacity>
                            {
                                this.state.inside ?
                                    <TouchableOpacity activeOpacity={1} style={{ position: 'absolute', top: 30 }} onPress={() => { this.setState({ insidestop: !this.state.insidestop, inside: !this.state.inside }) }}>
                                        <Text style={{ backgroundColor: !this.state.insidestop ? '#FF6127' : '#00CB88', borderRadius: 15, color: '#ffffff', fontSize: 15, width: 77, height: 28, lineHeight: 28, textAlign: 'center' }}>{this.state.insidestop ? '营业中' : '歇业中'}</Text>
                                    </TouchableOpacity>
                                    :
                                    <></>
                            }
                        </View>
                    </View>
                    <View style={styles.checkitem}>
                        <Text style={styles.font}>营业状态 <Text style={{ fontSize: 14, color: '#5D5757' }}>(外卖)</Text></Text>
                        <View>
                            {/* 2-1营业中弹出框 */}
                            <TouchableOpacity activeOpacity={1} style={{ backgroundColor: this.state.takeoutstop ? '#FF6127' : '#00CB88', width: 77, height: 28, borderRadius: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} onPress={() => { this.setState({ takeout: !this.state.takeout }) }}>
                                <Text style={{ color: '#ffffff', fontSize: 15, }}>{this.state.takeoutstop ? '歇业中' : '营业中'}</Text>
                                <Image source={require('../../../assets/images/png/dw_sanjiaoicon.png')}></Image>
                            </TouchableOpacity>
                            {
                                this.state.takeout ?
                                    <TouchableOpacity activeOpacity={1} style={{ position: 'absolute', top: 30 }} onPress={() => { this.setState({ takeoutstop: !this.state.takeoutstop, takeout: !this.state.takeout }) }}>
                                        <Text style={{ backgroundColor: !this.state.takeoutstop ? '#FF6127' : '#00CB88', borderRadius: 15, color: '#ffffff', fontSize: 15, width: 77, height: 28, lineHeight: 28, textAlign: 'center' }}>{this.state.takeoutstop ? '营业中' : '歇业中'}</Text>
                                    </TouchableOpacity>
                                    :
                                    <></>
                            }
                        </View>
                    </View>
                    <View style={{borderBottomWidth:1,borderColor:'#ECECEC',paddingVertical:20}} >
                        <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between'}} onPress={() => { this.props.navigation.push('OpeningTime') }} activeOpacity={1}>
                            <Text style={styles.font}>营业时间</Text>
                            <View style={{ flexDirection: 'row',alignItems:'center' }}>
                                <Text style={{ color: '#838181', fontSize: 15, paddingRight: 7 }}>10:00～20:00</Text>
                                <Image style={{ width: 8, height: 12, resizeMode: 'contain' }} source={require('../../../assets/images/png/gr_gengduo_icon1.png')}></Image>
                            </View>
                        </TouchableOpacity>
                        <Text style={{ color: '#838181', fontSize: 15, paddingRight: 7,alignSelf:'flex-end' }}>[周二休息]</Text>
                    </View>
                    <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.push('BusinessCategory') }} style={[styles.item, { borderBottomWidth: 0 }]}>
                        <Text style={styles.font}>经营品类 </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: '#838181', fontSize: 15, paddingRight: 7 }}>川菜</Text>
                            <Image style={{ width: 8, height: 12, resizeMode: 'contain' }} source={require('../../../assets/images/png/gr_gengduo_icon1.png')}></Image>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginHorizontal: 17,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        position: 'relative'
    },
    checkitem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderStyle: 'dotted',
        borderBottomColor: '#ECECEC',
        height: 88,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderStyle: 'dotted',
        borderBottomColor: '#ECECEC',
        height: 67.5,
    },
    font: {
        color: '#5D5757',
        fontSize: 17,
        fontWeight: "600"
    }

})
