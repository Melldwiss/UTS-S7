import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#01579b', // Dark blue for active tab
        tabBarInactiveTintColor: '#cfd8dc', // Light gray-blue for inactive tab
        tabBarStyle: {
          backgroundColor: '#e3f2fd', // Light blue background
        },
      }}
    >
      <Tabs.Screen
        name="input"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle-outline" size={size} color={color} /> // Add circle icon for "input"
          ),
          tabBarLabel: 'Tambah',
        }}
      />
      <Tabs.Screen
        name="produk"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list-circle-outline" size={size} color={color} /> // List circle icon for "produk"
          ),
          tabBarLabel: 'Produk',
        }}
      />
    </Tabs>
  );
};
