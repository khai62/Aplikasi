import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import NavigationBar from "./navigation/NavigationBar";
import {
  // Profile,
  Gambar1,
  Gambar2,
  Gambar3,
  // BottomSeet,
  // Droupdown,
  // Snackbarr,
  // ToastMessage,
} from "./screen";

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  useEffect(() => {
    async function prepareApp() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepareApp();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NavigationBar">
        <Stack.Screen
          name="NavigationBar"
          component={NavigationBar}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
          /> */}
        <Stack.Screen
          name="Gambar1"
          component={Gambar1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Gambar2"
          component={Gambar2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Gambar3"
          component={Gambar3}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="BottomSet"
          component={BottomSeet}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Droupdown"
          component={Droupdown}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Snackbar"
          component={Snackbarr}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ToastMessage"
          component={ToastMessage}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
