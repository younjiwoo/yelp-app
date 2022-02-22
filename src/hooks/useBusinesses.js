import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
	const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');

	const searchApi = async (searchTerm) => {
		try {
			const response = await yelp.get('/search', {
				params: {
					limit: 50,
					term: searchTerm,
					location: 'san mateo',
				},
			});
			setResults(response.data.businesses);

			if (errorMessage) setErrorMessage('');
		} catch (error) {
			console.log('error---', error);
			setErrorMessage('Oops, something went wrong!');
		}
	};

	useEffect(() => {
		// default search results:
		searchApi('sushi');
	}, []);

	return [searchApi, results, errorMessage];
};
