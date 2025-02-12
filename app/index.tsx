
import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EIB from "@/app/EIB";
import ESB from "@/app/ESB";
import * as SQLite from 'expo-sqlite';
import {useDrizzleStudio} from "expo-drizzle-studio-plugin";

const Stack = createNativeStackNavigator();


export default function HomeScreen() {




    return (
          <Stack.Navigator>
              <Stack.Screen name="EIB" component={EIB} />
              <Stack.Screen name="ESB" component={ESB} />
          </Stack.Navigator>

  );
}


