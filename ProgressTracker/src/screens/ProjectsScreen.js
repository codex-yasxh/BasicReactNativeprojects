import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Header from '../components/Header';

const ProjectsScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Header title="📁 Projects"/>
    <View style={styles.content}>
      <Text style={styles.text}>Here's your list of projects!</Text>
      <Button title="← Back to Home" onPress={() => navigation.goBack()} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
});

export default ProjectsScreen;
