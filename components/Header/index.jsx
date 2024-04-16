import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export const CustomHeader = () => {
  return (
      <View style={styles.logoContainer}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/white-varaint-logo.png")}
        resizeMode="contain"
      />
      </View>
  );
};

const styles = StyleSheet.create({

    logoContainer: {
        height: '12%',
        width: '100%',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        backgroundColor: '#17004A',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '30%',
        height: 50,
    }
});