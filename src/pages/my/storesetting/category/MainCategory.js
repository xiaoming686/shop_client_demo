import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default class MainCategory extends Component {
    state = {
        active: 1,
        cateitem: 0,
        foodList: [
            {
                "id": 1,
                'name': '中式菜肴',
                'cate': ['北京料理', '台湾料理', '上海料理', '广东料理', '四川料理', '云南料理', '湖南料理', '新疆料理']
            },
            {
                "id": 2,
                'name': '全球美食',
                'cate': ['丼', '寿司', '面食', '烤肉', '合适', '披萨', '咖喱', '新疆料理']
            },
            {
                "id": 3,
                'name': '饮品',
                'cate': ['奶茶', '咖啡', '果汁', '其它饮料']
            },
            {
                "id": 4,
                'name': '甜品',
                'cate': ['烘焙', '舒芙蕾', '蛋糕', '其它饮料']
            },
            {
                "id": 5,
                'name': '小吃',
                'cate': ['炸物类', '卤味', '烤物类', '铁板类', '其他类']

            }
        ]
    }
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
                {/* 2 */}
                <View style={{ flexDirection: 'row', height: '90%' }}>
                    {/* 左边 */}
                    <View style={{ width: '34%', borderRightColor: '#5D5757', borderRightWidth: 1 }} >
                        {
                            this.state.foodList.map((item, index) => {
                                return (
                                    <View style={styles.container} key={item.id}>
                                        <Text style={[styles.fontStyle, { color: this.state.active == item.id ? '#5FA6EE' : '#5D5757' }]} onPress={() => { this.setState({ active: item.id }) }}>{item.name}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                    {/* 右边 */}
                    {this.state.active == 1 ? <View style={{ width: '33%' }}>
                        {
                            this.state.foodList[0].cate.map((item, index) => {
                                return (
                                    <View style={styles.container} key={index}>
                                        <Text onPress={() => { this.setState({ cateitem: index }) }} style={[styles.fontStyle, { color: this.state.cateitem == index ? 'green' : '#5D5757' }]}>{item}</Text>
                                    </View>
                                )
                            })
                        }
                    </View> : <></>}
                    {this.state.active == 2 ? <View style={{ width: '33%' }}>
                        <View style={styles.container}><Text style={styles.fontStyle}>丼</Text></View>
                        <View style={styles.container}><Text style={styles.fontStyle}>寿司</Text></View>
                        <View style={styles.container}><Text style={styles.fontStyle}>面食</Text></View>
                        <View style={styles.container}><Text style={styles.fontStyle}>烤肉</Text></View>
                        <View style={styles.container}><Text style={styles.fontStyle}>合适</Text></View>
                        <View style={styles.container}><Text style={styles.fontStyle}>披萨</Text></View>
                        <View style={styles.container}><Text style={styles.fontStyle}>咖喱</Text></View>
                    </View> : <></>}
                    {this.state.active == 3 ? <View style={{ width: '33%' }}>
                        <View style={styles.container}><Text style={styles.fontStyle}>奶茶</Text></View>
                        <View style={styles.container}><Text style={styles.fontStyle}>咖啡</Text></View>
                        <View style={styles.container}><Text style={styles.fontStyle}>果汁</Text></View>
                        <View style={styles.container}><Text style={styles.fontStyle}>其它饮料</Text></View>
                    </View> : <></>}
                    {this.state.active == 4 ? <View style={{ width: '33%' }}>
                        <View style={styles.container}><Text style={styles.fontStyle}>烘焙</Text></View>
                        <View style={styles.container}><Text style={styles.fontStyle}>舒芙蕾</Text></View>
                        <View style={styles.container}><Text style={styles.fontStyle}>蛋糕</Text></View>
                        <View style={styles.container}><Text style={styles.fontStyle}>冰激淋</Text></View>
                        <View style={styles.container}><Text style={styles.fontStyle}>其他</Text></View>
                    </View> : <></>}
                    {this.state.active == 5 ? <View style={{ width: '33%' }}>
                        <View style={styles.container}><Text style={styles.fontStyle}>炸物类</Text></View>
                        <View style={styles.container}><Text style={styles.fontStyle}>卤味</Text></View>
                        <View style={styles.container}><Text style={styles.fontStyle}>烤物类</Text></View>
                        <View style={styles.container}><Text style={styles.fontStyle}>铁板类</Text></View>
                        <View style={styles.container}><Text style={styles.fontStyle}>其他类</Text></View>
                    </View> : <></>}
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