import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper'

import Navigation from '../../../src/components/navigation/Navigation'

const Home = () => {
	return (
		<View style={styles.home}>
			<Navigation></Navigation>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	home: {
		flex: 1,
	}
});
