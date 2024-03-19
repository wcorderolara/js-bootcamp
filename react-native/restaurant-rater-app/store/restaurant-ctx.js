import { createContext, useState } from "react";

export const RestaurantContext = createContext({
    restaurants: [],
    selectedRestaurant: {},
    updateRestaurants: (_restaurants) => {},
    updateSelectedRestaurant: (_restaurant) => {},
})

function RestaurantContextProvider({children}) {
    const [restaurants, setRestaurants] = useState([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState({});

    function updateRestaurants(_restaurants) {
        setRestaurants(_restaurants);
    }

    function updateSelectedRestaurant(_restaurant) {
        setSelectedRestaurant(_restaurant);
    }

    const value = {
        restaurants: restaurants,
        selectedRestaurant: selectedRestaurant,
        updateRestaurants: updateRestaurants,
        updateSelectedRestaurant: updateSelectedRestaurant,
    }

    return <RestaurantContext.Provider value={value}>{children}</RestaurantContext.Provider>
}

export default RestaurantContextProvider
