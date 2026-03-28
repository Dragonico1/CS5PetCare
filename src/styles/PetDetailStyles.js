import { StyleSheet } from 'react-native';

const PetDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,
    alignItems: 'center',
  },
  emoji: {
    fontSize: 64,
    marginBottom: 12,
  },
  petName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  infoLabel: {
    fontSize: 15,
    color: '#888',
    fontWeight: '500',
  },
  infoValue: {
    fontSize: 15,
    color: '#333',
    fontWeight: '600',
  },
  favoriteButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
    backgroundColor: '#ffe4e4',
  },
  favoriteText: {
    fontSize: 16,
    color: '#e05c5c',
    fontWeight: '600',
  },
  backButton: {
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
    backgroundColor: '#e0eaff',
  },
  backText: {
    fontSize: 16,
    color: '#3a6fd8',
    fontWeight: '600',
  },
});

export default PetDetailStyles;