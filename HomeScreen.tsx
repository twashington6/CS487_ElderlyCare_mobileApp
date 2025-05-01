{/* This file contains the code for our Home screen. Due to the different "regions" of the screen, we defined each within the comments above the dedicated section*/}

import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>

        {/* Location & Profile */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <View>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Chicago</Text>
            <Text style={{ fontSize: 14, color: '#555' }}>West Wood State Avenue</Text>
          </View>
          <Image source={require('./assets/profile.png')} style={{ width: 48, height: 48, borderRadius: 24 }} />
        </View>

        {/* Search Bar */}
        <View style={{ flexDirection: 'row', backgroundColor: '#f0f0f0', borderRadius: 10, paddingHorizontal: 10, alignItems: 'center', marginBottom: 20 }}>
          <TextInput placeholder="Search" style={{ flex: 1, paddingVertical: 10 }} />
          <Image source={require('./assets/mic.png')} style={{ width: 20, height: 20 }} />
        </View>

        {/* Appointment Card */}
        <View style={{ backgroundColor: '#c8e9ff', borderRadius: 10, padding: 12, marginBottom: 20, elevation: 2 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Image source={require('./assets/nurse.png')} style={{ width: 50, height: 50, borderRadius: 8, marginRight: 10 }} />
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Diana Ruther</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                <Text style={{ fontSize: 14 }}>⭐ 4.8</Text>
              </View>
            </View>
            <Image source={require('./assets/call.png')} style={{ width: 24, height: 24 }} />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('./assets/nursing.png')} style={{ width: 18, height: 18, marginRight: 4 }} />
              <Text style={{ fontSize: 13, color: '#333' }}>Nursing Care</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('./assets/calendar.png')} style={{ width: 18, height: 18, marginRight: 4 }} />
              <Text style={{ fontSize: 13, color: '#333' }}>Mon, Nov 20</Text>
            </View>
            <Image source={require('./assets/clock.png')} style={{ width: 18, height: 18, marginRight: 4 }} />
          </View>
        </View>

        {/* Services Grid */}
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 12 }}>Services</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 20 }}>
          {[
            { icon: require('./assets/heart.png'), label: 'Health Monitoring' },
            { icon: require('./assets/share.png'), label: 'Sharing' },
            { icon: require('./assets/appointment.png'), label: 'Appointments' },
            { icon: require('./assets/globe.png'), label: 'Browse' },
          ].map((item, index) => (
            <Pressable
              key={index}
              style={{ width: '47%', backgroundColor: '#e7f5ff', borderRadius: 12, alignItems: 'center', paddingVertical: 20, marginBottom: 10 }}
              onPress={() => navigation.navigate(item.label)}
            >
              <Image source={item.icon} style={{ width: 32, height: 32, marginBottom: 8 }} />
              <Text style={{ textAlign: 'center', fontSize: 14 }}>{item.label}</Text>
            </Pressable>
          ))}
        </View>

        {/* EMPTY SPACE */}
        <View><Text></Text></View>
        <View style={{ height: 175 }} />
        <View><Text></Text></View>

        {/* Emergency Button */}
        <Pressable style={{ backgroundColor: '#ff4d4d', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 14, borderRadius: 8, marginBottom: 20 }}>
          <Text style={{ color: '#fff', fontWeight: 'bold', marginRight: 8 }}>Emergency</Text>
          <Image source={require('./assets/siren.png')} style={{ width: 20, height: 20 }} />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={{ textAlign: 'center', color: '#555', marginBottom: 30 }}>Exit</Text>
        </Pressable>

      </ScrollView>
    </View>
  );
}
