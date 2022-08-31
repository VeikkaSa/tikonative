import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image } from 'react-native';

export default function App() {

  const [text, setText] = useState("");

  const buttonPressed = () => {
    Alert.alert("You typed: " + text)
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        onChangeText={text => { 
          console.log(text)
          setText(text) }}
        value={text}
      />
      <Button title ="Press me" onPress={buttonPressed} />
      <StatusBar style="auto" />
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
  input: {
    width: 200, 
    borderColor: "gray", 
    borderWidth: 1
  }
});
