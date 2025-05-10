import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useFonts, Roboto_200ExtraLight ,Roboto_300Light ,Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto"
import { Register } from './src/screens/Register';
import { Historical } from './src/screens/Historical';

export default function App() {

   const [fontsLoaded] = useFonts({Roboto_300Light, Roboto_400Regular, Roboto_700Bold});

  return (
    <>
      <StatusBar style="auto" />
      { fontsLoaded ? 
      
      <Historical /> 
      : 
      <ActivityIndicator />
      }
      
    </>
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
