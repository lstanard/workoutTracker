import { StyleSheet } from 'react-native';
import colors from '../../assets/styles/colors';

export default StyleSheet.create({
  wrapper: {
    marginBottom: 15,
    marginTop: 15
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  exerciseTitle: {
    fontSize: 20, 
    fontWeight: 'bold',
  },
  exerciseRow: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  exerciseRowHeadingLabel: {
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
  }
});
