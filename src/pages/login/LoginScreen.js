import React from 'react';
import { View, Text, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>登录页面</Text>
      <Button title={"登录"} onPress={() => {
        navigation.navigate('NavTab');
      }} />
    </View>
  );
};

export default LoginScreen;