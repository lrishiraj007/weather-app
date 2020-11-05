import axios from 'axios';

const WeatherService = data => (
    axios.post('http://localhost:4000/user/weatherInfo', data)
		.then(res => res)
)

export default WeatherService;