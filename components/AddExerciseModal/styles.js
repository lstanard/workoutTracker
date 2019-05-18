import { StyleSheet } from 'react-native';
import colors from '../../assets/styles/colors';

export default StyleSheet.create({
  overlayContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialogContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: colors.gray,
    borderBottomColor: colors.medGray,
    borderBottomWidth: 1,
    marginBottom: 15,
    width: 260,
  }
});
