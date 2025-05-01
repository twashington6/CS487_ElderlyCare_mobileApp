{/* This file contains the code for our Login screen. We were able to remain decently faithful to the UI design made in Figma*/}

import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('./assets/loginbg.jpg')}
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
      }}
      resizeMode="cover"
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 40,
          paddingHorizontal: 20,
        }}
      >
        <Image
          source={require('./assets/logo.png')}
          style={{
            width: 125,
            height: 125,
            resizeMode: 'contain',
            marginBottom: 10,
          }}
        />

        <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#231F94' }}>
          ElderlyCare
        </Text>

        <Text
          style={{
            fontSize: 16,
            color: '#231F94',
            fontStyle: 'italic',
            marginBottom: 20,
          }}
        >
          Your care, our priority.
        </Text>

        <TouchableOpacity style={styles.authButton}>
          <Image source={require('./assets/google.png')} style={styles.icon} />
          <Text style={styles.authText}>Join with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.authButton}>
          <Image source={require('./assets/apple.png')} style={styles.icon} />
          <Text style={styles.authText}>Join with Apple</Text>
        </TouchableOpacity>

        <Text style={{ marginTop: 20, fontSize: 14, color: '#333' }}>
          Have an account?
        </Text>

        <TextInput
          placeholder="User Name"
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
        />

        {/* Only this button works which is intentional as we are not making the ENTIRE app. We didn't have the time to actually implement a log in system and database */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{
            backgroundColor: '#231F94',
            paddingVertical: 12,
            paddingHorizontal: 30,
            borderRadius: 6,
            marginTop: 20,
          }}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
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

  input: {
    backgroundColor: '#fff',
    width: '80%',
    padding: 12,
    marginVertical: 8,
    borderRadius: 6,
    fontSize: 16,
  },

  loginText: {
    color: '#fff',
    fontSize: 16,
  },
});
