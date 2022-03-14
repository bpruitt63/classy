import axios from 'axios';
import {apiKey} from './ApiKey';

const headers = {
    'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
    'x-rapidapi-key': apiKey
}

class WeatherApi {

    static async getWeather(zipCode) {
        try {
            const weather = await axios.request({
                                method: 'GET',
                                url: 'https://weatherapi-com.p.rapidapi.com/current.json',
                                params: {q: zipCode},
                                headers
                            });
            return weather.data;
        } catch (err) {
            console.err(err)
            throw err.response;
        };
    };
};

export default WeatherApi;