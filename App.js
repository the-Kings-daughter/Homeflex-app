
import { StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import { HomePage } from "./Screens/HomePage/index";
import { OnboardingParent } from "./Screens/OnboardingParent"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GetStarted } from "./Screens/GetStarted";
import { SignUpScreen } from './Screens/SignUpScreen'
import { SignInScreen } from './Screens/SignInScreen'
import { AlmostDoneScreen } from './Screens/AlmostDoneScreen'



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container} >
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomePage">
          <Stack.Screen options={{
            headerShown: false
          }} name="HomePage" component={HomePage} />
          <Stack.Screen options={{
            headerShown: false
          }} name="Onboarding" component={OnboardingParent} />
           <Stack.Screen options={{
            headerShown: false
          }} name="GetStarted" component={GetStarted} />
           <Stack.Screen options={{
            headerShown: false
          }} name="SignUp" component={SignUpScreen} />
           <Stack.Screen options={{
            headerShown: false
          }} name="SignIn" component={SignInScreen} />
           <Stack.Screen options={{
            headerShown: false
          }} name="AlmostDone" component={ AlmostDoneScreen } />
        </Stack.Navigator>
      </NavigationContainer>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
