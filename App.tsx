import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { CustomStatusBarTop } from "./src/components/CustomStatusBarTop";
import MainNavigation from "./src/navigation";

const App = () => {
  return (
    <>
      <SafeAreaProvider>
        <CustomStatusBarTop backgroundColor="#0f172a" />
        <SafeAreaView
          style={{
            flex: 1,
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#0f172a",
          }}
        >
          <NavigationContainer>
            <MainNavigation />
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
};

export default App;
