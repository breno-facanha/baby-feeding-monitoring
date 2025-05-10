import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useFonts, Roboto_200ExtraLight ,Roboto_300Light ,Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto"
import { Register } from './src/screens/Register';
import { Historical } from './src/screens/Historical';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { House, ListBullets } from 'phosphor-react-native';
import theme from './src/theme';

export default function App() {

   const [fontsLoaded] = useFonts({Roboto_300Light, Roboto_400Regular, Roboto_700Bold});

   const Tab = createBottomTabNavigator()

  return (
    <>
      <StatusBar style="auto" />
      { fontsLoaded ? 
        <NavigationContainer>
          <Tab.Navigator screenOptions={{ tabBarActiveTintColor: theme.COLORS.ROXO_600, headerShown: false}}>
            <Tab.Screen 
              name='Registrar' 
              component={Register}
              options={{ 
                title: '',
                tabBarLabel: "Registrar",
                tabBarIcon: ({ color, size}) => (
                  <House 
                  size={size}
                  color={color}/>
                )
              }}
            />
            <Tab.Screen 
              name='Historico' 
              component= {Historical}
              options={{
                title: '',
                tabBarLabel: "Historico",
                tabBarIcon: ({ color, size}) => (
                  <ListBullets 
                    size={size}
                    color={color}
                  />
                )
              }}
              />
          </Tab.Navigator>
        </NavigationContainer>
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
