//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Alert, Text, TouchableNativeFeedback, View, Image, SafeAreaView, Button, Platform, StatusBar } from 'react-native';

export default function App() {

 
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button 
      title="Click Me" 
      onPress={() => console.log("Button tapped")}
        // onPress={() => 
        //  Alert.prompt("My title", "My message", (text) => console.log(text) )}
        // color="orange"
        // title="Click Me" 
        // onPress={() => console.log("Button tapped")}
        // onPress={() => alert('Button Tapped')}
        // onPress={() => Alert.alert("My title", "My message", [
        //  {text: "Yes", onPress: () => console.log("Yes")},
        //  {text: "No", onPress: () => console.log("No") },
        // ])}
        />
      
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange"};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // paddingTop: Platform.OS === 'android' ? 20 : 0,
    // justifyContent: 'center',
    // alignItems: 'center',
    
  },
});
