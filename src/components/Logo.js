import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import logoImg from '../images/logo.png';

export default class Logo extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image source={logoImg} style={styles.image} />
				<Text style={styles.text}>Linglu Studio</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 3,
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		width: 120,
		height: 120,
	},
	text: {
		color: '#F035E0',
		fontWeight: 'bold',
		backgroundColor: 'transparent',
		marginTop: 10,
	}
});
