//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, SafeAreaView, Platform, StatusBar, Dimensions} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  const {landscape} = useDeviceOrientation();

 
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: '100%',
        height: landscape ? "100%" : "30%",
      }}></View>
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
