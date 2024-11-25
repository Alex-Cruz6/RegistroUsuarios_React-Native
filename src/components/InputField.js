import React from 'react';
import { TextInput, View } from 'react-native';
import styles from '../styles/globalStyles';

const InputField = ({ placeholder, value, onChange, secureTextEntry, mask }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#aaa"
      />
    </View>
  );
};

export default InputField;