import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [number, setNumber] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");

  const plusbuttonPressed = () => {
    setResult(parseInt(number) + parseInt(number2))
  }

  const minusbuttonPressed = () => {
    setResult(parseInt(number) - parseInt(number2))
  }

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput keyboardType={"number-pad"}
        style={styles.input}
        onChangeText={number => { 
          setNumber(number) }}
          value={number}
      />

      <TextInput keyboardType={"number-pad"}
        style={styles.input}
        onChangeText={number2 => { 
          setNumber2(number2) }}
          value={number2}
      />  
      <StatusBar style="auto" />
      <View style={{ flexDirection:"row" }}>
        <Button title ="+" onPress={plusbuttonPressed} />
        <Button title ="-" onPress={minusbuttonPressed} />
    </View>
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
