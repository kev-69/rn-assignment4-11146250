import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./screens/loginscreen";
import HomeScreen from "./screens/homescreen";



const Stack = createNativeStackNavigator();


const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="login"
          component={LoginScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;