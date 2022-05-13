import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

const Register = ({ navigation }) => {
	const handleLogin = () => {
		navigation.navigate("Login");
	};
	return (
		<ScrollView style={tw`bg-gray-300 `} bounces={false}>
			<View style={tw`border mx-4 mt-40 pb-5 bg-white rounded-xl shadow`}>
				<View>
					<Text style={tw`p-8 text-center uppercase font-bold`}> Register here</Text>
				</View>
				<View style={tw`mx-4`}>
					<View style={tw`mb-4`}>
						<Text style={tw`mb-1`}>Full Name</Text>
						<TextInput style={tw`bg-white pl-1 py-1 bg-gray-200 border rounded-md `} placeholder="Enter Full Name" />
					</View>
					<View>
						<Text style={tw`mb-1`}>Email</Text>
						<TextInput style={tw`bg-white pl-1 py-1 bg-gray-200 border rounded-md `} placeholder="Enter Email" />
					</View>
					<View style={tw`mt-4`}>
						<Text style={tw`mb-1`}>Password</Text>
						<TextInput
							secureTextEntry={true}
							style={tw`bg-white pl-1 py-1 bg-gray-200 border rounded-md `}
							placeholder="Enter Password"
						/>
					</View>
					<View style={tw`mt-4`}>
						<Text style={tw`mb-1`}>Confirm Password</Text>
						<TextInput
							secureTextEntry={true}
							style={tw`bg-white pl-1 py-1 bg-gray-200 border rounded-md `}
							placeholder="Enter Confirm Password"
						/>
					</View>
				</View>
				<TouchableOpacity style={tw`justify-center flex-row`}>
					<Text style={tw`text-center mt-2 border px-6 py-2 rounded-xl bg-indigo-200 `}>Submit</Text>
				</TouchableOpacity>
				<View style={tw`flex-row mt-4 mx-4`}>
					<Text>Already Have an Account? Click</Text>
					<Text style={tw`text-red-500 mx-1`} onPress={handleLogin}>
						Here
					</Text>
					<Text>to Login</Text>
				</View>
			</View>
		</ScrollView>
	);
};

export default Register;

const styles = StyleSheet.create({});
