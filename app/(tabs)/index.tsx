import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Animated from "react-native-reanimated";
export default function HomeScreen() {
	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
			headerImage={
				<Image
					source={require("@/assets/images/partial-react-logo.png")}
					style={styles.reactLogo}
				/>
			}
		>
			<ThemedView>
				<Animated.View
					className={"flex items-center justify-center bg-red-400"}
				>
					<Image
						source={require("@/assets/images/react-logo.png")}
						width={100}
						height={100}
					/>
				</Animated.View>
			</ThemedView>
			<ThemedView style={styles.titleContainer}>
				<ThemedText type="title">
					Repro Example - not applying NW classes
				</ThemedText>

				<HelloWave />
			</ThemedView>
			<ThemedView style={styles.stepContainer}>
				<ThemedText type="subtitle">
					Expo 52.0.0-preview.18, NW 4.1.23, and RNReanimated 3.16.1
				</ThemedText>
				<ThemedText type="default">
					The Animated.View should have `flex items-center justify-center
					bg-red-400` classes
				</ThemedText>
				<ThemedText type="default">
					This was working with RNReanimated 3.10.1
				</ThemedText>
			</ThemedView>
		</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: "absolute",
	},
});
