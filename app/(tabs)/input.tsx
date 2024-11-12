import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const InputDataProduk = () => {
  const [nama, setNama] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [jumlah, setJumlah] = useState('');
  const [harga, setHarga] = useState('');

  const handleSubmit = () => {
    console.log({
      nama,
      deskripsi,
      jumlah,
      harga,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tambah Produk</Text>

      <TextInput
        style={styles.input}
        placeholder="Nama Produk"
        placeholderTextColor="#a0a0a0"
        value={nama}
        onChangeText={setNama}
      />

      <TextInput
        style={styles.input}
        placeholder="Deskripsi Produk"
        placeholderTextColor="#a0a0a0"
        value={deskripsi}
        onChangeText={setDeskripsi}
        multiline
      />

      <TextInput
        style={styles.input}
        placeholder="Jumlah"
        placeholderTextColor="#a0a0a0"
        value={jumlah}
        onChangeText={setJumlah}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Harga"
        placeholderTextColor="#a0a0a0"
        value={harga}
        onChangeText={setHarga}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Simpan Produk</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#f0f4f8', // Very light gray-blue background
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Dark gray text
    marginBottom: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  input: {
    backgroundColor: '#ffffff', // White input background
    borderWidth: 1,
    borderColor: '#d0d0d0', // Light gray border
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginVertical: 10,
    borderRadius: 10,
    fontSize: 16,
    color: '#333', // Dark gray text color
  },
  button: {
    backgroundColor: '#4a90e2', // Cool blue button color
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 25,
    elevation: 6, // Android shadow
    shadowColor: '#4a90e2', // iOS shadow color
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 12,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
});

export default InputDataProduk;
