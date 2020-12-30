import * as React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Text, Card, Title, Paragraph, Button } from 'react-native-paper'

const subscriptionsData = {
	"subscription": [
		{
			"id": 990,
			"name": "Temel Üyelik",
			"note": "Temel üyelik açıklaması kısa",
			"description": "Temel üyelik açıklaması uzun",
			"price": 0,
			"buyed": true
		}
	]
}

const Subscriptions = () => {
	return (
		<View style={styles.subscriptions}>
			<ScrollView>
				{subscriptionsData.subscription.map(subscription =>
					<Card key={subscription.id} style={styles.card}>
						<Card.Title title={subscription.name} subtitle={subscription.note} />
						<Card.Content>
							<Paragraph>{subscription.description}</Paragraph>
						</Card.Content>
						{subscription.buyed === true ?
							<Card.Actions style={styles.cardaction}>
								<Button icon="check" color='orange'>ÜCRETSİZ</Button>
							</Card.Actions>
							:
							<Card.Actions style={styles.cardaction}>
								<Text>{subscription.price} ₺</Text>
								<Button icon="cart" >Şimdi Satın Al</Button>
							</Card.Actions>
						}
					</Card>
				)}
			</ScrollView>
		</View>
	);
};

export default Subscriptions;

const styles = StyleSheet.create({
	subscriptions: {
		flex: 1
	},
	card: {
		margin: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84
	},
	cardaction: {
		flex: 1,
		alignSelf: 'flex-end'
	}
});
