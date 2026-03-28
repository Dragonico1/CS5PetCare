import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, Text, TouchableOpacity, View } from 'react-native';
import PetListStyles from '../styles/PetListStyles';
import { getSpeciesEmoji } from '../data/speciesData';
import INITIAL_PETS from '../data/petsData';

function PetListScreen({ navigation }) {
  const [pets, setPets] = useState(INITIAL_PETS);

  // Listens for new pets added from RegisterPetScreen
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      const newPet = navigation.getState()?.routes?.find(
        (r) => r.name === 'PetList'
      )?.params?.newPet;

      if (newPet) {
        setPets((prev) => [...prev, { ...newPet, id: String(Date.now()) }]);
        navigation.setParams({ newPet: null });
      }
    });
    return unsubscribe;
  }, [navigation]);

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
        ListEmptyComponent={
          <Text style={PetListStyles.emptyText}>No hay mascotas registradas.</Text>
        }
      />
    </SafeAreaView>
  );
}

export default PetListScreen;