import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import MoreInfo from '../screens/MoreInfo';
import {TapGestureHandler} from 'react-native-gesture-handler';
const Stack = createStackNavigator();
// const ActionBarImage = () => {
//   return (
//     <View style={{ flexDirection: 'row' }}>
//       <Image
//         source={backimg}
//         tintColor='#2d3436'
//         style={{
//           tintColor: 'white',
//           width: 25,
//           height: 25,
//           borderRadius: 40 / 2,
//           marginLeft: 15,
//         }}
//       />
//     </View>
//   );
// };
function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: TapGestureHandler,
        }}>
        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={Login}
        />
        <Stack.Screen
          name="More"
          options={{headerShown: false}}
          component={MoreInfo}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
