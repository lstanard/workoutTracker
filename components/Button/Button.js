import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import colors from '../../assets/styles/colors';

// TODO: Rename to AppButton
export default function Button(props) {
  const { icon, label, action, background, size } = props;

  const backgroundColor = {
    backgroundColor: background ? background : colors.brightRed
  }

  return (
    <TouchableHighlight
      onPress={action}
      style={[styles.button, backgroundColor]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {icon && <Ionicons name={icon} size={25} color='#fff' style={styles.icon} />}
        <Text style={styles.label}>
          {label}
        </Text>
      </View>
    </TouchableHighlight>
  )
}
