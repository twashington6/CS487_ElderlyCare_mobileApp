{/* This file contains the code for the Appointment Screen. Due to the different "regions" of the screen, we defined each within the comments above the dedicated section*/}

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
    const safePadding = '5%';

    return (
      <View style={{flex: 1, width: '100%', height: '100%', backgroundColor: '#fff'}}>
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>

          {/* Header */}
          <View style={{ padding: safePadding }}>
            <ImageBackground
              source={require('./assets/appointments_headerbg.png')}
              style={{padding: 10, backgroundColor: '#e0f7ff', width: 404, height: 155, borderRadius: 12, marginBottom: 20}}
              imageStyle={{ borderRadius: 12 }}
            >
              <Text style={{fontSize: 28, alignItems: 'left', fontWeight: 'bold'}}>Welcome Back!</Text>
            </ImageBackground>
          </View>

          {/* Popular Services */}
          <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
            {[
              { icon: require('./assets/book.png'), title: "Book an appointment", subtitle: "Find a doctor" },
              { icon: require('./assets/consult.png'), title: "Request Consultation", subtitle: "Talk to a specialist" },
              { icon: require('./assets/pharmacy.png'), title: "Locate a Pharmacy", subtitle: "Purchase Medicine" },
              { icon: require('./assets/emergency.png'), title: "Emergency", subtitle: "Request for ambulance" }
            ].map((item, index) => (
              <Pressable
                key={index}
                onPress={() => {}}
                style={({ pressed }) => [
                  {width: '47%', backgroundColor: '#fff', borderRadius: 10, padding: 10, marginBottom: 15, elevation: 2},
                  pressed && { backgroundColor: '#e0e0e0' }
                ]}
              >
                <Image
                  source={item.icon}
                  style={{width: 40, height: 40, marginBottom: 10, alignSelf: 'center'}}
                />
                <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
                <Text style={{fontSize: 12, color: '#666'}}>{item.subtitle}</Text>
              </Pressable>
            ))}
          </View>

          {/* Upcoming Appointment */}
          <Text style={{paddingHorizontal: '5%', marginBottom: 8, fontWeight: 'bold'}}>
            You Have an Upcoming Appointment...
          </Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: '5%', marginBottom: 20}}>
            <Image
              source={require('./assets/doctor_avatar.png')}
              style={{
                  width: 60,
                  height: 60,
                  marginRight: 12}}
            />

          <View style={{
                flex: 1,
                backgroundColor: '#d2f0ff',
                borderRadius: 10,
                padding: 12
              }}>
            <Text style={{fontWeight: 'bold'}}>Dr. Akash Kumar</Text>
            <Text style={{fontStyle: 'italic', marginBottom: 5}}>Consultant Geriatrician</Text>
            <Text style={{marginTop: 4, fontSize: 13, color: '#555'}}>Wednesday, 7th April, 2:30 pm (30 mins)</Text>
            </View>
          </View>


          {/* Featured Doctors */}
          <Text style={styles.sectionTitle}>Featured Doctors</Text>
          <ScrollView horizontal style={{ paddingLeft: safePadding }}>
            <View style={styles.doctorCard}>
              <Image source={require('./assets/doc1.png')} style={styles.docImage} />
              <Text>Dr. Kathryn</Text>
              <Text>Consultant cardiologist</Text>
              <Text>⭐ 4.0 (390 reviews)</Text>
            </View>

            <View style={styles.doctorCard}>
              <Image source={require('./assets/doc2.png')} style={styles.docImage} />
              <Text>Dr. Jack</Text>
              <Text>Consultant Physician</Text>
              <Text>⭐ 4.5 (350 reviews)</Text>
            </View>

            <View style={styles.doctorCard}>
               <Image source={require('./assets/doctordefault1.png')} style={styles.docImage} />
               <Text>Dr. Default</Text>
               <Text>Bad Doctor</Text>
               <Text>⭐ 1.0 (5 reviews)</Text>
            </View>

            <View style={styles.doctorCard}>
                <Image source={require('./assets/doctordefault1.png')} style={styles.docImage} />
                <Text>Dr. Default</Text>
                <Text>Okay Doctor</Text>
                <Text>⭐ 2.3 (27 reviews)</Text>
            </View>

            <View style={styles.doctorCard}>
                <Image source={require('./assets/doctordefault1.png')} style={styles.docImage} />
                <Text>Dr. Default</Text>
                <Text>Amazing Doctor</Text>
                <Text>⭐ 5.0 (9999999 reviews)</Text>
                </View>
          </ScrollView>
        </ScrollView>



        {/* Bottom Row */}
        {/* Only the Home button works which is intentional as we are not making the ENTIRE app, only basic navigation */}
        <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingVertical: 10, backgroundColor: '#ffffff', borderTopWidth: 1, borderTopColor: '#ddd'}}>
         {[
             { icon: require('./assets/home.png'), label: 'Home' },
             { icon: require('./assets/calendar.png'), label: 'Reminder' },
             { icon: require('./assets/chat.png'), label: 'Chat' },
             { icon: require('./assets/profile.png'), label: 'Profile' }
         ].map((item, index) => (
             <Pressable
               key={index}
               onPress={() => navigation.navigate(item.label)}
               style={{alignItems: 'center'}}
             >
               <Image source={item.icon} style={{width: 24, height: 24, marginBottom: 4}} />
               <Text style={{fontSize: 12, color: '#444',}}>{item.label}</Text>
             </Pressable>
            ))}
          </View>
      </View>
    );

}


const styles = StyleSheet.create({
  doctorCard: {
    width: 140,
    marginRight: 15,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    elevation: 2,
    alignItems: 'center',
  },

  docImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },

});