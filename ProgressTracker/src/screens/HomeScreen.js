import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Header from '../components/Header';

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Header title="Welcome to the Home Screen" />
    <View style={styles.content}>
      <Text style={styles.text}>Welcome to the Home Screen</Text>
      <Button title="Go to Projects →" onPress={() => navigation.navigate('projects')} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
});

export default HomeScreen;
