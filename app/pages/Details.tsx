import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Link, useNavigation, useRouter } from "expo-router";

export default function Details() {
  const router = useRouter();
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.title}>Details Screen</Text>

      <Link href="/pages/Home">Go to Home</Link>

      <Button
        title="Go to Details... again"
        onPress={() => router.push("/pages/Details")}
      />
      <Button title="Go back" onPress={() => router.back()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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