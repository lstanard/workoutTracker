import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import colors from '../../assets/styles/colors';

export default function Button(props) {
  const { icon, label, action, background } = props;

  const backgroundColor = {
    backgroundColor: background ? background : colors.brightRed
  }

  return (
    <TouchableOpacity
      onPress={action}
      style={[styles.button, backgroundColor]}>
      {icon && <Ionicons name={icon} size={25} color='#fff' style={styles.icon} />}
      <Text style={styles.label}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}
