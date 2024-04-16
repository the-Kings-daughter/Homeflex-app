import React from "react";
import { CustomButton } from "../../components/Button";
import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-splash-screen";
import { useCallback } from "react";



export const GetStartedPage = () => {
  const navigation = useNavigation();
  const handleSignIn = () => {
    console.log("Signed In");
    navigation.navigate('SignIn');
  };
  const handleSignUp = () => {
    console.log("Signed Up");
    navigation.navigate('SignUp');
  };
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
  };


  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.family}
          source={require("../../assets/images/pngtree-happy-black-family-with-baby-png-image_11518385.png")}
          resizeMode="cover"
        />

        <View style={styles.textWrapper} onLayout={onLayoutRootView}>
          <Text style={styles.title}>
            Let's find your perfect housing plan together.
          </Text>
          <Text style={styles.description}>
            We're dedicated to finding your perfect apartment and guiding you every step
            of the way.
          </Text>

          <CustomButton
            title="Sign In"
            onPress={handleSignIn}
          />
          <CustomButton
            title="Sign Up"
            onPress={handleSignUp}
            buttonStyle={{ backgroundColor: "#ffffff", borderWidth: 2, borderColor: '#17004a' }}
            textStyle={{ color: "#17004a" }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  imageWrapper: {
    height: "100%",
    position: "relative",
    justifyContent: 'flex-end',
  },
  family: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  textWrapper: {
    position: "absolute",
    width: "100%",
    height: "45%",
    backgroundColor: "#fff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingVertical: 50,
    paddingHorizontal:30,
  },
  title: {
    fontSize: 28,
    lineHeight: 30.8,
    textAlign: "center",
    paddingBottom: 10,
    fontFamily: "Bricolage-Grotesque",
    fontWeight: "400",
  },
  description: {
    fontSize: 12,
    lineHeight: 15.4,
    textAlign: "center",
    color: "#474646",
    fontFamily: "DM-Sans",
    fontWeight: "400",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
  },
});
