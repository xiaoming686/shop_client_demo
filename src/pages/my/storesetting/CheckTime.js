
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar } from "react-native"
import Picker from 'react-native-picker'
import React, { Component } from 'react'

export default class CheckTime extends Component {
    state = {
        isshade: false,
        minutes: [[1, 2, 3, 4, 5, 6, 7], [11, 22, 33, 44, 55, 66, 77]],
    }
    showMinPick = () => {
        this.setState({ isshade: true });
        Picker.init({
            pickerData: this.state.minutes,
            selectedValue: [4, 44],
            pickerToolBarHeight: 150,
            pickerTitleText: '设置核销时间',
            pickerToolBarFontSize: 18,
            pickerConfirmBtnText: '×',
            pickerCancelBtnText: '',
            pickerCancelBtnColor: [0, 0, 0, 1],
            pickerToolBarBg: [255, 255, 255, 1],
            pickerBg: [255, 255, 255, 1],
            onPickerConfirm: data => {
                console.log(data);
                this.setState({ isshade: false });
            },
            onPickerCancel: data => {
                this.setState({ isshade: false });
                console.log(data);
            },
            onPickerSelect: data => {
                console.log(data);
            }
        });
        Picker.show();
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F8F8F9' }}>
                {/* 遮罩层 */}
                {
                    !this.state.isshade ? <></> :
                        <TouchableOpacity
                            onPress={() => { this.setState({ isshade: false }); Picker.hide() }}
                            style={{ backgroundColor: 'rgba(0,0,0,0.5)', width: '100%', height: '100%', zIndex: 10, position: 'absolute', top: 0 }}>
                        </TouchableOpacity>
                }
                <StatusBar
                    backgroundColor={this.state.isshade ? 'rgba(0,0,0,0.01)' : "#f8f8f9"}>
                </StatusBar>
                <View style={{ marginTop: 50, flexDirection: 'row', marginBottom: 20, marginHorizontal: 20, justifyContent: 'space-between', alignItems: 'center', }}>
                    <TouchableOpacity style={{ padding: 10, paddingLeft: 0 }} activeOpacity={1} onPress={() => { this.props.navigation.goBack() }}>
                        <Image style={{ width: 10, height: 15, resizeMode: 'contain', }} source={require('../../../assets/images/png/sousuo_gengduo_icon.png')}></Image>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 19, fontWeight: 'bold' }}>核销时间</Text>
                    <View style={{ padding: 10, paddingLeft: 0 }}>
                        <Image style={{ opacity: 0, width: 10, height: 15 }} source={require('../../../assets/images/png/sousuo_gengduo_icon.png')}></Image>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.item}>
                        <Text style={{ color: '#5D5757', fontSize: 18, fontWeight: '700' }}>核销时间</Text>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={this.showMinPick}
                            style={{ width: 77, height: 28.5, backgroundColor: '#E5E4E4', borderRadius: 14, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: '#2A2A2A', fontSize: 15 }}>20:00</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.item, { borderBottomWidth: 0 }]}>
                        <Text style={{ color: '#838181', fontSize: 15, lineHeight: 20 }}>核销时间：堂食、自提订单在订单页自动刷新的时间点。</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginLeft: 18.5,
        marginRight: 18.5,
        paddingLeft: 23,
        paddingRight: 16.5,
        borderRadius: 20
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 23.5,
        paddingBottom: 23.5,
        borderBottomWidth: 1,
        borderStyle: 'dotted',
        borderBottomColor: '#ECECEC'
    }
})