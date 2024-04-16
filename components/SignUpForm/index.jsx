import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { CustomButton } from '../Button';
import { useNavigation } from '@react-navigation/native';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation();
  const controlSignUp = () => {
    navigation.navigate('AlmostDone');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Phone Number:', phoneNumber);
  
    
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Full Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Your E-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder=" Enter a Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <View style={styles.buttonContainer}>
      <CustomButton
      
        title="Continue"
        onPress={controlSignUp}
      />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
    fontFamily: "Bricolage Grotesque",
  },
  buttonContainer: {
    width: '80%',

  },
});

export default SignUpForm;