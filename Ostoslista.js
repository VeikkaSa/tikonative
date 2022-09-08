import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import React from "react";
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {

  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const buttonPressed = () => {
    setList([...list, {key: item}])
  }

  const clearbuttonPressed = () => {
    setList([])
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={item => { 
          setItem(item) }}
          value={item}
      />
       <View style={{ flexDirection:"row" }}>
        <Button title ="ADD" onPress={buttonPressed} />
        <Button title ="CLEAR" onPress={clearbuttonPressed} />
        </View>
      <Text>Shopping List</Text>
      <FlatList
        data={list}
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