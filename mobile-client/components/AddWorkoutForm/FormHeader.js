import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import globalStyles from '../../assets/styles/global';

export default FormHeader = ({currentWorkout, handleChange}) => {
  return (
    <View>
      <TextInput
        autoFocus={true}
        style={globalStyles.textInput}
        onChangeText={text => handleChange('title', text)}
        value={currentWorkout.title} />
      <TextInput
        style={globalStyles.textInput}
        onChangeText={text => handleChange('notes', text)}
        value={currentWorkout.notes} />
    </View>
  );
}
