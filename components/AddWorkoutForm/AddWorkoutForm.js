import React from 'react';
import { View, Button } from 'react-native';
import t from 'tcomb-form-native';
import styles from './styles';

const Form = t.form.Form;

const formStyles = {
  ...Form.stylesheet,
  textbox: {
    normal: {
      ...Form.stylesheet.textbox.normal,
      ...styles.formInput
    }
  }
};

const options = {
  stylesheet: formStyles
};

const Workout = t.struct({
  title: t.String,
  notes: t.String
});

export default class AddWorkoutForm extends React.Component {
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log(value);
  }

  render() {
    return (
      <View style={{ padding: 30, alignSelf: 'stretch' }}>
        <Form 
          ref={c => this._form = c}
          options={options}
          type={Workout} />
        <Button
          title="Save"
          onPress={this.handleSubmit}
        />
      </View>
    )
  }
}
