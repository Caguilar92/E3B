import * as React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EIB from "@/app/EIB";
import ESB from "@/app/ESB";
import {useDrizzleStudio} from "expo-drizzle-studio-plugin";
import db from "@/app/db";


const Stack = createNativeStackNavigator();

export default function HomeScreen() {
    useDrizzleStudio(db);
    return (
          <Stack.Navigator>
              <Stack.Screen name="EIB" component={EIB} />
              <Stack.Screen name="ESB" component={ESB} />
          </Stack.Navigator>

  );
}


