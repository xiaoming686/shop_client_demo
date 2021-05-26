import React from 'react'
import { View,Text,StyleSheet} from "react-native"


 const CheckTime =  () => {
    return (
        <View style={{flex:1,backgroundColor:'#F8F8F9'}}>
            <View style={styles.container}>
            <View style={styles.item}>
               <Text style={{color:'#5D5757',fontSize:18,fontWeight:'700'}}>核销时间</Text>
               <View style={{width:77,height:28.5,backgroundColor:'#E5E4E4',borderRadius:14,alignItems:'center',justifyContent:'center'}}><Text style={{color:'#2A2A2A',fontSize:15}}>20:00</Text></View>
            </View>
            <View style={[styles.item,{borderBottomWidth:0}]}>
               <Text style={{color:'#838181',fontSize:15,lineHeight:20}}>核销时间：堂食、自提订单在订单页自动刷新的时间点。</Text>
            </View>
            </View>
        </View>
    )

}
export default CheckTime;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        marginLeft:18.5,
        marginRight:18.5,
        paddingLeft:23,
        paddingRight:16.5,
        borderRadius:20
    },
    item:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingTop:23.5,
        paddingBottom:23.5,
        borderBottomWidth:1,
        borderStyle:'dotted',
        borderBottomColor:'#ECECEC'
    }
})