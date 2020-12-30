import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import Dashboard from '../../containers/dashboard/dashboard'
import Subscriptions from '../../containers/subscriptions/subscriptions'
import Profile from '../../containers/profile/profile'

const Footer = () => {
	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: 'profile', title: 'Profil', icon: 'account-circle' },
		{ key: 'dashboard', title: 'Turlar', icon: 'map-marker' },
		{ key: 'subscriptions', title: 'Aboneliklerim', icon: 'cart' },
	]);

	const renderScene = BottomNavigation.SceneMap({
		profile: Profile,
		dashboard: Dashboard,
		subscriptions: Subscriptions
	});

	return (
		<BottomNavigation
			navigationState={{ index, routes }}
			onIndexChange={setIndex}
			renderScene={renderScene}
		/>
	);
};

export default Footer;