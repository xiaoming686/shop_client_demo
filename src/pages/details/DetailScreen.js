import React from 'react';
import { View, Text, Button } from 'react-native';
 
const DetailScreen = ({route})=> {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>详情页面</Text>
        <Text>标题是：{route.params.screenName}</Text>
        <Text>参数Url是：{route.params.url}</Text>
      </View>
  );
};
 
export default DetailScreen;