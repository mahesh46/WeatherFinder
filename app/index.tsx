// Index.js
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import WeatherSearch from './components/WeatherSearch';
import CurrentWeather from './components/CurrentWeather';
import ForecastList from './components/ForecastList';
import LoadingIndicator from './components/LoadingIndicator';

export default function Index() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    setLoading(true);
    setWeatherData(null);
    setForecastData(null);
    setError(null);
    
    try {
      const [weatherResponse, forecastResponse] = await Promise.all([
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ab71eba0c59ed9dc706208627076a1c4`),
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=ab71eba0c59ed9dc706208627076a1c4`)
      ]);
      
      const weather = await weatherResponse.json();
      const forecast = await forecastResponse.json();
      
      if (weather.cod === '404' || forecast.cod === '404') {
        setError('City not found');
        return;
      }
      
      setWeatherData(weather);
      setForecastData(forecast);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Weather Finder</Text>
      
      <WeatherSearch 
        city={city} 
        setCity={setCity} 
        fetchWeather={fetchWeather} 
      />
      
      <LoadingIndicator loading={loading} />
      
      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
      
      <CurrentWeather weatherData={weatherData} />
      
      <ForecastList forecastData={forecastData} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#e3f2fd',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#1976d2',
  },
  errorContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ffcdd2',
    borderRadius: 5,
  },
  errorText: {
    color: '#c62828',
    textAlign: 'center',
  },
});