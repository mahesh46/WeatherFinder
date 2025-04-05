// components/CurrentWeather.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CurrentWeather = ({ weatherData }) => {
  if (!weatherData) return null;

  if (weatherData.cod !== 200) {
    return (
      <View style={styles.result}>
        <Text style={styles.errorText}>Error: {weatherData.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.result}>
      <Text style={styles.header}>Current Weather</Text>
      <Text style={styles.text}>City: {weatherData.name}</Text>
      <Text style={styles.text}>Description: {weatherData.weather[0].description}</Text>
      <Text style={styles.text}>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</Text>
      <Text style={styles.text}>Humidity: {weatherData.main.humidity}%</Text>
      <Text style={styles.text}>Wind Speed: {weatherData.wind.speed} m/s</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  result: {
    marginTop: 20,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#bbdefb',
    borderRadius: 10,
    width: '85%',
    elevation: 2,
    marginBottom: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1976d2',
  },
  text: {
    fontSize: 16,
    marginVertical: 4,
    color: '#424242',
  },
  errorText: {
    fontSize: 16,
    color: '#c62828',
  },
});

export default CurrentWeather;