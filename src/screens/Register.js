import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import InputField from '../components/InputField';
import Icon from '../components/Icon';
import styles from '../styles/globalStyles';
import { auth } from '../../utils/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, username, password);
      setError('');
      alert('Cuenta creada con éxito');
    } catch (err) {
      setError('Hubo un error al crear la cuenta. Intenta nuevamente.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Icon />
        <InputField
          placeholder="Correo Electrónico"
          value={username}
          onChange={setUsername}
        />
        <InputField
          placeholder="Contraseña"
          value={password}
          onChange={setPassword}
          secureTextEntry={true}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Crear Cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
