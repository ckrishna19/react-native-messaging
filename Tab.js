import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./components/Home";
import About from "./components/About";
import { StatusBar } from "react-native";
import Login from "./components/Login";
import Register from "./components/Register";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons, EvilIcons } from "react-native-vector-icons";
import Menu from "./components/Menu";
export default function App() {
	const Tab = createMaterialTopTabNavigator();

	return (
		<Tab.Navigator style={{ paddingTop: StatusBar.currentHeight }}>
			<Tab.Screen
				options={{
					title: ({ focused }) => (
						<Ionicons name={focused ? "ios-home-sharp" : "ios-home-outline"} size={25} color={focused ? "blue" : "gray"} />
					),

					tabBarStyle: { shadowColor: "white", display: "none" },
				}}
				name="Home"
				component={Home}
			/>

			<Tab.Screen
				name="Menu"
				component={Menu}
				options={{
					title: ({ focused }) => <Ionicons name="menu-outline" size={25} color={focused ? "blue" : "gray"} />,

					tabBarStyle: { shadowColor: "white" },
				}}
			/>

			<Tab.Screen
				name="menu"
				component={Menu}
				options={{
					title: ({ focused }) => <Ionicons name="menu-outline" size={25} color={focused ? "blue" : "gray"} />,

					tabBarStyle: { shadowColor: "white" },
				}}
			/>

			<Tab.Screen
				name="enu"
				component={About}
				options={{
					title: ({ focused }) => <Ionicons name="menu-outline" size={25} color={focused ? "blue" : "gray"} />,

					tabBarStyle: { shadowColor: "white" },
				}}
			/>
		</Tab.Navigator>
	);
}

// const styles = StyleSheet.create({
// 	container: {
// 		backgroundColor: "pink",
// 		marginHorizontal: 20,
// 	},
// 	home: {
// 		color: "blue",
// 		textAlign: "center",
// 		padding: 5,
// 	},
// });

/*


	
*/

/*
<Tab.Screen
					name="About"
					component={Menu}
					options={{
						title: ({ focused }) => (
							<Ionicons size={28} name="ios-chevron-forward-outline" color={focused ? "blue" : "gray"} />
						),
					}}
				/>
*/
