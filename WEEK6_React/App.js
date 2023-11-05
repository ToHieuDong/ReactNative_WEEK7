import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen1 from "./Screen/Screen1";
import Screen2 from "./Screen/Screen2";
import { Image, TouchableOpacity } from "react-native";
import Screen3 from "./Screen/Screen3";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <stack.Navigator>
        <stack.Screen name={'Screen1'} component={Screen1} options={{headerShown: false}}/>
        <stack.Screen name={'Screen2'} component={Screen2} options={{
          headerShown: true,
          title: 'Shop Near Me',
          headerTitleAlign:'center',
          headerRight: () =>    (
            <TouchableOpacity style={{ marginRight: 20 }} >
              <Image
                source={{uri: 'https://res.cloudinary.com/du73a0oen/image/upload/v1698646558/Week6/icon/serch_zbbwu5.png'}} // Đường dẫn đến tập tin biểu tượng
                style={{ width: 24, height: 24 }}
              />
            </TouchableOpacity>
          )
        }}/>

        <stack.Screen name={'Screen3'} component={Screen3} options={{
          headerShown: true,
          title: 'Drink',
          headerTitleAlign:'center',
          headerRight: () =>    (
            <TouchableOpacity style={{ marginRight: 20 }} >
              <Image
                source={{uri: 'https://res.cloudinary.com/du73a0oen/image/upload/v1698646558/Week6/icon/serch_zbbwu5.png'}} // Đường dẫn đến tập tin biểu tượng
                style={{ width: 24, height: 24 }}
              />
            </TouchableOpacity>
          )
        }}/>

      </stack.Navigator>
    </NavigationContainer>
  );
}


