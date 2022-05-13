import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

import tw from "tailwind-react-native-classnames";

const About = () => {
	return (
		<ScrollView style={tw`bg-gray-900 pt-8 px-2`}>
			<View style={tw`bg-white h-24 rounded-xl mb-2 border`}>
				<View style={tw`flex-row justify-between mx-4 border-b pb-2`}>
					<Text style={tw`text-gray-800`}>About</Text>
					<Text style={tw`text-gray-800`}>About</Text>
					<Text style={tw`text-gray-800`}>About</Text>
					<Text style={tw`text-gray-800`}>About</Text>
				</View>
			</View>
			<View style={tw`bg-white h-24 rounded-xl mb-2 border`}>
				<Text style={tw`text-gray-800`}>About</Text>
			</View>
		</ScrollView>
	);
};

export default About;

const styles = StyleSheet.create({});
