import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default class BusinessCategory extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F8F8F9' }}>
                <View style={{ marginTop: 50, flexDirection: 'row', marginBottom: 20, marginHorizontal: 20, justifyContent: 'space-between', alignItems: 'center', }}>
                    <TouchableOpacity style={{ padding: 10, paddingLeft: 0 }} activeOpacity={1} onPress={() => { this.props.navigation.goBack() }}>
                        <Image style={{ width: 10, height: 15, resizeMode: 'contain', }} source={require('../../../../assets/images/png/sousuo_gengduo_icon.png')}></Image>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 19, fontWeight: 'bold' }}>经营品类</Text>
                    <View style={{ padding: 10, paddingLeft: 0 }}>
                        <Image style={{ opacity: 0, width: 10, height: 15 }} source={require('../../../../assets/images/png/sousuo_gengduo_icon.png')}></Image>
                    </View>
                </View>
                <View style={{ backgroundColor: '#ffffff', paddingVertical: 20, borderRadius: 15, paddingHorizontal: 20, margin: 20, marginTop: 10 }}>
                    <Text style={{ fontSize: 18, color: '#5d5757' }}>审核须知</Text>
                    <View style={{ alignItems: 'baseline', justifyContent: 'space-between', paddingTop: 23, marginTop: 24, borderTopWidth: 1, borderColor: '#ececec' }}>
                        <Text style={{ fontSize: 15, color: '#5d5757' }}>经营品类每月仅允许修改3次，请谨慎修改</Text>
                        <Text style={{ fontSize: 15, color: '#5d5757', marginTop: 18 }}>主营业务必填，辅营业务选填</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: '#ffffff', margin: 20, marginTop: 0, paddingVertical: 20, borderRadius: 15, paddingHorizontal: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', }}>
                        <Text style={{ fontSize: 18, color: '#5d5757' }}>主营品类</Text>
                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} activeOpacity={1} onPress={() => { this.props.navigation.push('MainCategory') }}>
                            <Text style={{ fontSize: 15, color: '#838181' }}>中式菜肴-北京料理</Text>
                            <Image style={{ width: 8, height: 12, resizeMode: 'contain',marginLeft:5 }} source={require('../../../../assets/images/png/gr_gengduo_icon1.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', paddingTop: 19, marginTop: 20, borderTopWidth: 1, borderColor: '#ececec' }}>
                        <Text style={{ fontSize: 18, color: '#5d5757' }}>辅营品类</Text>
                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} activeOpacity={1} onPress={() => { this.props.navigation.push('MainCategory') }}>
                            <Text style={{ fontSize: 15, color: '#838181' }}>无</Text>
                            <Image style={{ width: 8, height: 12, resizeMode: 'contain',marginLeft:5 }} source={require('../../../../assets/images/png/gr_gengduo_icon1.png')}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    fontStyle: {
        fontSize: 18,
        color: '#5D5757',
    },
    container: {
        paddingTop: 13,
        paddingBottom: 13,
        alignItems: 'center'
    }
})