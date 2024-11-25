import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import InputField from './src/components/InputField';
import Icon from './src/components/Icon'; 
import styles from './src/styles/globalStyles';
import { auth } from './utils/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './src/screens/Register';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const Stack = createStackNavigator();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, username, password);
      setIsLoggedIn(true);
      setError('');
    } catch (err) {
      setError('Credenciales incorrectas. Intenta nuevamente.');
    }
  };

  if (isLoggedIn) {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>¡Bienvenido, {username}!</Text>
        <TouchableOpacity style={styles.button} onPress={() => setIsLoggedIn(false)}>
          <Text style={styles.buttonText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login">
          {({ navigation }) => (
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
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                  <Text style={styles.buttonText}>Iniciar Sesión</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate('Register')}
                >
                  <Text style={styles.buttonText}>Crear Cuenta</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Stack.Screen>

        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
