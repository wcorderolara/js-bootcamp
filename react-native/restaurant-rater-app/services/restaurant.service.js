import axios from 'axios';
import config from './config';

export async function fetchRestaurants() {
    const response = await axios.get(`${config.baseUrl}/restaurants`);
    const restaurants = response.data;
    return restaurants;
}

export async function fetchRestaurantById(restaurantId) {
    const response = await axios.get(`${config.baseUrl}/restaurants/${restaurantId}`);
    const restaurant = response.data;

    return restaurant;
}
