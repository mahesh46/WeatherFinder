import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ForecastItem = ({ item }) => {
  return (
    <View style={styles.forecastCard}>
      <Text style={styles.forecastDate}>
        {new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}
      </Text>
      <Text style={styles.forecastDayDate}>
        {new Date(item.dt * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
      </Text>
      <Text style={styles.forecastTemp}>High: {Math.round(item.main.temp_max - 273.15)}°C</Text>
      <Text style={styles.forecastTemp}>Low: {Math.round(item.main.temp_min - 273.15)}°C</Text>
      <Text style={styles.forecastDesc}>{item.weather[0].description}</Text>
      <Text style={styles.forecastHumidity}>Humidity: {item.main.humidity}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  forecastCard: {
    width: 150,
    backgroundColor: '#bbdefb',
    borderRadius: 10,
    padding: 12,
    marginHorizontal: 8,
    alignItems: 'center',
    elevation: 2,
  },
  forecastDate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1976d2',
    marginBottom: 5,
  },
  forecastDayDate: {
    fontSize: 14,
    color: '#424242',
    marginBottom: 10,
  },
  forecastTemp: {
    fontSize: 14,
    color: '#424242',
    marginVertical: 2,
  },
  forecastDesc: {
    fontSize: 14,
    color: '#424242',
    marginVertical: 5,
    textAlign: 'center',
  },
  forecastHumidity: {
    fontSize: 12,
    color: '#424242',
    marginTop: 5,
  },
});

export default ForecastItem;