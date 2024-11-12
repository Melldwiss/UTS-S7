import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';

const FoodMenu = () => {
  // State for the list of food items available
  const [foodList] = useState([
    {
      id: 1,
      name: 'Spaghetti Bolognese',
      description: 'Spaghetti with rich tomato and meat sauce.',
      price: 50000,
      calories: 350,
    },
    {
      id: 2,
      name: 'Caesar Salad',
      description: 'Fresh romaine with Caesar dressing, croutons, and Parmesan.',
      price: 30000,
      calories: 150,
    },
    {
      id: 3,
      name: 'Margherita Pizza',
      description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
      price: 75000,
      calories: 400,
    },
    {
      id: 4,
      name: 'Cheeseburger',
      description: 'Beef patty with cheese, lettuce, and tomato.',
      price: 65000,
      calories: 550,
    },
    {
      id: 5,
      name: 'Chocolate Cake',
      description: 'Rich chocolate cake with creamy frosting.',
      price: 45000,
      calories: 300,
    },
    {
      id: 6,
      name: 'Chicken Wings',
      description: 'Spicy wings served with a side of ranch.',
      price: 40000,
      calories: 200,
    },
  ]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Food Menu</Text>
      
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryHeader}>Choose Category</Text>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryButtonText}>Appetizers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryButtonText}>Main Dishes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryButtonText}>Desserts</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={foodList}
        renderItem={({ item }) => (
          <View style={styles.foodCard}>
            <Text style={styles.foodName}>{item.name}</Text>
            <Text style={styles.foodPrice}>Rp {item.price.toLocaleString()}</Text>
            <Text style={styles.foodCalories}>{item.calories} kcal</Text>
            <Text style={styles.foodDescription}>{item.description}</Text>
            <TouchableOpacity style={styles.orderButton}>
              <Text style={styles.orderButtonText}>Order Now</Text>
            </TouchableOpacity>
          </View>
        )}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.grid}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3f2fd',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#01579b',
    textAlign: 'center',
    marginBottom: 20,
  },
  categoryContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  categoryHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#01579b',
    marginBottom: 10,
    textAlign: 'center',
  },
  categoryButton: {
    backgroundColor: '#01579b',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginVertical: 5,
  },
  categoryButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  grid: {
    justifyContent: 'space-between',
  },
  foodCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 5,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 4,
  },
  foodName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#01579b',
    marginBottom: 4,
  },
  foodPrice: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0277bd',
    marginBottom: 2,
  },
  foodCalories: {
    fontSize: 12,
    color: '#757575',
    marginBottom: 5,
  },
  foodDescription: {
    fontSize: 12,
    color: '#757575',
    marginBottom: 15,
  },
  orderButton: {
    backgroundColor: '#00897b',
    borderRadius: 10,
    paddingVertical: 8,
    alignItems: 'center',
  },
  orderButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default FoodMenu;
