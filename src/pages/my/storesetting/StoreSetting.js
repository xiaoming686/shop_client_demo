import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default class StoreSetting extends Component {
    state = {
        isShow: false
    }
    choice = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    render() {
        let { isShow } = this.state
        return (
            <View style={{ flex: 1, backgroundColor: '#F8F8F9' }}>
                <View style={styles.container}>
                    <View style={styles.item}>
                        <Text style={styles.font}>营业状态 <Text style={{ fontSize: 14, color: '#5D5757' }}>(食堂/自提)</Text></Text>
                        <View style={{ width: 77, height: 28.5, backgroundColor: '#00CB88', borderRadius: 14, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 25, right: 0 }}>
                            <TouchableOpacity onPress={this.choice} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: 'white', fontSize: 15, paddingRight: 2 }}>营业中</Text>
                                <Image source={require('../../../assets/images/png/dw_sanjiaoicon.png')}></Image>
                            </TouchableOpacity>
                            {isShow ? <View style={{ width: 77, height: 28.5, backgroundColor: '#FF6127', borderRadius: 14, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 33, right: 0 }}><Text style={{ color: 'white', fontSize: 15, paddingRight: 2 }}>歇业中</Text></View> : <></>}
                        </View>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.font}>营业状态<Text style={{ fontSize: 14, color: '#5D5757' }}>(外卖)</Text></Text>
                        <View style={{ width: 77, height: 28.5, backgroundColor: '#00CB88', borderRadius: 14, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 25, right: 0 }}>
                            <TouchableOpacity onPress={this.choice} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: 'white', fontSize: 15, paddingRight: 2 }}>营业中</Text>
                                <Image source={require('../../../assets/images/png/dw_sanjiaoicon.png')}></Image>
                            </TouchableOpacity>
                            {isShow ? <View style={{ width: 77, height: 28.5, backgroundColor: '#FF6127', borderRadius: 14, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 33, right: 0 }}><Text style={{ color: 'white', fontSize: 15, paddingRight: 2 }}>歇业中</Text></View> : <></>}
                        </View>
                    </View>
                    <TouchableOpacity style={styles.item} onPress={() => { this.props.navigation.push('OpeningTime') }} activeOpacity={1}>
                        <Text style={styles.font}>营业时间</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: '#838181', fontSize: 15, paddingRight: 7 }}>10:00～20:00</Text>
                            <Image source={require('../../../assets/images/png/dy_gengduoicon.png')}></Image>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => { this.props.navigation.push('CheckTime') }} activeOpacity={1}>
                        <Text style={styles.font}>核销时间</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: '#838181', fontSize: 15, paddingRight: 7 }}>20:00</Text>
                            <Image source={require('../../../assets/images/png/dy_gengduoicon.png')}></Image>
                        </View>
                    </TouchableOpacity>
                    <View style={[styles.item, { borderBottomWidth: 0 }]}>
                        <Text style={styles.font}>经营品类 </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: '#838181', fontSize: 15, paddingRight: 7 }}>川菜</Text>
                            <Image source={require('../../../assets/images/png/dy_gengduoicon.png')}></Image>
                        </View>
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
        paddingLeft: 17.5,
        paddingRight: 22,
        borderRadius: 20,
        position: 'relative'
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
