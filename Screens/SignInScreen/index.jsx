import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SignInPage } from "../../components/SignInPage";

export const SignInScreen = () => {
  return (
    <View>
      <SignInPage />
      <Text>This is the Sign In Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    
});
