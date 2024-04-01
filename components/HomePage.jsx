import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HomePage() {
  const [modalVisible, setModalVisible] = useState(false);
  const [array, setArray] = useState(['haris', 'hamza', 'erhad']);
  const navigation = useNavigation();

  const goToAbout = () => {
    console.log('Navigating to About');
    navigation.navigate('about'); // Check if 'About' matches the screen name in your navigation stack
  };

  return (
    <View style={styles.container1}>
      <Button onPress={goToAbout} title="Go to About" />
    </View>
  );
}

export default HomePage;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
});
