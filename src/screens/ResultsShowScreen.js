import React, { useEffect, useState } from 'react';
import { Text, FlatList, StyleSheet, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
	const [result, setResult] = useState(null);

	const id = navigation.getParam('id');

	console.log('result: ', result);

	const getResult = async (id) => {
		try {
			const response = await yelp.get(`/${id}`);
			setResult(response.data);
		} catch (error) {
			console.log('error');
		}
	};

	useEffect(() => {
		getResult(id);
	}, []);

	const getHeader = () => {
		return (
			<>
				<Text style={styles.name}>{result.name}</Text>
				<Text style={styles.phoneNumber}>{result.display_phone}</Text>
				<Text style={styles.price}>{result.price}</Text>
				<Text style={result.is_closed ? styles.closed : styles.open}>
					{result.is_closed ? 'Closed now' : 'Open'}
				</Text>
			</>
		);
	};

	const renderItem = (item) => {
		return <Image style={styles.imageStyle} source={{ uri: item }} />;
	};

	if (!result) {
		return null;
	}

	return (
		<FlatList
			data={result.photos}
			keyExtractor={(photo) => photo}
			renderItem={({ item }) => renderItem(item)}
			ListHeaderComponent={getHeader}
		/>
	);
};

const styles = StyleSheet.create({
	imageStyle: { height: 300, flex: 1 },
	name: { fontSize: 20, fontWeight: 'bold' },
	closed: { color: 'rgb(224, 7, 7)', fontWeight: 'bold' },
	open: { color: 'rgb(2, 161, 109)', fontWeight: 'bold' },
	phoneNumber: { fontWeight: 'bold' },
});

export default ResultsShowScreen;
