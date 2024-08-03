// screens/MainScreen.tsx
import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/types';
import Toast from 'react-native-toast-message';

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MainScreen'>;

type Props = {
  navigation: MainScreenNavigationProp;
};

const MainScreen: React.FC<Props> = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const showToast = () => {
    Toast.show({
      type: 'success',
      position: 'bottom',
      text1: 'Cancelaste!',
      visibilityTime: 2000, 
      autoHide: true,
      topOffset: 100,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola Mundo!!!</Text>
      <Text style={styles.subtitle}>Esta es mi primera app react native</Text>
      <TouchableOpacity style={styles.buttonAccept} onPress={() => navigation.navigate('SecondScreen')}>
        <Text style={styles.buttonText}>Aceptar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonCancel} onPress={() => showToast()}>
        <Text style={styles.buttonText}>Cancelar</Text>
      </TouchableOpacity>

      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.closeButtonText}>×</Text>
          </TouchableOpacity>
          <Text style={styles.modalText}>Cancelaste!</Text>
        </View>
      </Modal> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonCancel: {
    backgroundColor: '#ff6666',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: 100,
    alignItems: 'center',
  },
  buttonAccept: {
    backgroundColor: '#66ff66',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    color: 'red',
    fontWeight: 'bold',
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    zIndex: 1,
  },
  closeButtonText: {
    fontSize: 32,
    color: 'black',
  },
});

export default MainScreen;
