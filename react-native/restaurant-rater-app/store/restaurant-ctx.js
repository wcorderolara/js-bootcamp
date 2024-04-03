import { createContext, useState } from "react";

export const RestaurantContext = createContext({
    restaurants: [],
    selectedRestaurant: {},
    isLoading: false,
    updateRestaurants: (_restaurants) => {},
    setIsLoading: (state) => {},
    setSelectedRestaurant: (state) => {}
})

function RestaurantContextProvider({children}) {
    const [restaurants, setRestaurants] = useState([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    function updateRestaurants(_restaurants) {
        setRestaurants(_restaurants);
    }

    const value = {
        restaurants: restaurants,
        selectedRestaurant: selectedRestaurant,
        isLoading: isLoading,
        updateRestaurants: updateRestaurants,
        setIsLoading: setIsLoading,
        setSelectedRestaurant: setSelectedRestaurant
    }

    return <RestaurantContext.Provider value={value}>{children}</RestaurantContext.Provider>
}

export default RestaurantContextProvider
