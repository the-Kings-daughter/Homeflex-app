import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export const ButtonLink = ({ imageUrl, buttonText, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonContainer}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/Google.png")}
      />
        <Text style={styles.text}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff', 
      paddingVertical: 10,
      borderWidth: 1,
      borderColor: '#C7C6C6',
      paddingHorizontal: 20,
      borderRadius: 30,
      gap: 10,
      marginTop: 10,
    },
    image: {
      width: 24,
      height: 24,
      marginRight: 10,
      resizeMode: 'contain',
      
    },
    text: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#201F1F', // Color of the button text
    },
  });
  