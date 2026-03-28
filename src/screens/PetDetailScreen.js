import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import PetDetailStyles from '../styles/PetDetailStyles';
import { getSpeciesEmoji } from '../data/speciesData';

function PetDetailScreen({ route, navigation }) {
  const { pet } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);
  const [visitCount, setVisitCount] = useState(0);

  // Updates the header title dynamically when the pet param changes
  useEffect(() => {
    navigation.setOptions({ title: pet.name });
    setVisitCount((prev) => prev + 1);
  }, [pet]);

  function handleToggleFavorite() {
    setIsFavorite((prev) => !prev);
  }

  return (
    <SafeAreaView style={PetDetailStyles.container}>
      <View style={PetDetailStyles.card}>
        <Text style={PetDetailStyles.emoji}>
          {getSpeciesEmoji(pet.species)}
        </Text>
        <Text style={PetDetailStyles.petName}>{pet.name}</Text>

        <View style={PetDetailStyles.infoRow}>
          <Text style={PetDetailStyles.infoLabel}>Especie</Text>
          <Text style={PetDetailStyles.infoValue}>{pet.species}</Text>
        </View>
        <View style={PetDetailStyles.infoRow}>
          <Text style={PetDetailStyles.infoLabel}>Raza</Text>
          <Text style={PetDetailStyles.infoValue}>{pet.breed}</Text>
        </View>
        <View style={PetDetailStyles.infoRow}>
          <Text style={PetDetailStyles.infoLabel}>Edad</Text>
          <Text style={PetDetailStyles.infoValue}>{pet.age} años</Text>
        </View>
        <View style={PetDetailStyles.infoRow}>
          <Text style={PetDetailStyles.infoLabel}>Peso</Text>
          <Text style={PetDetailStyles.infoValue}>{pet.weight} kg</Text>
        </View>
        <View style={PetDetailStyles.infoRow}>
          <Text style={PetDetailStyles.infoLabel}>Visitas a esta pantalla</Text>
          <Text style={PetDetailStyles.infoValue}>{visitCount}</Text>
        </View>

        <TouchableOpacity
          style={PetDetailStyles.favoriteButton}
          onPress={handleToggleFavorite}
        >
          <Text style={PetDetailStyles.favoriteText}>
            {isFavorite ? '❤️ Favorito' : '🤍 Agregar a favoritos'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={PetDetailStyles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={PetDetailStyles.backText}>← Volver</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default PetDetailScreen;