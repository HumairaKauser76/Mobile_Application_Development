import React, { useState } from 'react';
import {
  View, Text, SectionList, TextInput,
  TouchableOpacity, Modal, StyleSheet
} from 'react-native';

const contacts = [
  { id: '1', name: 'Huma', phoneNumber: '0370-6789653', group: 'Family' },
  { id: '2', name: 'Humaira', phoneNumber: '0310-6789567', group: 'Friends' },
  { id: '3', name: 'Humaira Kauser', phoneNumber: '0300-6723456', group: 'Work' },
  { id: '4', name: 'Uswa', phoneNumber: '0300-6789343', group: 'Friends' },
  { id: '5', name: 'Ali', phoneNumber: '0300-6798760', group: 'Work' },
  { id: '6', name: 'Alia', phoneNumber: '0345-9785635', group: 'Family' },
  { id: '7', name: 'Aliyan', phoneNumber: '0321-9635678', group: 'Work' },
  { id: '8', name: 'Ayesha', phoneNumber: '0321-1234567', group: 'Friends' },
  { id: '9', name: 'Sana', phoneNumber: '0308-7654321', group: 'Family' },
  { id: '10', name: 'Samra', phoneNumber: '0213-9876543', group: 'Work' },
];

export default function App() {
  const [search, setSearch] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  
  const groupedContacts = ['Family', 'Friends', 'Work'].map(group => ({
    title: group,
    data: contacts.filter(c =>
      c.group === group &&
      (c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.phoneNumber.includes(search))
    )
  })).filter(section => section.data.length > 0);

  const openModal = (contact) => {
    setSelectedContact(contact);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contacts</Text>

      <TextInput
        style={styles.input}
        placeholder="Search by name or number"
        value={search}
        onChangeText={text => setSearch(text)}
      />


      <SectionList
        sections={groupedContacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => openModal(item)}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.phone}>{item.phoneNumber}</Text>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.groupTitle}>{title}</Text>
        )}
      />

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            {selectedContact && (
              <>
                <Text style={styles.modalTitle}>Contact Details</Text>
                <Text>Name: {selectedContact.name}</Text>
                <Text>Phone: {selectedContact.phoneNumber}</Text>
                <Text>Group: {selectedContact.group}</Text>
                <TouchableOpacity
                  onPress={() => setModalVisible(false)}
                  style={styles.closeBtn}
                >
                  <Text style={{ color: 'white' }}>Close</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, paddingHorizontal: 20, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 8,
    padding: 10, marginBottom: 10
  },
  groupTitle: {
    fontSize: 18, fontWeight: 'bold', backgroundColor: '#eee',
    paddingVertical: 5, paddingHorizontal: 10, marginTop: 10
  },
  item: {
    padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc'
  },
  name: { fontSize: 16 },
  phone: { fontSize: 14, color: '#666' },
  modalContainer: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  modalBox: {
    backgroundColor: 'white', padding: 20, borderRadius: 10,
    width: '80%', alignItems: 'center'
  },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  closeBtn: {
    marginTop: 15, backgroundColor: '#2196F3',
    padding: 10, borderRadius: 8
  }
});
