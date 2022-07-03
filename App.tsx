import React from "react";
import {
	Text,
	Link,
	HStack,
	Center,
	Heading,
	Switch,
	useColorMode,
	NativeBaseProvider,
	extendTheme,
	VStack,
	Box,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import calculator from "./src/screen/calculator";
import Calculator from "./src/screen/calculator";

// Define the config
const config = {
	useSystemColorMode: false,
	initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
	interface ICustomTheme extends MyThemeType {}
}
export default function App() {
	return (
		<NativeBaseProvider>
			<Calculator />
		</NativeBaseProvider>
	);
}
