// screens/SecondScreen.tsx
import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/types';

type SecondScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SecondScreen'
>;

type Props = {
  navigation: SecondScreenNavigationProp;
};

const SecondScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Ya es hora de volver...</Text>
      <TouchableOpacity
        style={styles.buttonVolver}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonVolver: {
    backgroundColor: '#ffff00',
    padding: 10,
    borderRadius: 8,
    width: 100,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SecondScreen;
