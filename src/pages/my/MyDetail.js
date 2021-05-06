import React from 'react';
import { View, Text, Button } from 'react-native';


const MyScreen = ({ navigation }) => {
    console.log(navigation);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>我的详情</Text>
            <Button title={"回到我的"} onPress={() => {
                navigation.navigate('MyScreen');
            }} />
        </View>
    );
};

export default MyScreen;