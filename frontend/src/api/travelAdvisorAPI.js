import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/places`, {
            params: {
                type,
                sw: `${sw.lat},${sw.lng}`,
                ne: `${ne.lat},${ne.lng}`,
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching places:', error);
        return [];
    }
};


export const getWeatherData = async(lat, lng) => {
    try {
        if (lat && lng) {
            const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
                params: { lat:lat, lon: lng },
                headers: {
                    'x-rapidapi-key': '82e098f605msh94314169e440b79p13d164jsnd8d68c757dc7',
                    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
                },
            });

            return data;
        }
    } catch (error) {
        console.log(error);
    }
};