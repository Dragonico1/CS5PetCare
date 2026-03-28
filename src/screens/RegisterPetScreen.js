import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import RegisterPetStyles from '../styles/RegisterPetStyles';

const INITIAL_FORM = {
  name: '',
  species: '',
  breed: '',
  age: '',
  weight: '',
};

function RegisterPetScreen() {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  // Validates the form in real time whenever a field changes
  useEffect(() => {
    const allFilled = name.trim() && species.trim() && breed.trim() && age.trim() && weight.trim();
    setIsFormValid(!!allFilled);
  }, [name, species, breed, age, weight]);

  function handleRegister() {
    Alert.alert(
      'Mascota Registrada',
      `Nombre: ${name}\nEspecie: ${species}\nRaza: ${breed}\nEdad: ${age} años\nPeso: ${weight} kg`,
      [{ text: 'OK' }]
    );
  }

  function handleClear() {
    setName('');
    setSpecies('');
    setBreed('');
    setAge('');
    setWeight('');
  }

  return (
    <SafeAreaView style={RegisterPetStyles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={RegisterPetStyles.title}>Registrar Mascota</Text>

          <Text style={RegisterPetStyles.label}>Nombre</Text>
          <TextInput
            style={RegisterPetStyles.input}
            placeholder="Ej: Luna"
            value={name}
            onChangeText={setName}
          />

          <Text style={RegisterPetStyles.label}>Especie</Text>
          <TextInput
            style={RegisterPetStyles.input}
            placeholder="Ej: Perro, Gato"
            value={species}
            onChangeText={setSpecies}
          />

          <Text style={RegisterPetStyles.label}>Raza</Text>
          <TextInput
            style={RegisterPetStyles.input}
            placeholder="Ej: Labrador"
            value={breed}
            onChangeText={setBreed}
          />

          <Text style={RegisterPetStyles.label}>Edad (años)</Text>
          <TextInput
            style={RegisterPetStyles.input}
            placeholder="Ej: 3"
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
          />

          <Text style={RegisterPetStyles.label}>Peso (kg)</Text>
          <TextInput
            style={RegisterPetStyles.input}
            placeholder="Ej: 12.5"
            value={weight}
            onChangeText={setWeight}
            keyboardType="decimal-pad"
          />

          <TouchableOpacity
            style={[
              RegisterPetStyles.registerButton,
              !isFormValid && RegisterPetStyles.registerButtonDisabled,
            ]}
            onPress={handleRegister}
            disabled={!isFormValid}
          >
            <Text style={RegisterPetStyles.registerButtonText}>Registrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={RegisterPetStyles.clearButton} onPress={handleClear}>
            <Text style={RegisterPetStyles.clearButtonText}>Limpiar</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default RegisterPetScreen;