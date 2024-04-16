import { View, Text, StyleSheet } from 'react-native'
import { HomeScreen } from '../../components/HomeScreen'


export const HomePage = () => {
    return (
        <View style={styles.landingPage}>
            <HomeScreen />
        </View>
    )
}


const styles = StyleSheet.create({
    landingPage: {
      flex: 1,
      backgroundColor: "#17004A",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  