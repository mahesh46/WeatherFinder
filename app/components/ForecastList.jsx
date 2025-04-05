import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ForecastItem from './ForecastItem';

const ForecastList = ({ forecastData }) => {
  if (!forecastData || forecastData.cod !== '200') return null;

  const getDailyForecast = () => {
    const dailyForecasts = {};
    forecastData.list.forEach(item => {
      const date = item.dt_txt.split(' ')[0];
      if (!dailyForecasts[date]) {
        dailyForecasts[date] = item;
      }
    });
    return Object.values(dailyForecasts).slice(0, 5);
  };

  const dailyForecasts = getDailyForecast();

  return (
    <View style={styles.forecastSection}>
      <Text style={styles.header}>5-Day Forecast</Text>
      <FlatList
        horizontal
        data={dailyForecasts}
        renderItem={({ item }) => <ForecastItem item={item} />}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.forecastList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  forecastSection: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  forecastList: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1976d2',
  },
});

export default ForecastList;