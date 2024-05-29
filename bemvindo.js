import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function BemVindo() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/milho-cachorro.png')} 
        style={styles.image} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default BemVindo;
