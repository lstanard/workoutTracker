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
    marginBottom: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.medGray,
  },
  exerciseTitle: {
    fontSize: 20, 
    fontWeight: 'bold',
  },
  exerciseRow: {
    backgroundColor: colors.gray,
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  exerciseRowHeadingLabel: {
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    minWidth: 60,
    textAlign: 'center',
  },
  removeSet: {
    position: 'absolute',
    right: 0,
  },
  swipedOpen: {}
});
