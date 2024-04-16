import React, { useEffect }from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

export const HomeScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate("Onboarding"); 
    }, 5000); 

    return () => clearTimeout(timeout); 
  }, []); 

  return (
    <View style={styles.home}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/white-varaint-logo.png")}
      />
      <Text style={styles.homeText}>
        {" "}
        Create your perfect life and flex, no stress{" "}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeText: {
    color: "#fff",
    paddingTop: 20,
  },
});
