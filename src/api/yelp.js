import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization:
			'Bearer JV53-iGkOzu3AOYlwirE0S_tfXPVHO4Txp6am1tnj6tz5BEKr_zQ5jYBYntU9YCAx7K2dN757yH7Dl3Q9jzeH-7XYdakUHBUmHKvnJovsTW7ac4s75zYDgOzVngUYnYx', // for testing
	},
});
