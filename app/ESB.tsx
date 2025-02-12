import {View, Text} from "react-native";
import {Button} from "@react-navigation/elements";
import * as React from "react";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

export default function ESB() {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    return (
        <View>
            <Text>ESB SCREEN</Text>
            <Button onPress={() => navigation.navigate('EIB')}>
                Go to EIB
            </Button>
        </View>

    );
}
