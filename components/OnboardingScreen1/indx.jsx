import React from "react";
import { useCallback } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import onboardingData from "./onboardingdata";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-splash-screen";

export const OnboardingScreen1= ({ onSkip }) => {
 
  const screenData = onboardingData[0];

  const [fontsLoaded, fontError] = useFonts({
    'Bricolage-Grotesque' : require('../../assets/fonts/static/BricolageGrotesque_36pt-Medium.ttf'),
    'DM-Sans' : require('../../assets/fonts/DMSans-VariableFont_opsz,wght.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.imageWrapper}>
        <Image
          source={screenData.image1}
          style={styles.image1}
          resizeMode="cover"
        />
        <TouchableOpacity onPress={onSkip} style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <Image
          source={screenData.image2}
          style={styles.image2}
          resizeMode="contain"
        />
        <LinearGradient
          colors={[
            "rgba(41, 90, 131, 0)",
            "rgba(104, 61, 25, 0.02)",
            "rgba(255, 255, 255, 1)",
            "rgba(255, 255, 255, 1)",
          ]}
          style={styles.gradient}
        ></LinearGradient>
      </View>

      <View style={styles.textContainer} onLayout={onLayoutRootView} >
        <Text style={styles.text1}>{screenData.text1}</Text>
        <Text style={styles.text2}>{screenData.text2}</Text>
      </View>
    </View>


  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "white",
  
  },
  imageWrapper: {
   
   position: 'relative',
    aspectRatio: 0.72,
    overflow: "hidden",
  },
  image1: {
   
    flex: 1,
    width: '100%',
    height: '100%',
  },
  image2: {
    width: "95%",
    position: "absolute",
    top: 50,
    left: 8,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 60,
  },
  textContainer: {
    flex: 1,
   
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    justifyContent: 'center',
  },
  text1: {
    fontSize: 28,
    lineHeight: 30.8,
    textAlign: "center",
    paddingBottom: 10,
    fontFamily: 'Bricolage-Grotesque',
    fontWeight: '400',
  },
  text2: {
    fontSize: 12,
    lineHeight: 15.4,
    textAlign: "center",
    color: "#474646",
    fontFamily: 'DM-Sans',
    fontWeight: '400',
    paddingLeft: 30,
    paddingRight: 30,
  },
  skipButton: {
    position: "absolute",
    top: 20,
    right: 20,
    padding: 10,
  },
  skipText: {
    fontSize: 20,
    color: "#fff",
  },
});
