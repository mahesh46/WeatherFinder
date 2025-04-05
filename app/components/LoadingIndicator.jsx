import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const LoadingIndicator = ({ loading }) => {
  if (!loading) return null;

  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text>Loading weather...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default LoadingIndicator;