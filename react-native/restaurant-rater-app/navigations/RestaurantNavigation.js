import {
  RestaurantDetails,
  RestaurantReviews,
  RestaurantFacilities,
} from "../screens/restaurant";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//https://icons.expo.fyi/Index
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { RestaurantContext } from "../store/restaurant-ctx";
import { useContext, useLayoutEffect } from "react";
import { useAuth } from "../store/auth-ctx";

const Tab = createBottomTabNavigator();

function PublicTabs() {
  return (
    <>
      <Tab.Screen
        name="RestaurantDetails"
        component={RestaurantDetails}
        options={{
          tabBarLabel: "Info",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="RestaurantFacilities"
        component={RestaurantFacilities}
        options={{
          tabBarLabel: "Facilities",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="restaurant" color={color} size={size} />
          ),
        }}
      />
    </>
  );
}

function AuthTabs() {
  return (
    <Tab.Screen
      name="RestaurantReviews"
      component={RestaurantReviews}
      options={{
        tabBarLabel: "Reviews",
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="reviews" color={color} size={size} />
        ),
      }}
    />
  );
}

const RestaurantNavigation = ({ route, navigation }) => {
  const { selectedRestaurant } = useContext(RestaurantContext);
  const { isAuthenticated } = useAuth();

  useLayoutEffect(() => {
    async function init() {
      navigation.setOptions({
        title: selectedRestaurant.name,
      });
    }
    init();
  }, [selectedRestaurant, navigation]);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#fde047" },
        tabBarActiveTintColor: "#333333",
        tabBarInactiveTintColor: '#cecece',
      }}
    >
      {PublicTabs()}
      {isAuthenticated && AuthTabs()}
    </Tab.Navigator>
  );
};

export default RestaurantNavigation;
