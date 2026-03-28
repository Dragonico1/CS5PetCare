import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { CARE_TIPS } from '../data/tipsData';
import TipsStyles from '../styles/TipsStyles';

const MAX_TIPS = CARE_TIPS.length;
const ROTATION_INTERVAL_MS = 5000;

function TipsScreen() {
  const [tips] = useState(CARE_TIPS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [infoMessage, setInfoMessage] = useState('');

  // Auto-rotates tips every 5 seconds with cleanup to avoid memory leaks
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MAX_TIPS);
    }, ROTATION_INTERVAL_MS);

    return () => clearInterval(intervalId);
  }, []);

  // Updates the info message every time the current tip changes
  useEffect(() => {
    setInfoMessage(`Consejo ${currentIndex + 1} de ${MAX_TIPS}`);
  }, [currentIndex]);

  function handleNextTip() {
    setCurrentIndex((prev) => (prev + 1) % MAX_TIPS);
  }

  const currentTip = tips[currentIndex];

  return (
    <SafeAreaView style={TipsStyles.container}>
      <Text style={TipsStyles.counter}>{infoMessage}</Text>

      <View style={TipsStyles.card}>
        <Text style={TipsStyles.tipTitle}>{currentTip.title}</Text>
        <Text style={TipsStyles.tipDescription}>{currentTip.description}</Text>
      </View>

      <TouchableOpacity style={TipsStyles.nextButton} onPress={handleNextTip}>
        <Text style={TipsStyles.nextButtonText}>Siguiente consejo →</Text>
      </TouchableOpacity>

      <Text style={TipsStyles.autoLabel}>Cambia automáticamente cada 5 segundos</Text>
    </SafeAreaView>
  );
}

export default TipsScreen;