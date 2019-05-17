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
  }
});
