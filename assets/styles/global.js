import { StyleSheet } from 'react-native';
import colors from './colors';

const SCREEN_PADDING_TOP = 75;

export default StyleSheet.create({
  container: {
    backgroundColor: colors.gray,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: SCREEN_PADDING_TOP,
  },
  scrollViewContainer: {
    backgroundColor: colors.gray,
    flexGrow: 1,
  },
  textInput: {
    backgroundColor: '#fff',
    borderWidth: 0,
    borderRadius: 0,
    fontSize: 16,
    padding: 12,
    height: 45,
    marginBottom: 15
  }
});
