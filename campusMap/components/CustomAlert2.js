import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';

const CustomAlert = ({ visible, onClose }) => {
  return (
   // Modale est pour afficher le contenu d'une maniére modale , c'est à dire par dessus le contenu principal  de l'application.
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Oops!</Text>
          <Text style={styles.modalDescription}>Erreur lors de la création du compte. Veuillez réessayer.</Text>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Fermer</Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: '#F8EFE0',
    borderRadius: 12,
    padding: 25,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#003CA6", 
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: "#1D1D1D", 
  },
  closeButton: {
    backgroundColor: "#003CA6",
    padding: 12,
    borderRadius: 15,
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default CustomAlert;
