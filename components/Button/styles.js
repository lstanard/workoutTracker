import { StyleSheet } from 'react-native';
import colors from '../../assets/styles/colors';

export default StyleSheet.create({
  button: { 
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.brightRed,
    borderRadius: 3,
    paddingVertical: 12,
    paddingHorizontal: 18,
  },
  label: {
    color: '#fff',
    fontSize: 18,
    paddingTop: 1,
  },
  icon: {
    marginRight: 10,
  }
});
