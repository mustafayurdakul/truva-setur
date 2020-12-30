import * as React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { TextInput, Button, Text } from 'react-native-paper'

const Login = ({ navigation }) => {

	const [loading, setLoading] = React.useState(false)
	const [text, setEmail] = React.useState('yurdakulmustafa@outlook.com')
	const [password, setPassword] = React.useState('*******')

	return (
		<View style={styles.login}>
			<Image
				style={styles.logo}
				source={require('../../../assets/setruvalogo.png')}
			/>
			<TextInput
				style={styles.input}
				label="E - Mail"
				value={text}
				onChangeText={text => setEmail(text)}
			/>
			<TextInput
				style={styles.input}
				label="Password"
				value={password}
				onChangeText={password => setPassword(password)}
			/>
			<Text style={styles.text}>v00.0016</Text>
			<Button style={styles.button} onPress={() => {
				setLoading(true)
				setTimeout(() => {
					navigation.navigate('Home')
				}, 1000)
				setTimeout(() => {
					setLoading(false)
				}, 1250)
			}} loading={loading} disabled={loading} color='crimson' mode="contained">Login</Button>
			<Text style={styles.bottomtext}>2020 ® Not all rights reserved.</Text>
		</View>
	)
}

export default Login

const styles = StyleSheet.create({
	login: {
		flex: 1
	},
	input: {
		marginBottom: 10,
		marginLeft: 50,
		marginRight: 50
	},
	button: {
		marginTop: 10,
		marginRight: 50,
		alignSelf: 'flex-end'
	},
	logo: {
		alignSelf: 'center',
		marginTop: 150,
		height: 120,
		width: 240
	},
	bottomtext: {
		marginTop: 180,
		color: 'gray',
		alignSelf: 'center'
	},
	text: {
		marginLeft: 50,
		marginRight: 50,
		color: 'gray',
	}
})
