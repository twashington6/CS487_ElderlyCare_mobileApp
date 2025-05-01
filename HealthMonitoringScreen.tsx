{/* This file contains code from the Health Monitoring screen. Due to the different "regions" of the screen, we defined each within the comments above the dedicated section*/}

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
import { Pressable } from 'react-native';

export default function App() {
    const navigation = useNavigation();

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#D3E7FA' }}>
          {/* Header */}
          {/* Only the Home button works which is intentional as we are not making the ENTIRE app, only basic navigation */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16, alignItems: 'center' }}>
            <Image source={require('./assets/menu.png')} style={{ width: 24, height: 24 }} />
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={require('./assets/home.png')} style={{ width: 24, height: 24 }} />
            </TouchableOpacity>
            <Image source={require('./assets/profile.png')} style={{ width: 40, height: 40, borderRadius: 20 }} />
          </View>

          {/* Search Bar */}
          <View style={{ flexDirection: 'row', backgroundColor: 'white', margin: 16, borderRadius: 8, alignItems: 'center', paddingHorizontal: 10 }}>
            <TextInput
              placeholder="Search"
              style={{ flex: 1, paddingVertical: 10 }}
            />
            <Image source={require('./assets/mic.png')} style={{ width: 20, height: 20 }} />
          </View>

          {/* Title */}
          <Text style={{ fontSize: 22, fontWeight: 'bold', alignSelf: 'center', marginBottom: 10 }}>Health Monitoring</Text>

          {/* Heart Rate Card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Heart Rate</Text>
            <Image
              source={require('./assets/heart_graph.png')}
              style={{ height: 40, marginVertical: 10, alignSelf: 'center' }}
              resizeMode="contain"
            />
            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>74 Bpm</Text>
          </View>

          {/* Blood Pressure Card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Blood Pressure</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 10 }}>
              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>128/82</Text>
                <Text>mmHg</Text>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Image
                  source={require('./assets/lungs.png')}
                  style={{ width: 40, height: 40, marginBottom: 4 }}
                  resizeMode="contain"
                />
                <Text>19.5 breathes/min</Text>
              </View>
            </View>
          </View>

          {/* Reminders Card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Reminders
            </Text>
            <Image source={require('./assets/reminder_icon.png')} style={{ width: 20, height: 20, marginBottom: 4 }} />
            <Text>Doctors appointment at 7pm today</Text>
            <Text>Take medication at 1pm</Text>
          </View>

          {/* Doctor's Note */}
          <Text style={{ padding: 16, fontSize: 14 }}>
            <Text style={{ fontWeight: 'bold' }}>Doctor’s Note:</Text> {' '}
            Please make sure to have medicine on time and maintain healthy diet
          </Text>
        </ScrollView>
    );

}


const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  cardTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
  }
});