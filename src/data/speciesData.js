export const SPECIES_EMOJI = {
  Perro: '🐶',
  Gato: '🐱',
  Pájaro: '🐦',
  Conejo: '🐰',
};

export function getSpeciesEmoji(species) {
  return SPECIES_EMOJI[species] || '🐾';
}