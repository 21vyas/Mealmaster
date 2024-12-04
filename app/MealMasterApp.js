import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function MealMasterApp() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Here you would typically call your API to handle the subscription
    console.log('Subscribing with email:', email);
    // Reset the email input
    setEmail('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MealMaster</Text>
      <Text style={styles.subtitle}>Your personal meal planner and grocery list assistant</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Button title="Subscribe" onPress={handleSubscribe} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

