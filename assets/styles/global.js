import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.gray,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollViewContainer: {
    backgroundColor: colors.gray,
    flexGrow: 1
  },
  textInput: {
    backgroundColor: '#fff',
    borderWidth: 0,
    borderRadius: 0,
    padding: 12,
    height: 45
  }
});
