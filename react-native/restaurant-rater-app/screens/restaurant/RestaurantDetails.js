import { ActivityIndicator, Alert, StyleSheet, Text, View } from "react-native";
import React, { useContext, useRef } from "react";
import { RestaurantContext } from "../../store/restaurant-ctx";
import { fetchRestaurantById } from "../../services/restaurant.service";
import { useFocusEffect } from "@react-navigation/native";

const RestaurantDetails = ({ route, navigation }) => {
  const { selectedRestaurant, setSelectedRestaurant, isLoading, setIsLoading } =
    useContext(RestaurantContext);
  const { restaurantId } = route.params;

  const prevRestId = useRef(null);

  const fetchRestaurantDetails = async (_restaurantId) => {
    if( prevRestId.current != _restaurantId) {
      setIsLoading(true);
      try {
        const _restaurant = await fetchRestaurantById(_restaurantId);
        setSelectedRestaurant(_restaurant.data);
        prevRestId.current = _restaurantId;
      } catch (error) {
        console.log(error);
        Alert.alert("Error", error.response.data.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchRestaurantDetails(restaurantId);
    }, [restaurantId])
  );

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <Text>
          {JSON.stringify(selectedRestaurant)}
        </Text>
      )}
    </View>
  );
};

export default RestaurantDetails;

const styles = StyleSheet.create({});
