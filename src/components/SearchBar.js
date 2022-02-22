import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
	return (
		<View style={styles.backgroundStyle}>
			<EvilIcons name="search" style={styles.iconStyle} />
			<TextInput
				style={styles.inputStyle}
				autoCapitalize="none"
				autoCorrect={false}
				placeholder="Search"
				value={term}
				onChangeText={(newTerm) => onTermChange(newTerm)}
				onEndEditing={onTermSubmit}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	backgroundStyle: {
		backgroundColor: '#f0eeee',
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		borderWidth: 1,
		flexDirection: 'row',
		marginTop: 15,
	},
	inputStyle: {
		flex: 1,
		fontSize: 18,
	},
	iconStyle: { fontSize: 35, alignSelf: 'center', marginHorizontal: 10 },
});

export default SearchBar;
