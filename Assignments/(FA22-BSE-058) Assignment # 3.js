import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  const [city, setCity] = useState('Fetching...');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setCity('Permission denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      let reverseGeocode = await Location.reverseGeocodeAsync(location.coords);

      if (reverseGeocode.length > 0) {
        setCity(reverseGeocode[0].city || reverseGeocode[0].region || 'Unknown');
      } else {
        setCity('Unknown');
      }
    })();
  }, []);

  return (
    <View style={styles.center}>
      <Text style={styles.title}>Your City:</Text>
      <Text style={styles.content}>{city}</Text>
    </View>
  );
}

function ProfileScreen({ navigation, route }) {
  const [name, setName] = useState('Your Name');

  useEffect(() => {
    navigation.setOptions({ title: name });
  }, [name]);

  return (
    <View style={styles.center}>
      <Text style={styles.title}>Enter Your Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Settings</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  content: {
    fontSize: 18,
    color: 'blue',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderColor: '#999',
  },
});
