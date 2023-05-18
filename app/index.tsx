import React from "react";
import { View, Text } from "react-native";
import { Link, Stack } from "expo-router";
import { SplashScreen } from "expo-router";

export default function App() {
  const [isReady, setReady] = React.useState(false);

  React.useEffect(() => {
    // Perform some sort of async data or asset fetching.
    setTimeout(() => {
      setReady(true);
    }, 1000);
  }, []);

  return (
    isReady
      ?
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Stack.Screen options={{ headerShown: false }} />
        <Text>
          <Link href="/pages/Home">Welcome to Expo Router!</Link>
        </Text>
      </View>
      : <SplashScreen />
  );
}