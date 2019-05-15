import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export default function Button(props) {
  const { icon, label, action } = props;
  return (
    <TouchableOpacity
      onPress={action}
      style={styles.button}>
      {icon && <Ionicons name={icon} size={25} color='#fff' style={styles.icon} />}
      <Text style={styles.label}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}
