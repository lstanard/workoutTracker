import React from 'react';
import { View, Text, Modal, TouchableHighlight, TextInput } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import globalStyles from '../../assets/styles/global';
import Button from '../Button/Button';

const inputStyles = {
  ...globalStyles.textInput,
  ...styles.input
}

class AddExerciseModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    this.props.handleAdd(this.state.text);
    this.props.handleClose();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isVisible !== nextProps.isVisible) {
      this.setState({text: ''});
    }
  }

  render() {
    return (
      <Modal
        transparent={true}
        animationType="fade"
        visible={this.props.isVisible}>
        <View style={styles.overlayContainer}>
          <View style={styles.dialogContainer}>
            <TextInput
              autoFocus={true}
              value={this.state.text}
              onChangeText={(text) => this.setState({text})}
              style={inputStyles} />
            <Button
              action={this.handleAdd}
              background={colors.brightBlue}
              label="Add" />
            <TouchableHighlight
              style={{marginTop: 15}}
              onPress={this.props.handleClose}>
              <Text>Cancel</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    );
  }
}

export default connect(null, null)(AddExerciseModal);
