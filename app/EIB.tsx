import * as React from 'react';
import { View, Text } from 'react-native';
import {ParamListBase, useNavigation,
} from '@react-navigation/native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';
import { useState} from "react";
import db from "@/app/db";

export default function EIB() {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    let eib = null
    async function queryDB() {
        try {
            const result = await db.getFirstSync("SELECT id, name FROM BADGE WHERE name = 'ESB'");
            eib = result
        } catch (error) {
            console.error("Error querying the database:", error);

        }
    }



    return (

        <View>
            <Text> </Text>
            <Button onPress={queryDB}>
                Query DB
            </Button>
        </View>


    );
}
