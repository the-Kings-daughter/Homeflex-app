import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MiddleTextBetweenLines = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.middleText}>   or   </Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
   
   
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },

  middleText: {
    color: "#333",
    fontWeight: "bold",
    fontSize: 18,
    padding: 0,
  },
});

export default MiddleTextBetweenLines;
