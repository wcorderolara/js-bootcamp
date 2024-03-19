import { FlatList} from 'react-native'
import { useContext, useEffect } from 'react';
import { RestaurantContext } from '../store/restaurant-ctx';
import { fetchRestaurants } from '../services/restaurant.service';
import RestaurantTile from '../components/RestaurantTile';


const HomeScreen = () => {
    const {restaurants, updateRestaurants} = useContext(RestaurantContext);

    useEffect( () => {
        async function onInit() {
            const results = await fetchRestaurants();
            updateRestaurants(results.data)
        }

        onInit();
    }, []);
  return (
    <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id}
        renderItem={ (itemData) => {
            return <RestaurantTile {...itemData.item} />
        }}
    />
  )
}

export default HomeScreen