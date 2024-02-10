import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    if (email && password) {
      // You can send the email and password to your server for authentication
      console.log('Email:', email);
      console.log('Password:', password);
      // Reset the input fields
      setEmail('');
      setPassword('');
    } else {
      console.log('Please enter login details');
    }
  };

  const handleForgotPassword = () => {
    // Implement forgot password functionality
    console.log('Forgot Password clicked');
  };

  const handleRegister = () => {
    // Implement registration functionality
    console.log('Register clicked');
  };

  return (
    <ImageBackground
      source={require('./assets/ChoresPic2.png')}
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.header}>ChoresRadar</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button title="Login" onPress={handleLogin} />
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.link}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.link}>Register</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
/* 


 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'flex-start',

    paddingTop: 100,
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    color: 'red',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
  link: {
    color: '#DD7BFF',
    textAlign: 'center',
    marginTop: 10,
  },
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    // opacity: 0.9,
  },
});

export default LoginScreen;
