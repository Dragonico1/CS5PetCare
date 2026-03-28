import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, Text, TouchableOpacity, View } from 'react-native';
import PetListStyles from '../styles/PetListStyles';
import { getSpeciesEmoji } from '../data/speciesData';

// Initial sample data simulating an API response
const INITIAL_PETS = [
  { id: '1', name: 'Luna', species: 'Perro', breed: 'Labrador', age: 3, weight: 28 },
  { id: '2', name: 'Michi', species: 'Gato', breed: 'Siamés', age: 5, weight: 4 },
  { id: '3', name: 'Rocky', species: 'Perro', breed: 'Bulldog', age: 2, weight: 20 },
  { id: '4', name: 'Pilo', species: 'Pájaro', breed: 'Canario', age: 1, weight: 0.3 },
];

function PetListScreen({ navigation }) {
  const [pets, setPets] = useState([]);

  // Simulates loading data from an API on mount
  useEffect(() => {
    setPets(INITIAL_PETS);
  }, []);

  function handlePetPress(pet) {
    navigation.navigate('PetDetail', { pet });
  }

  function renderPetCard({ item }) {
    return (
      <TouchableOpacity
        style={PetListStyles.card}
        onPress={() => handlePetPress(item)}
      >
        <Text style={PetListStyles.emoji}>{getSpeciesEmoji(item.species)}</Text>
        <View style={PetListStyles.cardInfo}>
          <Text style={PetListStyles.petName}>{item.name}</Text>
          <Text style={PetListStyles.petSpecies}>{item.species} · {item.breed}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={PetListStyles.container}>
      <Text style={PetListStyles.title}>Mis Mascotas</Text>
      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        renderItem={renderPetCard}
        ListEmptyComponent={<Text style={PetListStyles.emptyText}>No hay mascotas registradas.</Text>}
      />
    </SafeAreaView>
  );
}

export default PetListScreen;