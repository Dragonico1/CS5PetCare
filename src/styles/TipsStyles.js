import { StyleSheet } from 'react-native';

const TipsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    justifyContent: 'center',
  },
  counter: {
    textAlign: 'center',
    fontSize: 14,
    color: '#888',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 28,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    alignItems: 'center',
    minHeight: 200,
    justifyContent: 'center',
  },
  tipTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3a6fd8',
    marginBottom: 16,
    textAlign: 'center',
  },
  tipDescription: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    lineHeight: 24,
  },
  nextButton: {
    marginTop: 24,
    backgroundColor: '#3a6fd8',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  autoLabel: {
    textAlign: 'center',
    fontSize: 13,
    color: '#aaa',
    marginTop: 10,
  },
});

export default TipsStyles;