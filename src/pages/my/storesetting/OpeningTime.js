
import React, { Component } from 'react'
import { Text, View,Image,StyleSheet,ScrollView,TouchableOpacity} from 'react-native';
export default class OpeningTime extends Component {
  state = {
         openingState:true,
         businessWeek : false,
         businessTime:false,
         choiceBusinessWeek : false,
         choiceBusinessTime : false,
         timeLimit : false,
         cancelWeek : true
    }
    updateOpeningState = () =>{
        this.setState({
            openingState:!this.state.openingState
        })
    }
   changeBusiness = () => {
       this.setState({
        businessWeek : !this.state.businessWeek,
        choiceBusinessWeek : !this.state.choiceBusinessWeek
       })
    }
    updateBusiness = () =>{
        this.setState({
            businessTime:!this.state.businessTime,
            timeLimit:!this.state.timeLimit,
            choiceBusinessTime : !this.state.choiceBusinessTime
        })
    }
   changeBusinessWeek = () => {
        this.setState({
            choiceBusinessWeek : !this.state.choiceBusinessWeek,
            businessWeek : !this.state.businessWeek
        })
    }
  changeBusinessTime = () => {
      this.setState({
        businessTime:!this.state.businessTime,
        choiceBusinessTime : !this.state.choiceBusinessTime
      })
    }
   addTime = () => {
     this.setState({
        timeLimit:!this.state.timeLimit,
    })
    }
    cancelWeek = () =>{
        this.setState({
           cancelWeek : !this.state.cancelWeek 
        })
    }
    render() {
        let {businessWeek,choiceBusinessTime,choiceBusinessWeek,timeLimit,businessTime,openingState,cancelWeek} = this.state;
        return (
            <View style={{flex:1,backgroundColor:'#F8F8F9'}}>
                <View style={{alignItems:'center'}}>
                  <Image style={{width:96.5,height:96.5}} source={require('../../../assets/images/png/dw-dianpukuang.png')}></Image>
                  <Text style={{fontSize:22,fontWeight:'bold',color:'#3F3C3C',paddingTop:12,paddingBottom:25}}>盐忆</Text>
                </View>
                <ScrollView>
                <View style={styles.container}>
                   {/* 1 */}
                   <TouchableOpacity onPress={this.updateOpeningState}>
                   {openingState?<View style={{backgroundColor:'#E7FCE7',borderRadius:20,paddingTop:19,paddingBottom:18.5,alignItems:'center'}}>
                       <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}><Image source={require('../../../assets/images/png/dw_shixinyuan.png')}></Image>
                             <Text style={{fontSize:18,color:'#5D5757',paddingLeft:6}}>营业中</Text>
                        </View>
                        <Text style={{fontSize:14,color:'#5D5757'}}>本店正在营业中</Text>
                   </View>:<View style={{backgroundColor:'#FD875C',borderRadius:20,paddingTop:19,paddingBottom:18.5,alignItems:'center'}}>
                       <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}><Image source={require('../../../assets/images/png/dw_xieyeicon.png')}></Image>
                             <Text style={{fontSize:18,color:'white',paddingLeft:6}}>歇业中</Text>
                        </View>
                        <Text style={{fontSize:14,color:'white'}}>本店正在营业中</Text>
                   </View>}
                   </TouchableOpacity>
                   {/* 2 */}
                   <View style={{paddingTop:26.5,paddingBottom:27.5,paddingLeft:23,paddingRight:23,backgroundColor:'white',borderRadius:20,marginTop:-15,flexDirection:'row',justifyContent:'space-between'}}>
                       <Text style={{color:'#5D5757',fontSize:17}}>今日营业时间</Text>
                       <Text style={{color:'#5D5757',fontSize:15}}>10:00～20:00</Text>
                   </View>
                   {/* 3 */}
                   <View style={{paddingLeft:23,paddingRight:23,backgroundColor:'white',borderRadius:20,marginTop:20.5}}>
                       <View style={{borderBottomColor:'#ECECEC',borderBottomWidth:1,paddingTop:23.5,paddingBottom:15.5}}>
                           <Text style={{color:'#5D5757',fontSize:17}}>营业时间设置</Text>
                        </View>
                        {/* 3-1 */}
                        <View style={{paddingTop:14,paddingBottom:14,flexDirection:'row',justifyContent:'space-between',borderBottomWidth:choiceBusinessWeek?0:1,borderBottomColor:'#ECECEC'}} ref = 'choose'>
                            <Text style={styles.fontStyle}>营业日</Text>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <TouchableOpacity onPress={this.changeBusiness}>
                                {businessWeek?<Image source={require('../../../assets/images/png/dw_xuanzhongquanquan.png')}></Image>:<View style={{position:'relative'}}>
                                <Image source={require('../../../assets/images/png/dw_xuanzhongquanquan.png')} ></Image>
                                <Image source={require('../../../assets/images/png/dw_shixinyuan.png')} style={{width:5,height:5,position:'absolute',left:3.5,top:3.5}}></Image>
                                </View>}
                                </TouchableOpacity>
                                <Text style={styles.fontStyle}>每日营业</Text>  
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <TouchableOpacity onPress={this.changeBusinessWeek}>
                                {businessWeek?<View style={{position:'relative'}}>
                                <Image source={require('../../../assets/images/png/dw_xuanzhongquanquan.png')} ></Image>
                                <Image source={require('../../../assets/images/png/dw_shixinyuan.png')} style={{width:5,height:5,position:'absolute',left:3.5,top:3.5}}></Image>
                                </View>:<Image source={require('../../../assets/images/png/dw_xuanzhongquanquan.png')}></Image>}
                                </TouchableOpacity>
                                <Text style={styles.fontStyle}>选择营业时间</Text>  
                            </View>
                        </View>
                        {/* 星期的选择 */}
                        {choiceBusinessWeek?<View style={{marginTop:10,flexDirection:'row',justifyContent:'space-between'}} >
                            <TouchableOpacity onPress={this.cancelWeek}>
                            {cancelWeek?<View style={styles.weekStyle}>
                                   <Text style={{color:'white',fontSize:12,lineHeight:20}}>周一</Text>
                                   <Image source={require('../../../assets/images/png/dw_gougouicon.png')}></Image>
                               </View>:<View style={styles.weekCancelStyle}>
                                   <Text style={{color:'#5D5757',fontSize:12,lineHeight:20}}>周一</Text>
                                   <Image source={require('../../../assets/images/png/dw_gougouicon.png')}></Image>
                               </View>}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.cancelWeek}>
                            {cancelWeek?<View style={styles.weekStyle}>
                                   <Text style={{color:'white',fontSize:12,lineHeight:20}}>周二</Text>
                                   <Image source={require('../../../assets/images/png/dw_gougouicon.png')}></Image>
                               </View>:<View style={styles.weekCancelStyle}>
                                   <Text style={{color:'#5D5757',fontSize:12,lineHeight:20}}>周二</Text>
                                   <Image source={require('../../../assets/images/png/dw_gougouicon.png')}></Image>
                               </View>}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.cancelWeek}>
                            {cancelWeek?<View style={styles.weekStyle}>
                                   <Text style={{color:'white',fontSize:12,lineHeight:20}}>周三</Text>
                                   <Image source={require('../../../assets/images/png/dw_gougouicon.png')}></Image>
                               </View>:<View style={styles.weekCancelStyle}>
                                   <Text style={{color:'#5D5757',fontSize:12,lineHeight:20}}>周三</Text>
                                   <Image source={require('../../../assets/images/png/dw_gougouicon.png')}></Image>
                               </View>}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.cancelWeek}>
                            {cancelWeek?<View style={styles.weekStyle}>
                                   <Text style={{color:'white',fontSize:12,lineHeight:20}}>周四</Text>
                                   <Image source={require('../../../assets/images/png/dw_gougouicon.png')}></Image>
                               </View>:<View style={styles.weekCancelStyle}>
                                   <Text style={{color:'#5D5757',fontSize:12,lineHeight:20}}>周四</Text>
                                   <Image source={require('../../../assets/images/png/dw_gougouicon.png')}></Image>
                               </View>}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.cancelWeek}>
                            {cancelWeek?<View style={styles.weekStyle}>
                                   <Text style={{color:'white',fontSize:12,lineHeight:20}}>周五</Text>
                                   <Image source={require('../../../assets/images/png/dw_gougouicon.png')}></Image>
                               </View>:<View style={styles.weekCancelStyle}>
                                   <Text style={{color:'#5D5757',fontSize:12,lineHeight:20}}>周五</Text>
                                   <Image source={require('../../../assets/images/png/dw_gougouicon.png')}></Image>
                               </View>}
                            </TouchableOpacity>
                               <View style={styles.weekStyle}>
                                   <Text style={{color:'white',fontSize:12,lineHeight:20}}>周六</Text>
                                   <Image source={require('../../../assets/images/png/dw_gougouicon.png')}></Image>
                               </View>
                               <View style={styles.weekStyle}>
                                   <Text style={{color:'white',fontSize:12,lineHeight:20}}>周天</Text>
                                   <Image source={require('../../../assets/images/png/dw_gougouicon.png')}></Image>
                               </View>
                           </View>:<></>}
                        {/* 3-2 */}
                        <View style={{paddingTop:14,paddingBottom:14,flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={styles.fontStyle}>营业时间段</Text>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <TouchableOpacity onPress={this.updateBusiness}>
                                {businessTime?<Image source={require('../../../assets/images/png/dw_xuanzhongquanquan.png')}></Image>:<View style={{position:'relative'}}>
                                <Image source={require('../../../assets/images/png/dw_xuanzhongquanquan.png')} ></Image>
                                <Image source={require('../../../assets/images/png/dw_shixinyuan.png')} style={{width:5,height:5,position:'absolute',left:3.5,top:3.5}}></Image>
                                </View>}
                                </TouchableOpacity>
                                <Text style={styles.fontStyle}>全天</Text>  
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <TouchableOpacity onPress={this.changeBusinessTime}>
                                {businessTime?<View style={{position:'relative'}}>
                                <Image source={require('../../../assets/images/png/dw_xuanzhongquanquan.png')} ></Image>
                                <Image source={require('../../../assets/images/png/dw_shixinyuan.png')} style={{width:5,height:5,position:'absolute',left:3.5,top:3.5}}></Image>
                                </View>:<Image source={require('../../../assets/images/png/dw_xuanzhongquanquan.png')}></Image>}
                                </TouchableOpacity>
                                <Text style={styles.fontStyle}>选择时间段</Text>  
                            </View>
                        </View>
                        {/* 时间段的选择 */}
                        {timeLimit? <View><Text style={{fontSize:14,color:'#5D5757'}}>最多可以选择三项</Text></View> :<></>}
                        {choiceBusinessTime?<View style={{height:34.5,backgroundColor:'#E5E4E4',borderRadius:15,flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginTop:20}}>
                          <Text style={{fontSize:15,color:'#5D5757'}}>10:30</Text>
                          <Text style={{fontSize:15,color:'#5D5757'}}>之</Text>
                          <Text style={{fontSize:15,color:'#5D5757'}}>21:30</Text>
                        </View> :<></>}
                        {timeLimit? <View style={{height:34.5,backgroundColor:'#E5E4E4',borderRadius:15,flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginTop:20}}>
                          <Text style={{fontSize:15,color:'#5D5757'}}>选择开始时间</Text>
                          <Text style={{fontSize:15,color:'#5D5757'}}>之</Text>
                          <Text style={{fontSize:15,color:'#5D5757'}}>选择结束时间</Text>
                        </View>:<></>}
                        {choiceBusinessTime?  <View style={{alignItems:'center',paddingBottom:28,paddingTop:28}}>
                            <Text style={{fontSize:15,color:'#5D5757'}} onPress={this.addTime}>+添加时间段</Text>
                        </View>:<></>}
                   </View>
                   {/* 4 */}
                   <View style={{paddingLeft:23,paddingRight:23,backgroundColor:'white',borderRadius:20,marginTop:20.5}}>
                       <View style={{flexDirection:'row',paddingTop:21,paddingBottom:17,alignItems:'center'}}>
                           <Image source={require('../../../assets/images/png/dw_xingxingicon.png')}></Image>
                           <Text style={{fontSize:17,color:'#5D5757',paddingLeft:4}}>外卖营业时间</Text>
                       </View>
                       <Text style={{fontSize:15,color:'#838181',paddingBottom:24.5}}>外卖业务营业时间默认为开店后半小时至关店前半小时，您可以随时在“门店设置”页面选择开启或关闭外卖业务～
                       </Text>
                   </View>
                   <View style={{marginTop:29,backgroundColor:'#FF6127',height:34.5,alignItems:'center',justifyContent:'center',borderRadius:20}}>
                   <Text style={{fontSize:17,color:'white'}}>确认修改</Text>
               </View>
               </View>
            </ScrollView>
            </View>
        )
      
    }
}
const styles = StyleSheet.create({
    container:{
        marginLeft:18,
        marginRight:17.5,
        flex:1
    },
    fontStyle:{
        fontSize:14,
        color:'#5D5757',
        paddingLeft:4
    },
    weekStyle:{
        backgroundColor:'#00CB88',
        width:35,
        height:49.5,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center'
    },
    weekCancelStyle:{
        backgroundColor:'#E5E4E4',
        width:35,
        height:49.5,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center'

    }
})