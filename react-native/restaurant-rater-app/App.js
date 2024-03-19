import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { HomeScreen } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurantContextProvider from "./store/restaurant-ctx";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <RestaurantContextProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Restaurants">
            <Stack.Screen
              name="Restaurants"
              component={HomeScreen}
              options={{
                title: "Restaurant Rater App",
                headerTitleAlign: "center",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </RestaurantContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
