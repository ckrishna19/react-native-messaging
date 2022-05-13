import { StyleSheet, Text, View, ScrollView, Image, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import { FontAwesome, AntDesign } from "react-native-vector-icons";
import tw from "tailwind-react-native-classnames";
import { StatusBar } from "expo-status-bar";
const Home = () => {
	const progress = useRef(new Animated.Value(0)).current;

	const scale = useRef(new Animated.Value(1)).current;
	useEffect(() => {
		Animated.timing(progress, { toValue: 1, duration: 1000, useNativeDriver: false }).start();
		Animated.timing(scale, { toValue: 2, useNativeDriver: false }).start();
	}, []);

	return (
		<ScrollView style={{ backgroundColor: "white", marginTop: 5 }}>
			<StatusBar style="dark" />
			<View style={tw`bg-white flex-row justify-between items-center px-2 `}>
				<Image
					style={tw`w-32 h-14 opacity-90 opacity-80 rounded-xl`}
					source={{
						uri: "https://www.glaad.org/sites/default/files/styles/750px/public/facebook-logo-spelledout.jpg?itok=xjw38fYO",
					}}
				/>
				<View style={tw`flex-row`}>
					<FontAwesome name="search" style={tw`mr-5`} size={20} color="black" />
					<AntDesign name="message1" size={20} color="black" />
				</View>
			</View>
			<View style={tw`bg-white flex-row justify-between border-b  border-gray-300`}>
				<FontAwesome name="home" size={28} style={tw`text-blue-500 border-b-2 py-3 border-blue-500 w-14 text-center`} />
				<FontAwesome name="external-link" color="gray" size={28} style={tw`py-3`} />
				<FontAwesome name="camera" color="gray" size={28} style={tw`py-3`} />
				<FontAwesome name="edit" color="gray" size={28} style={tw`py-3`} />
				<FontAwesome name="home" color="gray" size={28} style={tw`py-3`} />
			</View>
		</ScrollView>
	);
};

export default Home;

const styles = StyleSheet.create({
	square: {
		height: 100,
		width: 100,
		backgroundColor: "red",
	},
});

/*
<View>
				<FontAwesome name="external-link" color="gray" size={28} style={tw`py-3`} />
				<FontAwesome name="camera" color="gray" size={28} style={tw`py-3`} />
				<FontAwesome name="edit" color="gray" size={28} style={tw`py-3`} />
				<FontAwesome name="home" color="gray" size={28} style={tw`py-3`} />
				<FontAwesome name="external-link" color="gray" size={28} style={tw`py-3`} />
				<FontAwesome name="camera" color="gray" size={28} style={tw`py-3`} />
				<FontAwesome name="edit" color="gray" size={28} style={tw`py-3`} />
				<FontAwesome name="home" color="gray" size={28} style={tw`py-3`} />
				<FontAwesome name="external-link" color="gray" size={28} style={tw`py-3`} />
				<FontAwesome name="camera" color="gray" size={28} style={tw`py-3`} />
				<FontAwesome name="edit" color="gray" size={28} style={tw`py-3`} />
				<FontAwesome name="home" color="gray" size={28} style={tw`py-3`} />
				<FontAwesome name="external-link" color="gray" size={28} style={tw`py-3`} />
				<FontAwesome name="camera" color="gray" size={28} style={tw`py-3`} />
				<FontAwesome name="edit" color="gray" size={28} style={tw`py-3`} />
				<FontAwesome name="home" color="gray" size={28} style={tw`py-3`} />
				<FontAwesome name="external-link" color="gray" size={28} style={tw`py-3`} />
				<FontAwesome name="camera" color="gray" size={28} style={tw`py-3`} />
				<FontAwesome name="edit" color="gray" size={28} style={tw`py-3`} />
				<FontAwesome name="home" color="gray" size={28} style={tw`py-3`} />
				<FontAwesome name="external-link" color="gray" size={28} style={tw`py-3`} />
				<FontAwesome name="camera" color="gray" size={28} style={tw`py-3`} />
				<FontAwesome name="edit" color="gray" size={28} style={tw`py-3`} />
				<FontAwesome name="home" color="gray" size={28} style={tw`py-3`} />
				<FontAwesome name="external-link" color="gray" size={28} style={tw`py-3`} />
				<FontAwesome name="camera" color="gray" size={28} style={tw`py-3`} />
				<FontAwesome name="edit" color="gray" size={28} style={tw`py-3`} />
				<FontAwesome name="home" color="gray" size={28} style={tw`py-3`} />
			</View>
*/
