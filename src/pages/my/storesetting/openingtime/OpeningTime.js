import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import ChooseWeek from './ChooseWeek'
import MyScrollPicker from '../../../../utils/MyScrollPicker'
import { NetPost } from '../../../../utils/request'
import { NetGet } from '../../../../utils/request'
import Storage from '../../../../utils/storage/storage'

export default class OpeningTime extends Component {
    state = {
        openingState: true,
        businessWeek: false,
        businessTime: true,
        choiceBusinessWeek: false,
        choiceBusinessTime: 0,
        timeLimit: false,
        cancelWeek: true,
        isshade: false,
        token: ''
    }
    componentDidMount() {
        Storage.load({
            key: 'loginState',
        }).then(ret => {
            this.setState({ token: ret.token });
            console.log(ret.token);
        }).catch(err => {
            console.log(err);
        })
        let data = {
            "open_time": [
                { "start_time": 300, "end_time": 600 },
                { "start_time": 900, "end_time": 1200 }
            ],
            'day_off': 2
        }
        // 发送设置时间的请求
        NetPost('/set_business_time/v2?query=1', data).then((res) => {
            // NetGet('/set_preparation_time/v2?preparation_time=15').then((res) => {
            console.log('---');
            console.log(res);
        }).catch(error => {
            console.log('+++');
            console.log(error);
        })
    }
    showMinPick = () => {
        this.setState({ isshade: true });
    }
    hideMinPick = () => {
        this.setState({ isshade: false });
    }
    changeBusiness = () => {
        this.setState({
            choiceBusinessWeek: false,
        })
    }
    changeBusinessWeek = () => {
        this.setState({
            choiceBusinessWeek: true,
        })
    }
    updateBusiness = () => {
        this.setState({
            businessTime: true,
            choiceBusinessTime: false,
        })
    }
    changeBusinessTime = () => {
        this.setState({
            businessTime: false,
        })
    }
    addTime = () => {
        if (this.state.choiceBusinessTime == 1 || this.state.choiceBusinessTime == 2) {
            this.setState({
                choiceBusinessTime: 2,
            })
            return
        }
        this.setState({
            choiceBusinessTime: 1,
        })
    }
    render() {
        let { businessWeek, choiceBusinessTime, choiceBusinessWeek, businessTime, openingState, cancelWeek } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: '#F8F8F9' }}>
                {/* 遮罩层 */}
                {
                    !this.state.isshade ? <></> :
                        <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', width: '100%', height: '100%', zIndex: 10, position: 'absolute', top: 0 }}>
                            <MyScrollPicker hide={this.hideMinPick}></MyScrollPicker>
                        </View>
                }
                <StatusBar
                    backgroundColor={this.state.isshade ? 'rgba(0,0,0,0.01)' : "#f8f8f9"}>
                </StatusBar>
                <View style={{
                    marginTop: 40, flexDirection: 'row', marginBottom: 20, marginHorizontal: 20,
                    justifyContent: 'space-between', alignItems: 'center',
                }}>
                    <TouchableOpacity style={{ padding: 10, paddingLeft: 0, paddingRight: 30 }} activeOpacity={1}
                        onPress={() => { this.props.navigation.goBack() }}>
                        <Image style={{ width: 10, height: 15, resizeMode: 'contain', }}
                            source={require('../../../../assets/images/png/sousuo_gengduo_icon.png')}></Image>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 19, fontWeight: 'bold' }}>营业时间</Text>
                    <View style={{ padding: 10, paddingLeft: 30, paddingRight: 0 }}>
                        <Image style={{ opacity: 0, width: 10, height: 15 }}
                            source={require('../../../../assets/images/png/sousuo_gengduo_icon.png')}></Image>
                    </View>
                </View>
                <ScrollView>
                    <View style={{ alignItems: 'center' }}>
                        <Image style={{ width: 96.5, height: 96.5 }} source={require('../../../../assets/images/png/dw-dianpukuang.png')}></Image>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#3F3C3C', paddingTop: 12, paddingBottom: 25 }}>盐忆</Text>
                    </View>
                    <View style={styles.container}>
                        {/* 1 */}
                        {openingState ?
                            <View style={{ backgroundColor: '#50e4a1', borderRadius: 20, paddingTop: 10, paddingBottom: 30, alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ backgroundColor: '#00cb88', width: 12, height: 12, borderWidth: 2, borderColor: '#ffffff', borderRadius: 6 }}></View>
                                    <Text style={{ fontSize: 18, color: '#5D5757', paddingLeft: 6 }}>营业中</Text>
                                </View>
                                <Text style={{ fontSize: 14, color: '#5D5757' }}>本店目前正常营业中</Text>
                            </View> :
                            <View style={{ backgroundColor: '#FD875C', borderRadius: 20, paddingTop: 10, paddingBottom: 30, alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ backgroundColor: '#ff6127', width: 12, height: 12, borderWidth: 2, borderColor: '#ffffff', borderRadius: 6 }}></View>
                                    <Text style={{ fontSize: 18, color: 'white', paddingLeft: 6 }}>歇业中</Text>
                                </View>
                                <Text style={{ fontSize: 14, color: 'white' }}>本店正在营业中</Text>
                            </View>}
                        {/* 2 */}
                        <View style={{ paddingTop: 25, paddingBottom: 25, paddingLeft: 23, paddingRight: 23, backgroundColor: 'white', borderRadius: 20, marginTop: -20, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#5D5757', fontSize: 17 }}>今日营业时间</Text>
                            <Text style={{ color: '#5D5757', fontSize: 15 }}>10:00～20:00</Text>
                        </View>
                        {/* 3 */}
                        <View style={{ paddingLeft: 23, paddingRight: 23, backgroundColor: 'white', borderRadius: 20, marginTop: 20.5 }}>
                            <View style={{ borderBottomColor: '#ECECEC', borderBottomWidth: 1, paddingTop: 23.5, paddingBottom: 15.5 }}>
                                <Text style={{ color: '#5D5757', fontSize: 17 }}>营业时间设置</Text>
                            </View>
                            {/* 3-1 */}
                            <View style={{ paddingTop: 14, paddingBottom: 14, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: choiceBusinessWeek ? 0 : 1, borderBottomColor: '#ECECEC' }} ref='choose'>
                                <Text style={styles.fontStyle}>营业日</Text>
                                <TouchableOpacity activeOpacity={1} style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 57, height: 20 }} onPress={this.changeBusiness}>
                                    {choiceBusinessWeek ? <Image source={require('../../../../assets/images/png/dw_xuanzhongquanquan.png')}></Image> : <View style={{ position: 'relative' }}>
                                        <Image source={require('../../../../assets/images/png/dw_xuanzhongquanquan.png')} ></Image>
                                        <Image source={require('../../../../assets/images/png/dw_shixinyuan.png')} style={{ width: 5, height: 5, position: 'absolute', left: 3.5, top: 3.5 }}></Image>
                                    </View>}
                                    <Text style={styles.fontStyle}>每日营业</Text>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={1} style={{ flexDirection: 'row', alignItems: 'center', height: 20 }} onPress={this.changeBusinessWeek}>
                                    {choiceBusinessWeek ?
                                        <View style={{ position: 'relative' }}>
                                            <Image source={require('../../../../assets/images/png/dw_xuanzhongquanquan.png')} ></Image>
                                            <Image source={require('../../../../assets/images/png/dw_shixinyuan.png')} style={{ width: 5, height: 5, position: 'absolute', left: 3.5, top: 3.5 }}></Image>
                                        </View> :
                                        <Image source={require('../../../../assets/images/png/dw_xuanzhongquanquan.png')}></Image>}
                                    <Text style={styles.fontStyle}>选择营业日</Text>
                                </TouchableOpacity>
                            </View>
                            {/* 星期的选择 */}
                            {choiceBusinessWeek ? <ChooseWeek></ChooseWeek> : <></>}
                            {/* 3-2 */}
                            <View style={{ paddingTop: 14, paddingBottom: 14, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.fontStyle}>营业时间段</Text>
                                <TouchableOpacity activeOpacity={1} onPress={this.updateBusiness} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    {!businessTime ?
                                        <Image source={require('../../../../assets/images/png/dw_xuanzhongquanquan.png')}></Image> :
                                        <View style={{ position: 'relative' }}>
                                            <Image source={require('../../../../assets/images/png/dw_xuanzhongquanquan.png')} ></Image>
                                            <Image source={require('../../../../assets/images/png/dw_shixinyuan.png')} style={{ width: 5, height: 5, position: 'absolute', left: 3.5, top: 3.5 }}></Image>
                                        </View>}
                                    <Text style={styles.fontStyle}>全天</Text>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={1} onPress={this.changeBusinessTime} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    {!businessTime ?
                                        <View style={{ position: 'relative' }}>
                                            <Image source={require('../../../../assets/images/png/dw_xuanzhongquanquan.png')} ></Image>
                                            <Image source={require('../../../../assets/images/png/dw_shixinyuan.png')} style={{ width: 5, height: 5, position: 'absolute', left: 3.5, top: 3.5 }}></Image>
                                        </View> :
                                        <Image source={require('../../../../assets/images/png/dw_xuanzhongquanquan.png')}></Image>}
                                    <Text style={styles.fontStyle}>选择时间段</Text>
                                </TouchableOpacity>
                            </View>
                            {/* 时间段的选择 */}
                            {choiceBusinessTime == 1 || choiceBusinessTime == 2 ? <View><Text style={{ fontSize: 14, color: '#5D5757' }}>最多可添加三项</Text></View> : <></>}
                            {!businessTime ?
                                <View style={{ height: 34.5, backgroundColor: '#E5E4E4', borderRadius: 15, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 20 }}>
                                    <TouchableOpacity onPress={this.showMinPick}>
                                        <Text style={{ fontSize: 15, color: '#5D5757' }}>10:30</Text>
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 15, color: '#5D5757' }}>至</Text>
                                    <TouchableOpacity onPress={this.showMinPick}>
                                        <Text style={{ fontSize: 15, color: '#5D5757' }}>21:30</Text>
                                    </TouchableOpacity>
                                </View> : <></>}
                            {choiceBusinessTime == 1 || choiceBusinessTime == 2 ? <TouchableOpacity onPress={this.showMinPick} style={{ height: 34.5, backgroundColor: '#E5E4E4', borderRadius: 15, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 20 }}>
                                <Text style={{ fontSize: 15, color: '#5D5757' }}>选择开始时间</Text>
                                <Text style={{ fontSize: 15, color: '#5D5757' }}>至</Text>
                                <Text style={{ fontSize: 15, color: '#5D5757' }}>选择结束时间</Text>
                            </TouchableOpacity> : <></>}
                            {choiceBusinessTime == 2 ? <TouchableOpacity onPress={this.showMinPick}
                                style={{ height: 34.5, backgroundColor: '#E5E4E4', borderRadius: 15, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginVertical: 20 }}>
                                <Text style={{ fontSize: 15, color: '#5D5757' }}>选择开始时间</Text>
                                <Text style={{ fontSize: 15, color: '#5D5757' }}>至</Text>
                                <Text style={{ fontSize: 15, color: '#5D5757' }}>选择结束时间</Text>
                            </TouchableOpacity> : <></>}
                            {choiceBusinessTime == 2 || businessTime ? <></> : <View style={{ alignItems: 'center', paddingBottom: 28, paddingTop: 28 }}>
                                <Text style={{ fontSize: 15, color: '#5D5757' }} onPress={this.addTime}>+新增时间段</Text>
                            </View>}
                        </View>
                        {/* 4 */}
                        <View style={{ paddingLeft: 23, paddingRight: 23, backgroundColor: 'white', borderRadius: 20, marginTop: 20.5 }}>
                            <View style={{ flexDirection: 'row', paddingTop: 21, paddingBottom: 17, alignItems: 'center' }}>
                                <Image source={require('../../../../assets/images/png/dw_xingxingicon.png')}></Image>
                                <Text style={{ fontSize: 17, color: '#5D5757', paddingLeft: 8 }}>外卖营业时间</Text>
                            </View>
                            <Text style={{ fontSize: 15, color: '#838181', paddingBottom: 24.5 }}>外卖业务营业时间默认为开店后半小时至关店前半小时，您可以随时在“门店设置”页面选择开启或关闭外卖业务～</Text>
                        </View>
                        <View style={{ marginVertical: 29, backgroundColor: '#FF6127', height: 44, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                            <Text style={{ fontSize: 17, color: 'white' }}>确认修改</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )

    }
}
const styles = StyleSheet.create({
    container: {
        marginLeft: 18,
        marginRight: 17.5,
        flex: 1
    },
    fontStyle: {
        fontSize: 14,
        color: '#5D5757',
        paddingLeft: 2
    },
})