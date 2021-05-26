import React, { Component } from 'react';
import {View,Text,Image,StyleSheet} from 'react-native'

export default class BusinessCategory extends Component {
    state = {
        active:1,
        foodList:[
            {
                "id":1,
                'name':'中式菜肴',
                'cate':['北京料理','台湾料理','上海料理','广东料理','四川料理','云南料理','湖南料理','新疆料理']
            },
            {
                "id":2,
                'name':'全球美食',
                'cate':['丼','寿司','面食','烤肉','合适','披萨','咖喱','新疆料理'] 
            },
            {
                "id":3,
                'name':'饮品',
                'cate':['奶茶','咖啡','果汁','其它饮料'] 
            },
            {
                "id":4,
                'name':'甜品',
                'cate':['烘焙','舒芙蕾','蛋糕','其它饮料'] 
            },
            {
                "id":5,
                'name':'小吃',
                'cate':['炸物类','卤味','烤物类','铁板类','其他类'] 

            }
        ]
    }
    render() {
        return (
         <View style={{paddingLeft:26,paddingRight:26,flex:1,backgroundColor:'#F8F8F9'}}>
             {/* 1 */}
             <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:54,alignItems:'center'}}>
                 <Image source={require('../../assets/images/png/sousuo_gengduo_icon.png')}></Image>
                 <Text style={{color:'#3F3C3C',fontSize:19,fontWeight:'bold'}}>经营品类</Text>
                 <Text style={{color:'#2A2A2A',fontSize:15}}>保存</Text>
             </View>
             {/* 2 */}
             <View style={{flexDirection:'row',marginTop:53}}>
                 {/* 左边 */}
                 <View style={{width:'34%',borderRightColor:'#5D5757',borderRightWidth:2}} >
                {
                    this.state.foodList.map((item,index)=>{
                       return  <View style={styles.container} key = {item.id}><Text style={[styles.fontStyle,{color: this.state.active == item.id?'#5FA6EE':'#5D5757'}]} onPress={()=>{this.setState({active:item.id})}}>{item.name}</Text></View>
                    })
                }
                 </View>
                 {/* 右边 */}
                 {this.state.active == 1? <View style={{width:'33%'}}>
                 <View style={styles.container}><Text style={styles.fontStyle}>北京料理</Text></View>
                 <View style={styles.container}><Text style={styles.fontStyle}>台湾料理</Text></View>
                 <View style={styles.container}><Text style={styles.fontStyle}>上海料理</Text></View>
                 <View style={styles.container}><Text style={styles.fontStyle}>广东料理</Text></View>
                 <View style={styles.container}><Text style={styles.fontStyle}>四川料理</Text></View>
                 <View style={styles.container}><Text style={styles.fontStyle}>云南料理</Text></View>
                 <View style={styles.container}><Text style={styles.fontStyle}>湖南料理</Text></View>
                 <View style={styles.container}><Text style={styles.fontStyle}>新疆料理</Text></View>
                 </View>:<></>}
                 {this.state.active == 2? <View style={{width:'33%'}}>
                 <View style={styles.container}><Text style={styles.fontStyle}>丼</Text></View>
                 <View style={styles.container}><Text style={styles.fontStyle}>寿司</Text></View>
                 <View style={styles.container}><Text style={styles.fontStyle}>面食</Text></View>
                 <View style={styles.container}><Text style={styles.fontStyle}>烤肉</Text></View>
                 <View style={styles.container}><Text style={styles.fontStyle}>合适</Text></View>
                 <View style={styles.container}><Text style={styles.fontStyle}>披萨</Text></View>
                 <View style={styles.container}><Text style={styles.fontStyle}>咖喱</Text></View>
                 <View style={styles.container}><Text style={styles.fontStyle}>新疆料理</Text></View>
                 </View>:<></>}
                 {this.state.active == 3? <View style={{width:'33%'}}>
                 <View style={styles.container}><Text style={styles.fontStyle}>奶茶</Text></View>
                 <View style={styles.container}><Text style={styles.fontStyle}>咖啡</Text></View>
                 <View style={styles.container}><Text style={styles.fontStyle}>果汁</Text></View>
                 <View style={styles.container}><Text style={styles.fontStyle}>其它饮料</Text></View>
                 </View>:<></>}
                 {this.state.active == 4? <View style={{width:'33%'}}>
                 <View style={styles.container}><Text style={styles.fontStyle}>烘焙</Text></View>
                 <View style={styles.container}><Text style={styles.fontStyle}>舒芙蕾</Text></View>
                 <View style={styles.container}><Text style={styles.fontStyle}>蛋糕</Text></View>
                 <View style={styles.container}><Text style={styles.fontStyle}>冰激淋</Text></View>
                 <View style={styles.container}><Text style={styles.fontStyle}>其他</Text></View>
                 </View>:<></>}
                 {this.state.active == 5? <View style={{width:'33%'}}>
                 <View style={styles.container}><Text style={styles.fontStyle}>炸物类</Text></View>
                 <View style={styles.container}><Text style={styles.fontStyle}>卤味</Text></View>
                 <View style={styles.container}><Text style={styles.fontStyle}>烤物类</Text></View>
                 <View style={styles.container}><Text style={styles.fontStyle}>铁板类</Text></View>
                 <View style={styles.container}><Text style={styles.fontStyle}>其他类</Text></View>
                 </View>:<></>}
               
             </View>
         </View>
        )
    }
}
const styles = StyleSheet.create({
    fontStyle:{
        fontSize:18,
        color:'#5D5757',
    },
    container:{
        paddingTop:13,
        paddingBottom:13,
        alignItems:'center'
    }
})