import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { DarkTheme, DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './src/containers/login/login'
import Home from './src/containers/home/home'

const theme = {
    ...DarkTheme,
    roundness: 10,
    colors: {
        ...DarkTheme.colors,
        primary: 'crimson',
    },
}

const themeWhite = {
    ...DefaultTheme,
    roundness: 10,
    colors: {
        ...DefaultTheme.colors,
        primary: 'crimson',
    },
}

const Stack = createStackNavigator()

export default function App() {
    return (
        <PaperProvider theme={theme}>
            <View style={styles.container}>
                <StatusBar backgroundColor={theme.colors.background} barStyle="light-content" />
                <NavigationContainer theme={theme}>
                    <Stack.Navigator initialRouteName="Login" >
                        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                        <Stack.Screen name="Home" component={Home} options={{ title: 'Hoşgeldin, Mustafa.' }} />
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        </PaperProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.background,
        flex: 1
    }
})
