import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import React from "react";
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {

  const [number, setNumber] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");
  const [data, setData] = useState([]);

  const plusbuttonPressed = () => {
    setResult(parseInt(number) + parseInt(number2))
    setData([...data, {key: number + ' + ' + number2 + ' = ' + result}])
  }

  const minusbuttonPressed = () => {
    setResult(parseInt(number) - parseInt(number2))
    setData([...data, {key: number + ' - ' + number2 + ' = ' + result}])
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
      <View style={{ flexDirection:"row" }}>
        <Button title ="+" onPress={plusbuttonPressed} />
        <Button title ="-" onPress={minusbuttonPressed} />
      </View>
      <Text>History</Text>
      <FlatList
        data={data}
        renderItem={({item}) =><Text>{item.key}</Text>}  
        keyExtractor={(item, index) => index.toString()}
      />
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1 
  }
});