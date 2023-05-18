import React from "react";
import { Text, Pressable, View, StyleSheet } from "react-native";
import { Link, Tabs, Stack } from "expo-router";

export default function App() {

  return (
    <View style={styles.container}>
      {/* <Tabs.Screen options={{ headerShown: false }} /> */}
      {/* When all loading is setup, unmount the splash screen component. */}
      <Text style={styles.title}>
      <Link href="/pages/Details" asChild>
        <Pressable>{({ hovered, pressed }) => <Text>Details</Text>}</Pressable>
      </Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});