import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://fairkom.net/nextcloud/index.php/s/DHSYraWj97r6YyS/preview" }} style={{ width: 305, height: 159 }} />

      <Text style={{color: '#888', fontSize: 18}}>
        To share a photo from your phone with a friend, just press the button below!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
