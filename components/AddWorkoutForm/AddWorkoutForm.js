import React from 'react';
import { View, Text, Modal, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import t from 'tcomb-form-native';
import {
  addWorkout
} from '../../actions';
import Button from '../Button/Button';
import globalStyles from '../../assets/styles/global';
import styles from './styles';
import colors from '../../assets/styles/colors';

import AddExerciseModal from '../AddExerciseModal/AddExerciseModal';

const Form = t.form.Form;

const formStyles = {
  ...Form.stylesheet,
  textbox: {
    normal: {
      ...Form.stylesheet.textbox.normal,
      ...globalStyles.textInput
    }
  }
};

const options = {
  stylesheet: formStyles
};

const Workout = t.struct({
  title: t.String,
  notes: t.String,
});

class AddWorkoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
    this.state = {
      modalVisible: false
    }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  handleSubmit = () => {
    const value = this._form.getValue();
    this.props.addWorkout(value);
  }

  addExercise = () => {
    this.setModalVisible(true);

    // Maybe exercises, etc. aren't technically part of the form,
    // I just create stuff that looks the same, 
    // then when the form is submitted manually gather all the data
    // and merge into the value being sent to dispatch
  }

  render() {
    return (
      <View style={{ padding: 30, alignSelf: 'stretch' }}>
        <Form 
          ref={c => this._form = c}
          options={options}
          type={Workout} />
        <View style={{ marginBottom: 10 }}>
          {/* Container for exercise inputs */}
          <Text style={{
              paddingVertical: 30,
              paddingHorizontal: 30,
              marginBottom: 15,
              textAlign: 'center', 
              borderRadius: 4,
              borderStyle: 'dashed',
              borderColor: '#718093',
              borderWidth: 2}}>
              Tap "Add Exercise" to begin adding exercises for this workout.</Text>
          <AddExerciseModal
            handleClose={() => this.setModalVisible(false)}
            isVisible={this.state.modalVisible} />
          <Button
            icon='ios-add-circle-outline'
            background={colors.brightBlue}
            action={this.addExercise}
            label="Add Exercise" />
        </View>
        <Button 
          action={this.handleSubmit}
          label="Save" />
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
