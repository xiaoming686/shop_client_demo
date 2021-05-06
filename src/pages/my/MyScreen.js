import React from 'react';
import { View, Text, Button } from 'react-native';


const MyScreen = ({ navigation }) => {
    console.log(navigation);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>设置</Text>
            <Button title={"回到登录页"} onPress={() => {
                navigation.navigate('Login');
            }} />
            <Button title={"前往我的详情"} onPress={() => {
                navigation.navigate('MyDetail');
            }} />
            <Button title={"详情页面传参测试"} onPress={() => {
                navigation.navigate('DetailScreen', {
                    screenName: '自定义标题',
                    url: 'http://www.baidu.com',
                });
            }} />
        </View>
    );
};

export default MyScreen;