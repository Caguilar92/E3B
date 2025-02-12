import * as React from 'react';
import { View, Text } from 'react-native';
import {
    createStaticNavigation, ParamListBase,
    useNavigation,
} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';

export default function EIB() {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    function navigateToESB() {
        navigation.navigate('ESB')
    }
    return (

        <View>
            <Text>EIB SCREEN</Text>
            <Button onPress={navigateToESB}>
                Go to ESB
            </Button>
        </View>


    );
}
