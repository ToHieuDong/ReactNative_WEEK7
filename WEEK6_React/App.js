import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen1 from "./Screen/Screen1";
import Screen2 from "./Screen/Screen2";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <stack.Navigator>
        <stack.Screen name={'Screen1'} component={Screen1} options={{headerShown: false}}/>
        <stack.Screen name={'Screen2'} component={Screen2} options={{headerShown: false}}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}


