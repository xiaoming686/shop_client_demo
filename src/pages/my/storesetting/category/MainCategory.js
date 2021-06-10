import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default class MainCategory extends Component {
    state = {
        active: 1,
        cateitem: { id: 1, cate: 0 },
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
                <View style={{ marginTop: 40, flexDirection: 'row', marginBottom: 20, marginHorizontal: 20, justifyContent: 'space-between', alignItems: 'center', }}>
                    <TouchableOpacity style={{ padding: 10, paddingLeft: 0, paddingRight: 30 }} activeOpacity={1} onPress={() => { this.props.navigation.goBack() }}>
                        <Image style={{ width: 10, height: 15, resizeMode: 'contain', }} source={require('../../../../assets/images/png/sousuo_gengduo_icon.png')}></Image>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 19, fontWeight: 'bold' }}>经营品类</Text>
                    <TouchableOpacity style={{ padding: 10, paddingLeft: 0, paddingRight: 10 }} activeOpacity={1}
                        onPress={() => { this.props.navigation.replace('BusinessCategory',
                        {name:this.state.foodList[this.state.cateitem.id-1].name+'-'+this.state.foodList[this.state.cateitem.id-1].cate[this.state.cateitem.cate]}) }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>保存</Text>
                    </TouchableOpacity>
                </View>
                {/* 2 */}
                <View style={{ flexDirection: 'row', height: '80%' }}>
                    {/* 左边 */}
                    <View style={{ width: '33%', borderRightColor: 'rgba(0,0,0,0.1)', borderRightWidth: 1, }} >
                        {
                            this.state.foodList.map((item, index) => {
                                return (
                                    <TouchableOpacity activeOpacity={1} style={styles.container} key={item.id}
                                        onPress={() => { this.setState({ active: item.id, cateitem: { id: item.id, cate: 0 }, }) }}>
                                        <Text style={[styles.fontStyle, { color: this.state.active == item.id ? '#5FA6EE' : '#5D5757' }]} >{item.name}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                    {/* 中间 */}
                    <View style={{ width: '34%', borderRightColor: 'rgba(0,0,0,0.1)', borderRightWidth: 1, }}>
                        {this.state.active == 1 ?
                            <View>
                                {
                                    this.state.foodList[0].cate.map((item, index) => {
                                        return (
                                            <TouchableOpacity activeOpacity={1} style={styles.container} key={index} onPress={() => { this.setState({ cateitem: { id: this.state.active, cate: index } }) }}>
                                                <Text style={[styles.fontStyle, { borderRadius: 2, borderBottomWidth: 3, borderBottomColor: this.state.cateitem.cate == index ? '#5FA6EE' : 'transparent' }]}>{item}</Text>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </View>
                            : this.state.active == 2 ?
                                <View>
                                    {
                                        this.state.foodList[1].cate.map((item, index) => {
                                            return (
                                                <TouchableOpacity activeOpacity={1} style={styles.container} key={index} onPress={() => { this.setState({ cateitem: { id: this.state.active, cate: index } }) }}>
                                                    <Text style={[styles.fontStyle, { borderRadius: 2, borderBottomWidth: 3, borderBottomColor: this.state.cateitem.cate == index ? '#5FA6EE' : 'transparent' }]}>{item}</Text>
                                                </TouchableOpacity>
                                            )
                                        })
                                    }
                                </View> :
                                this.state.active == 3 ?
                                    <View>
                                        {
                                            this.state.foodList[2].cate.map((item, index) => {
                                                return (
                                                    <TouchableOpacity activeOpacity={1} style={styles.container} key={index} onPress={() => { this.setState({ cateitem: { id: this.state.active, cate: index } }) }}>
                                                        <Text style={[styles.fontStyle, { borderRadius: 2, borderBottomWidth: 3, borderBottomColor: this.state.cateitem.cate == index ? '#5FA6EE' : 'transparent' }]}>{item}</Text>
                                                    </TouchableOpacity>
                                                )
                                            })
                                        }
                                    </View> :
                                    this.state.active == 4 ?
                                        <View>
                                            {
                                                this.state.foodList[3].cate.map((item, index) => {
                                                    return (
                                                        <TouchableOpacity activeOpacity={1} style={styles.container} key={index} onPress={() => { this.setState({ cateitem: { id: this.state.active, cate: index } }) }}>
                                                            <Text style={[styles.fontStyle, { borderRadius: 2, borderBottomWidth: 3, borderBottomColor: this.state.cateitem.cate == index ? '#5FA6EE' : 'transparent' }]}>{item}</Text>
                                                        </TouchableOpacity>
                                                    )
                                                })
                                            }
                                        </View> :
                                        this.state.active == 5 ?
                                            <View>
                                                {
                                                    this.state.foodList[4].cate.map((item, index) => {
                                                        return (
                                                            <TouchableOpacity activeOpacity={1} style={styles.container} key={index} onPress={() => { this.setState({ cateitem: { id: this.state.active, cate: index } }) }}>
                                                                <Text style={[styles.fontStyle, { borderRadius: 2, borderBottomWidth: 3, borderBottomColor: this.state.cateitem.cate == index ? '#5FA6EE' : 'transparent' }]}>{item}</Text>
                                                            </TouchableOpacity>
                                                        )
                                                    })
                                                }
                                            </View> : <></>
                        }
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