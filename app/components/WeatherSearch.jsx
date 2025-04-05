import React from 'react';
import { View, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const WeatherSearch = ({ city, setCity, fetchWeather }) => {
  const handleSearch = () => {
    if (!city.trim()) {
      Alert.alert('Error', 'Please enter a city name');
      return;
    }
    fetchWeather();
  };

  const clearInput = () => {
    setCity('');
  };

  return (
    <View style={styles.searchContainer}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Enter city name"
          value={city}
          onChangeText={setCity}
        />
        {city.length > 0 && (
          <TouchableOpacity 
            onPress={clearInput} 
            style={styles.clearButton}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}} // Makes touch area larger
          >
            <Ionicons 
              name="close-circle" 
              size={20} 
              color="#999" 
              style={styles.icon} 
            />
          </TouchableOpacity>
        )}
      </View>
      <Button title="Get Weather" onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputWrapper: {
    width: '85%',
    justifyContent: 'center', // This helps with vertical alignment
  },
  input: {
    height: 50,
    borderColor: '#90caf9',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 12,
    width: '100%',
    backgroundColor: '#ffffff',
    elevation: 3,
    paddingRight: 35, // Make space for the clear button
  },
  clearButton: {
    position: 'absolute',
    right: 10,
    height: '100%', // Take full height of input
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    width: 30, // Adequate width for touch area
  },
  icon: {
    // Additional icon styling if needed
  },
});

export default WeatherSearch;