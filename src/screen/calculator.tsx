import React, { useState } from "react";

import {
	View,
	StyleSheet,
	SafeAreaView,
	FlatList,
	Text,
	Alert,
} from "react-native";

export default function Calculator() {
	const [text, setText] = useState("0");
	const characterArray = [
		"AC",
		"DEL",
		"%",
		"/",
		"7",
		"8",
		"9",
		"*",
		"4",
		"5",
		"6",
		"-",
		"1",
		"2",
		"3",
		"+",
		"L",
		"0",
		".",
		"=",
	];

	const GridView = ({ data }) => {
		console.log(data);
		return (
			<View style={styleSheet.gridbox}>
				<Text
					style={styleSheet.gridText}
					onPress={() => {
						getOnPressItem(data);
					}}
				>
					{data}
				</Text>
			</View>
		);
	};

	const getOnPressItem = (data) => {
		Alert.alert(data);
	};

	return (
		<SafeAreaView style={styleSheet.MainContainer}>
			<View
				style={{
					flex: 1,
					alignItems: "flex-end",
					justifyContent: "flex-end",
				}}
			>
				<Text style={{ color: "white", fontSize: 60, marginHorizontal: 50 }}>
					{text}
				</Text>
			</View>
			<View
				style={{
					flex: 2,
				}}
			>
				<FlatList
					data={characterArray}
					renderItem={({ item }) => <GridView data={item} />}
					numColumns={4}
					keyExtractor={(item) => item}
				/>
			</View>
		</SafeAreaView>
	);
}

const styleSheet = StyleSheet.create({
	MainContainer: {
		flex: 1,
		backgroundColor: "black",
	},

	gridbox: {
		flex: 1,
		height: 100,
		marginHorizontal: 2,
		marginTop: 10,
		backgroundColor: "#bc9c77",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
	},

	gridText: {
		fontSize: 24,
		color: "white",
	},
});
