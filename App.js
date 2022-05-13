import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons, EvilIcons } from "react-native-vector-icons";
import Menu from "./components/Menu";
import Tab from "./Tab";

const App = () => {
	const Stack = createNativeStackNavigator();
	const globalScreen = {
		headerStyle: { backgroundColor: "gray" },
		headerTitleStyle: { color: "yellow" },
		headerTintColor: { color: "pink" },
	};
	return (
		<NavigationContainer>
			<SafeAreaProvider>
				<Stack.Navigator screenOptions={globalScreen} initialRouteName="Login">
					<Stack.Screen name="Login" component={Login} />
					<Stack.Screen name="Tab" component={Tab} options={{ headerShown: false }} />
				</Stack.Navigator>
			</SafeAreaProvider>
		</NavigationContainer>
	);
};

export default App;

const styles = StyleSheet.create({});
