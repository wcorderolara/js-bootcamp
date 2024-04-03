import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { HomeScreen } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurantContextProvider from "./store/restaurant-ctx";
import { RestaurantNavigation, CustomDrawerMenu } from "./navigations";
import AuthContextProvider, { useAuth } from "./store/auth-ctx";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { RegisterScreen, SigninScreen } from "./screens/auth";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  const { isAuthenticated } = useAuth();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#fde047" },
        headerTintColor: "#333333",
        headerTitleAlign: "center",
        sceneContainerStyle: { backgroundColor: "#eaeaea" },
        drawerContentStyle: { backgroundColor: "#fff7d0" },
        drawerInactiveTintColor: "#64748b",
        drawerActiveTintColor: "#333333",
        drawerActiveBackgroundColor: "#fde047",
      }}
      drawerContent={(props) => <CustomDrawerMenu {...props} />}
    >
      <Drawer.Screen
        name="Restaurants"
        component={HomeScreen}
        options={{
          title: "Restaurant Rater App",
          headerTitleAlign: "center",
          drawerLabel: "Restaurantes",
        }}
      />
      {!isAuthenticated && (
        <>
          <Drawer.Screen
            name="Signin"
            component={SigninScreen}
            options={{ drawerLabel: "Inicio sesión", title: "Inicio Sesión" }}
          />
          <Drawer.Screen
            name="Register"
            component={RegisterScreen}
            options={{ drawerLabel: "Registrarme", title: "Registro Usuario" }}
          />
        </>
      )}
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <AuthContextProvider>
        <RestaurantContextProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Drawer"
              screenOptions={{
                headerStyle: { backgroundColor: "#fde047" },
                headerTintColor: "#333333",
                contentStyle: { backgroundColor: "#fefce8" },
              }}
            >
              <Stack.Screen
                name="Drawer"
                component={DrawerNavigator}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="RestaurantInfo"
                component={RestaurantNavigation}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </RestaurantContextProvider>
      </AuthContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
