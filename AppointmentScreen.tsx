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
      <View style={styles.background}>
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
          {/* Header */}
          <View style={{ padding: safePadding }}>
            <ImageBackground
              source={require('./assets/appointments_headerbg.png')}
              style={styles.headerBox}
              imageStyle={{ borderRadius: 12 }}
            >
              <Text style={styles.title}>Welcome Back!</Text>
            </ImageBackground>
          </View>

          {/* Popular Services */}
          <View style={styles.grid}>
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
                  styles.gridItem,
                  pressed && { backgroundColor: '#e0e0e0' } // light gray on press
                ]}
              >
                <Image
                  source={item.icon}
                  style={{
                    width: 40,
                    height: 40,
                    marginBottom: 10,
                    alignSelf: 'center'
                  }}
                />
                <Text style={styles.gridTitle}>{item.title}</Text>
                <Text style={styles.gridSubtitle}>{item.subtitle}</Text>
              </Pressable>
            ))}
          </View>


          <Text style={{ paddingHorizontal: '5%', marginBottom: 8, fontWeight: 'bold' }}>
            You Have an Upcoming Appointment...
          </Text>

          <View style={styles.appointmentWrapper}>
            <Image
              source={require('./assets/doctor_avatar.png')}
              style={{
                  width: 60,
                  height: 60,
                  marginRight: 12}}
            />

          <View style={styles.appointmentCard}>
            <Text style={styles.appointmentTitle}>Dr. Akash Kumar</Text>
            <Text style={styles.appointmentSubtitle}>Consultant Geriatrician</Text>
            <Text style={styles.appointmentTime}>Wednesday, 7th April, 2:30 pm (30 mins)</Text>
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

        <View style={styles.bottomBar}>
         {[
             { icon: require('./assets/home.png'), label: 'Home' },
             { icon: require('./assets/calendar.png'), label: 'Reminder' },
             { icon: require('./assets/chat.png'), label: 'Chat' },
             { icon: require('./assets/profile.png'), label: 'Profile' }
         ].map((item, index) => (
             <Pressable
               key={index}
               onPress={() => navigation.navigate(item.label)}
               style={styles.bottomBarItem}
             >
               <Image source={item.icon} style={styles.bottomBarIcon} />
               <Text style={styles.bottomBarLabel}>{item.label}</Text>
             </Pressable>
            ))}
          </View>
      </View>
    );

}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },

  title: {
      fontSize: 28,
      alignItems: 'left',
      fontWeight: 'bold',
  },

  headerBox: {
    padding: 10,
    backgroundColor: '#e0f7ff',
    width: 404,
    height: 155,
    borderRadius: 12,
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  gridItem: {
    width: '47%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    elevation: 2,
  },

  gridTitle: {
    fontWeight: 'bold',
  },

  gridSubtitle: {
    fontSize: 12,
    color: '#666',
  },

  appointmentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
    marginBottom: 20,
  },

  appointmentCard: {
    flex: 1,
    backgroundColor: '#d2f0ff',
    borderRadius: 10,
    padding: 12,
  },

  appointmentImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },

  appointmentText: {
    flex: 1,
  },

  appointmentTitle: {
    fontWeight: 'bold',
  },

  appointmentSubtitle: {
    fontStyle: 'italic',
    marginBottom: 5,
  },

  appointmentTime: {
    marginTop: 4,
    fontSize: 13,
    color: '#555',
  },

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

  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },

  bottomBarItem: {
    alignItems: 'center',
  },

  bottomBarIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },

  bottomBarLabel: {
    fontSize: 12,
    color: '#444',
  }

});