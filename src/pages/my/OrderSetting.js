import React, { Component } from 'react'
import { View, Text, Switch, TouchableOpacity, Modal, StatusBar, Image, ScrollView } from 'react-native'
import Picker from 'react-native-picker'
import EventBus from 'react-native-event-bus'

export default class OrderSetting extends Component {
  // <Text style={{ backgroundColor: '#ececec', padding: 3, borderRadius: 15, paddingHorizontal: 10, fontSize: 15 }}>今天</Text>
  // <Text style={{ marginHorizontal: 5, fontSize: 15 }}>~</Text>
  // <View>
  //   {/* 2-1今日明日弹出框 */}
  //   <TouchableOpacity onPress={() => { this.setState({ clickToday: !this.state.clickToday }) }}>
  //     <Text style={{
  //       backgroundColor: '#00cb88', padding: 3, borderRadius: 15,
  //       paddingHorizontal: 10, color: '#ffffff', fontSize: 15
  //     }}>{this.state.clickTomorrow ? '明天' : '今天'}</Text>
  //   </TouchableOpacity>
  //   {
  //     this.state.clickToday ?
  //       <TouchableOpacity
  //         style={{ position: 'absolute', top: 28 }}
  //         onPress={() => { this.setState({ clickTomorrow: !this.state.clickTomorrow, clickToday: !this.state.clickToday }) }}>
  //         <Text style={{
  //           backgroundColor: '#00cb88', padding: 3, borderRadius: 15,
  //           paddingHorizontal: 10, color: '#ffffff', fontSize: 15
  //         }}>{this.state.clickTomorrow ? '今天' : '明天'}</Text>
  //       </TouchableOpacity>
  //       :
  //       <></>
  //   }
  // </View>
  //   <TouchableOpacity
  //   activeOpacity={1}
  //   onPress={() => { this.setState({ clickHour: !this.state.clickHour }) }}
  //   style={{ backgroundColor: '#00cb88', width: 104, height: 28, borderRadius: 15, alignItems: 'center' }}>
  //   <Text style={{ fontSize: 15, color: '#ffffff', lineHeight: 28 }}>{this.state.pickhour[this.state.clickHourItem - 1].hour}</Text>
  // </TouchableOpacity>
  // {
  //   this.state.clickHour ?
  //     <View style={{
  //       position: 'absolute', top: 30, zIndex: 10, borderRadius: 15,
  //       backgroundColor: '#e5e4e4', width: 104, height: 180,
  //     }}>
  //       <ScrollView showsVerticalScrollIndicator={false}>
  //         {
  //           this.state.pickhour.map((item) => {
  //             return (
  //               <TouchableOpacity onPress={() => { this.setState({ clickHourItem: item.id, clickHour: false }) }}
  //                 activeOpacity={1} key={item.id}>
  //                 <Text style={{
  //                   fontSize: 15, alignSelf: 'center',
  //                   color: this.state.clickHourItem == item.id ? '#000000' : '#9d9b9b', lineHeight: 28
  //                 }}>{item.hour}</Text>
  //               </TouchableOpacity>
  //             )
  //           })
  //         }
  //       </ScrollView>
  //     </View>
  //     :
  //     <></>
  // }
  state = {
    isshade: false,
    swichbar: true,
    minutes: [],
    choosemin: '15分钟',
    pickday:['今天','明天'],
    chooseday: '今天',
    pickhour: ['15分钟','30分钟','45分钟','1小时','1小时15分钟','1小时30分钟','1小时45分钟','2小时','2小时15分钟','2小时30分钟','2小时45分钟','3小时'],
    choosehour: '15分钟',
    chooseTomorrow:false,
    isTomorrow:false
  }
  componentDidMount() {
    for (var i = 5; i < 31; i++) {
      this.state.minutes.push(i + '分钟')
    }
  }
  chooseTomorrow = ()=>{
    this.setState({
      chooseTomorrow:!this.state.chooseTomorrow,
    })
  }
  isTomorrow = ()=>{
    this.setState({
      isTomorrow:!this.state.isTomorrow,
      chooseTomorrow:!this.state.chooseTomorrow
    })
  }
  showMinPick = () => {
    this.setState({ isshade: true });
    Picker.init({
      pickerData: this.state.minutes,
      pickerToolBarHeight: 150,
      pickerFontSize: 17,
      selectedValue: [15+'分钟'],
      pickerTitleText: '',
      pickerConfirmBtnText: '确定',
      pickerCancelBtnText: '取消',
      pickerCancelBtnColor: [0, 0, 0, 1],
      pickerToolBarBg: [255, 255, 255, 1],
      pickerBg: [255, 255, 255, 1],
      onPickerConfirm: data => {
        console.log(data);
        this.setState({ isshade: false, choosemin: data });
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
  showHourPick = () => {
    this.setState({ isshade: true });
    Picker.init({
      pickerData: this.state.pickhour,
      pickerToolBarHeight: 150,
      pickerFontSize: 17,
      selectedValue: ['15分钟'],
      pickerTitleText: '',
      pickerConfirmBtnText: '确定',
      pickerCancelBtnText: '取消',
      pickerCancelBtnColor: [0, 0, 0, 1],
      pickerToolBarBg: [255, 255, 255, 1],
      pickerBg: [255, 255, 255, 1],
      onPickerConfirm: data => {
        console.log(data);
        this.setState({ isshade: false, choosehour: data });
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
  showDayPick = () => {
    this.setState({ isshade: true });
    Picker.init({
      pickerData: this.state.pickday,
      pickerToolBarHeight: 150,
      pickerFontSize: 17,
      selectedValue: ['15分钟'],
      pickerTitleText: '',
      pickerConfirmBtnText: '确定',
      pickerCancelBtnText: '取消',
      pickerCancelBtnColor: [0, 0, 0, 1],
      pickerToolBarBg: [255, 255, 255, 1],
      pickerBg: [255, 255, 255, 1],
      onPickerConfirm: data => {
        console.log(data);
        this.setState({ isshade: false, chooseday: data });
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
      <View style={{ backgroundColor: '#f8f8f9', flex: 1, }}>
        {/* 遮罩层 */}
        {
          !this.state.isshade ? <></> :
            <TouchableOpacity
              onPress={() => { this.setState({ isshade: false }); Picker.hide() }}
              style={{ backgroundColor: 'rgba(0,0,0,0.5)', width: '100%', height: '100%', zIndex: 10, position: 'absolute', top: 0 }}>
            </TouchableOpacity>
        }
        {/* 状态栏和头部 */}
        <StatusBar
          backgroundColor={this.state.isshade ? 'rgba(0,0,0,0.01)' : "#f8f8f9"}>
        </StatusBar>
        <View style={{
          marginTop: 40, flexDirection: 'row', marginBottom: 20, marginHorizontal: 20,
          justifyContent: 'space-between', alignItems: 'center',
        }}>
          <TouchableOpacity style={{ padding: 10, paddingLeft: 0, paddingRight: 30 }} activeOpacity={1} onPress={() => { this.props.navigation.goBack() }}>
            <Image style={{ width: 10, height: 15, resizeMode: 'contain', }}
              source={require('../../assets/images/png/sousuo_gengduo_icon.png')}></Image>
          </TouchableOpacity>
          <Text style={{ fontSize: 19, fontWeight: 'bold' }}>订单设置</Text>
          <View style={{ padding: 10, paddingLeft: 30, paddingRight: 0 }}>
            <Image style={{ opacity: 0, width: 10, height: 15 }} source={require('../../assets/images/png/sousuo_gengduo_icon.png')}></Image>
          </View>
        </View>
        {/* 0-时间选择器 */}
        <View style={{ backgroundColor: '#ffffff', marginHorizontal: 15, paddingVertical: 20, borderRadius: 15, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 18, color: '#5d5757' }}>出餐时间设置</Text>
          <Text style={{ fontSize: 15, color: '#838181', marginTop: 5 }}>出餐时间：即接单后到备餐完成的时间</Text>
          <View style={{
            flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between',
            paddingTop: 10, marginTop: 10, borderTopWidth: 1, borderColor: '#ececec'
          }}>
            <Text style={{ fontSize: 18, color: '#5d5757' }}>承诺出餐时间</Text>
            <TouchableOpacity activeOpacity={1} onPress={this.showMinPick} style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 15, color: '#5d5757' }}>{this.state.choosemin}</Text>
              <Image style={{ width: 8, height: 12, resizeMode: 'contain', marginLeft: 5 }}
                source={require('../../assets/images/png/gr_gengduo_icon1.png')}></Image>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{
          backgroundColor: '#ffffff', marginHorizontal: 15, paddingVertical: 20,
          borderRadius: 15, paddingHorizontal: 20, marginTop: 22
        }}>
          {/* 1 */}
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <View> 
            <Text style={{ fontSize: 18, color: '#5d5757' }}>预订单设置</Text>
            <Text style={{ fontSize: 16, color: '#5d5757' }}>休息时间支持预定</Text>
          </View>
            <TouchableOpacity style={{
              width: 50, height: 26, backgroundColor: this.state.swichbar ? '#00cb88' : '#9D9B9B',
              borderRadius: 20, justifyContent: 'center', paddingHorizontal: 0.5
            }}
              activeOpacity={1}
              onPress={() => { this.setState({ swichbar: !this.state.swichbar }); }}>
              <View style={{
                width: 23, height: 23, backgroundColor: '#ffffff', borderRadius: 25,
                alignSelf: this.state.swichbar ? 'flex-end' : 'flex-start'
              }}></View>
            </TouchableOpacity>
          </View>
          {/* 2 */}
          <View style={{ marginVertical: 10, paddingVertical: 26, borderBottomWidth: 1, borderTopWidth: 1, borderColor: '#ececec', flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={{ fontSize: 18, color: '#5d5757' }}>商家接受预定日期</Text>
              <Text style={{ fontSize: 15, color: '#838181', marginTop: 5 }}>公休日不接单</Text>
            </View>
            <View  style={{ flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{ fontSize: 15, color: '#5d5d57' }}>今天</Text>
              <Text style={{ fontSize: 15, marginHorizontal: 10 }}>~</Text>
              <View>
              <TouchableOpacity onPress={this.chooseTomorrow} style={{alignItems:'center',justifyContent:'center',width:77,height:30,borderRadius:10,backgroundColor:'#00CB88'}}>
                <Text style={{ fontSize: 15,color:'white'}}>{this.state.isTomorrow ? '明天' :'今天'} ></Text>
              </TouchableOpacity>
              {this.state.chooseTomorrow ? <TouchableOpacity onPress={this.isTomorrow} style={{alignItems:'center',justifyContent:'center',width:77,height:30,borderRadius:10,backgroundColor:'#00CB88',position:'absolute',top:33}}><Text style={{ fontSize: 15,color:'white',zIndex:99}}>{!this.state.isTomorrow ? '明天' :'今天'}</Text></TouchableOpacity>:<></> }
              </View>
            </View>
          </View>
          {/* 3-小时选择框需要动画 */}
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View>
              <Text style={{ fontSize: 18, color: '#5d5757' }}>预定单提醒时间</Text>
              <Text style={{ fontSize: 15, color: '#838181', marginTop: 5 }}>您希望提前多久提醒</Text>
            </View>
            <TouchableOpacity activeOpacity={1} onPress={this.showHourPick} style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 15, color: '#5d5d57' }}>{this.state.choosehour}</Text>
              <Image style={{ width: 8, height: 12, resizeMode: 'contain', marginLeft: 10 }}
                source={require('../../assets/images/png/gr_gengduo_icon1.png')}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View >
    )
  }
}
