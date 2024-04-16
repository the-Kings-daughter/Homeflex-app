import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { CustomHeader } from "../Header";
import SignUpForm from "../SignUpForm";
import MiddleTextBetweenLines from "../HorizontalLine";
import { ButtonLink } from "../Google";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-splash-screen";
import { useCallback } from "react";
import { Alert } from 'react-native';
import { ButtonLinkFacebook } from "../facebook";
import { useNavigation } from '@react-navigation/native';

export const SignUpPage = () => {
  const handleGoogleNavigation = () => {
    Alert.alert("Google Button Pressed");
  };
  const handleFacebookNavigation = () => {
    Alert.alert("Facebook Button Pressed");
  };
  const navigation = useNavigation();
  const navigateSignIn = () => {
    console.log("Signed Up");
    navigation.navigate('SignIn');
  }
  const [fontsLoaded, fontError] = useFonts({
    "Bricolage-Grotesque": require("../../assets/fonts/static/BricolageGrotesque_36pt-Medium.ttf"),
    "DM-Sans": require("../../assets/fonts/DMSans-VariableFont_opsz,wght.ttf"),
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
    <View style={styles.container}>
      <CustomHeader />
      <View style={styles.boxWrapper}>
        <View onLayout={onLayoutRootView}>
          <Text style={styles.title}>Let's get started</Text>
          <Text style={styles.description}>
            Create your perfect life and flex, no stress
          </Text>
        </View>

        <View>
          <SignUpForm />
        </View>

        <MiddleTextBetweenLines />
        <ButtonLink
          buttonText="Sign Up with Google"
          onPress={handleGoogleNavigation}
        />
        <ButtonLinkFacebook
          buttonText="Sign Up with Facebook"
          onPress={handleFacebookNavigation}
        />
        <View style={styles.linkContainer}>
          <Text>Already have an account?</Text>
          <TouchableOpacity >
            <Text style={styles.link} onpress={navigateSignIn}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
    justifyContent: "flex-start",
    backgroundColor: "#ffffff",
  },
  boxWrapper: {
    padding: 20,
  },
  title: {
    fontSize: 31.25,
    fontFamily: "Bricolage Grotesque",
    textTransform: "capitalize",
  },
  description: {
    fontSize: 16,
    fontFamily: "DM Sans",
    color: "#474646",
    paddingBottom: 40,
  },
  horizontalLine: {
    width: "100%",
    height: 1,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  lineText: {
    flex: 1,
    color: "red",
  },
  linkContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 5,
    marginTop: 10,
  },
  link: {
    color: '#17004A',
    textDecorationLine: 'underline',
  }
});
