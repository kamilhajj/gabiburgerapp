import React from "react";
import { View, Text, StyleSheet,Pressable } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import PlayerNumber from "../components/PlayerNumber";
import { globalStyles } from "../styles/global_styles";

export function DrawerContent(props) {
  return (
    <View style={globalStyles.screenContainer}>
      <Pressable
        onPress={() => props.navigation.navigate('OnePlayer')}
        style={({ pressed }) => [
          globalStyles.pressableStyle,
          pressed ? globalStyles.pressedStyle : globalStyles.pressableStyle,
        ]}
      >
        <PlayerNumber iconName={'numeric-1-box'} iconText={'One'} />
      </Pressable>
      <Pressable
        onPress={() => props.navigation.navigate('TwoPlayers')}
        style={({ pressed }) => [
          globalStyles.pressableStyle,
          pressed ? globalStyles.pressedStyle : globalStyles.pressableStyle,
        ]}
      >
        <PlayerNumber iconName={'numeric-2-box'} iconText={'Two'} />
      </Pressable>
      <Pressable
        onPress={() => props.navigation.navigate('ThreePlayers')}
        style={({ pressed }) => [
          globalStyles.pressableStyle,
          pressed ? globalStyles.pressedStyle : globalStyles.pressableStyle,
        ]}
      >
        <PlayerNumber iconName={'numeric-3-box'} iconText={'Three'} />
      </Pressable>
      <Pressable
        onPress={() => props.navigation.navigate('FourPlayers')}
        style={({ pressed }) => [
          globalStyles.pressableStyle,
          pressed ? globalStyles.pressedStyle : globalStyles.pressableStyle,
        ]}
      >
        <PlayerNumber iconName={'numeric-4-box'} iconText={'Four'} />
      </Pressable>
      <Pressable
        onPress={() => props.navigation.navigate('FivePlayers')}
        style={({ pressed }) => [
          globalStyles.pressableStyle,
          pressed ? globalStyles.pressedStyle : globalStyles.pressableStyle,
        ]}
      >
        <PlayerNumber iconName={'numeric-5-box'} iconText={'Five'} />
      </Pressable>
      <Pressable
        onPress={() => props.navigation.navigate('SixPlayers')}
        style={({ pressed }) => [
          globalStyles.pressableStyle,
          pressed ? globalStyles.pressedStyle : globalStyles.pressableStyle,
        ]}
      >
        <PlayerNumber iconName={'numeric-6-box'} iconText={'Six'} />
      </Pressable>
      <Pressable
        onPress={() => props.navigation.navigate('SevenPlayers')}
        style={({ pressed }) => [
          globalStyles.pressableStyle,
          pressed ? globalStyles.pressedStyle : globalStyles.pressableStyle,
        ]}
      >
        <PlayerNumber iconName={'numeric-7-box'} iconText={'Seven'} />
      </Pressable>
      <Pressable
        onPress={() => props.navigation.navigate('EightPlayers')}
        style={({ pressed }) => [
          globalStyles.pressableStyle,
          pressed ? globalStyles.pressedStyle : globalStyles.pressableStyle,
        ]}
      >
        <PlayerNumber iconName={'numeric-8-box'} iconText={'Eight+'} />
      </Pressable>
    </View>
  );
}