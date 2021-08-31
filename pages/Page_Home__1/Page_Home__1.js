import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert} from "react-native";
import { Svg, Path } from "react-native-svg";
import axios from 'axios';
import SwitchSZ from "../../customComponents/SwitchSZ.js";
import Checkbox from "../../customComponents/Checkbox.js";
import InPageNavigator from "../../customComponents/InPageNavigator.js";
const Page_Home__1  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page1}    >
			<View style = {noneModeStyles._viewport}    >
				<View style = {noneModeStyles._layer_13c98f}    >
					<View style = {noneModeStyles._layer_a4186e}   >
						<Svg style={{height: 17, width: 16}} viewBox = "0 0 16 17">
							<Path fill = {"black"}     d = "M14.4328 5.11422L9.33891 0.648566C8.87195 0.230904 8.26743 0 7.64094 0C7.01444 0 6.40993 0.230904 5.94297 0.648566L0.849065 5.11422C0.5794 5.3554 0.36421 5.65125 0.217821 5.98209C0.0714323 6.31293 -0.00279533 6.67116 8.04787e-05 7.03293V14.453C8.04787e-05 15.1285 0.268419 15.7764 0.746066 16.254C1.22371 16.7317 1.87154 17 2.54703 17H12.7348C13.4103 17 14.0582 16.7317 14.5358 16.254C15.0135 15.7764 15.2818 15.1285 15.2818 14.453V7.02444C15.2835 6.6641 15.2087 6.3075 15.0623 5.97822C14.916 5.64893 14.7014 5.35445 14.4328 5.11422ZM9.33891 15.302H5.94297V11.0571C5.94297 10.8319 6.03242 10.616 6.19163 10.4568C6.35085 10.2976 6.56679 10.2081 6.79195 10.2081H8.48992C8.71509 10.2081 8.93103 10.2976 9.09024 10.4568C9.24946 10.616 9.33891 10.8319 9.33891 11.0571V15.302ZM13.5838 14.453C13.5838 14.6782 13.4944 14.8942 13.3352 15.0534C13.176 15.2126 12.96 15.302 12.7348 15.302H11.0369V11.0571C11.0369 10.3816 10.7685 9.73379 10.2909 9.25614C9.81324 8.7785 9.16541 8.51016 8.48992 8.51016H6.79195C6.11646 8.51016 5.46863 8.7785 4.99099 9.25614C4.51334 9.73379 4.245 10.3816 4.245 11.0571V15.302H2.54703C2.32187 15.302 2.10593 15.2126 1.94671 15.0534C1.7875 14.8942 1.69805 14.6782 1.69805 14.453V7.02444C1.6982 6.90389 1.72402 6.78477 1.77379 6.67498C1.82356 6.56519 1.89614 6.46726 1.9867 6.3877L7.08061 1.93053C7.23554 1.79442 7.43471 1.71936 7.64094 1.71936C7.84716 1.71936 8.04634 1.79442 8.20127 1.93053L13.2952 6.3877C13.3857 6.46726 13.4583 6.56519 13.5081 6.67498C13.5579 6.78477 13.5837 6.90389 13.5838 7.02444V14.453Z"/>
						</Svg>
					</View>
				</View>
			</View>
		</View>
	</ScrollView>
)}
export default Page_Home__1

const noneModeStyles = StyleSheet.create({
_page1: {
	height: 20,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgba(0, 0, 0, 0)",
	},
_viewport: {
	height: 20,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgba(0, 0, 0, 0)",
	},
_layer_13c98f: {
	position: "absolute",
	transform: [
		{translateX: 2.50073},
		{translateY: 1.64646},
	],
	},
_layer_a4186e: {
	},
})

