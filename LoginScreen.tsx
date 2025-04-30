import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
  ScrollView
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();

  return (

    <ImageBackground
      source={require('./assets/loginbg.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />

        <Text style={styles.title}>ElderlyCare</Text>
        <Text style={styles.subtitle}>Your care, our priority.</Text>

        <TouchableOpacity style={styles.authButton}>
          {/* DOES NOTHING */}
          <Image source={require('./assets/google.png')} style={styles.icon} />
          <Text style={styles.authText}>Join with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.authButton}>
           {/* DOES NOTHING */}
          <Image source={require('./assets/apple.png')} style={styles.icon} />
          <Text style={styles.authText}>Join with Apple</Text>
        </TouchableOpacity>

        <Text style={styles.loginPrompt}>Have an account?</Text>

        <TextInput placeholder="User Name" style={styles.input} />
        <TextInput placeholder="Password" style={styles.input} secureTextEntry />

        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Home')}>
          {/* ON PRESS-> HOMESCREEN */}
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },

  logo: {
    width: 125,
    height: 125,
    resizeMode: 'contain',
    marginBottom: 10,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#231F94',
  },

  subtitle: {
    fontSize: 16,
    color: '#231F94',
    fontStyle: 'italic',
    marginBottom: 20,
  },

  authButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '80%',
    padding: 12,
    marginVertical: 8,
    borderRadius: 6,
    elevation: 2,
  },

  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
    resizeMode: 'contain',
  },

  authText: {
    fontSize: 16,
    color: '#333',
  },

  loginPrompt: {
    marginTop: 20,
    fontSize: 14,
    color: '#333',
  },

  input: {
    backgroundColor: '#fff',
    width: '80%',
    padding: 12,
    marginVertical: 8,
    borderRadius: 6,
    fontSize: 16,
  },

  loginButton: {
    backgroundColor: '#231F94',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 6,
    marginTop: 20,
  },

  loginText: {
    color: '#fff',
    fontSize: 16,
  },
});
