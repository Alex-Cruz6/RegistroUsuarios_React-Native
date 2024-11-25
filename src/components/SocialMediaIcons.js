import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SocialMediaIcons = () => {
  return (
    <View style={styles.socialIcons}>
      <TouchableOpacity style={styles.iconButton}>
        <Icon name="google" size={30} color="#DB4437" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <Icon name="envelope" size={30} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  iconButton: {
    padding: 10,
  },
});

export default SocialMediaIcons;