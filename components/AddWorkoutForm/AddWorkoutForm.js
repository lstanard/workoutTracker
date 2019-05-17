import React from 'react';
import { View, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import t from 'tcomb-form-native';
import {
  addWorkout
} from '../../actions';
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

class AddWorkoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = () => {
    const value = this._form.getValue();
    this.props.addWorkout(value);
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

const mapDispatchToProps = dispatch => {
  return {
    addWorkout: (data) => {
      dispatch(addWorkout(data))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddWorkoutForm);
