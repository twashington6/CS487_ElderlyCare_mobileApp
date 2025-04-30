import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        {/* Location & Profile */}
        <View style={styles.topRow}>
          <View>
            <Text style={styles.locationLabel}>Chicago</Text>
            <Text style={styles.address}>West Wood State Avenue</Text>
          </View>
          <Image source={require('./assets/profile.png')} style={styles.avatar} />
        </View>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <TextInput placeholder="Search" style={styles.searchInput} />
          <Image source={require('./assets/mic.png')} style={styles.micIcon} />
        </View>

        {/* Appointment Card */}
        <View style={styles.cardContainer}>
          <View style={styles.cardTop}>
            <Image source={require('./assets/nurse.png')} style={styles.cardImage} />
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Diana Ruther</Text>
              <View style={styles.ratingRow}>
                <Text style={styles.ratingText}>⭐ 4.8</Text>
              </View>
            </View>
            <Image source={require('./assets/call.png')} style={styles.callIcon} />
          </View>

          <View style={styles.cardBottom}>
            <View style={styles.cardDetail}>
              <Image source={require('./assets/nursing.png')} style={styles.cardDetailIcon} />
              <Text style={styles.cardDetailText}>Nursing Care</Text>
            </View>
            <View style={styles.cardDetail}>
              <Image source={require('./assets/calendar.png')} style={styles.cardDetailIcon} />
              <Text style={styles.cardDetailText}>Mon, Nov 20</Text>
            </View>
            <Image source={require('./assets/clock.png')} style={styles.cardDetailIcon} />
          </View>
        </View>

        {/* Services Grid */}
        <Text style={styles.sectionTitle}>Services</Text>
        <View style={styles.servicesGrid}>
          {[
            { icon: require('./assets/heart.png'), label: 'Health Monitoring' },
            { icon: require('./assets/share.png'), label: 'Sharing' },
            { icon: require('./assets/appointment.png'), label: 'Appointments' },
            { icon: require('./assets/globe.png'), label: 'Browse' },
          ].map((item, index) => (
            <Pressable key={index} style={styles.serviceItem} onPress={() => navigation.navigate(item.label)}>
              <Image source={item.icon} style={styles.serviceIcon} />
              <Text style={styles.serviceLabel}>{item.label}</Text>
            </Pressable>
          ))}
        </View>

        {/* EMPTY SPACE */}
        <View><Text></Text></View>
        <View style={{ height: 175 }} />
        <View><Text></Text></View>

        {/* Emergency Button */}
        <Pressable style={styles.emergencyButton}>
          <Text style={styles.emergencyText}>Emergency</Text>
          <Image source={require('./assets/siren.png')} style={styles.sirenIcon} />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={styles.exitLink}>Exit</Text>
        </Pressable>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    padding: 20,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  locationLabel: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  address: {
    fontSize: 14,
    color: '#555',
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },

  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginBottom: 20,
  },

  searchInput: {
    flex: 1,
    paddingVertical: 10,
  },

  micIcon: {
    width: 20,
    height: 20,
  },

  cardContainer: {
    backgroundColor: '#c8e9ff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
    elevation: 2,
  },

  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },

  cardInfo: {
    flex: 1,
  },

  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },

  ratingText: {
    fontSize: 14,
  },

  callIcon: {
    width: 24,
    height: 24,
  },

  cardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  cardDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  cardDetailIcon: {
    width: 18,
    height: 18,
    marginRight: 4,
  },

  cardDetailText: {
    fontSize: 13,
    color: '#333',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  serviceItem: {
    width: '47%',
    backgroundColor: '#e7f5ff',
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: 20,
    marginBottom: 10,
  },

  serviceIcon: {
    width: 32,
    height: 32,
    marginBottom: 8,
  },

  serviceLabel: {
    textAlign: 'center',
    fontSize: 14,
  },

  emergencyButton: {
    backgroundColor: '#ff4d4d',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 20,
  },

  emergencyText: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 8,
  },

  sirenIcon: {
    width: 20,
    height: 20,
  },

  exitLink: {
    textAlign: 'center',
    color: '#555',
    marginBottom: 30,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 10,
  },
  gridItem: {
    width: '47%',
    backgroundColor: '#f2f9ff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 16,
  },
  serviceIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  serviceTitle: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
});

