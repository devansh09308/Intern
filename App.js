import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import React from 'react';

// import SocketUse from './src/screens/SocketUse';
import HookEffect from './src/screens/HookEffect';

const App = () => {
  
  return (
    <View style={styles.container}>
      
      <HookEffect />
      {/* <SocketUse /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    flexDirection: 'row',
  }
});

export default App;