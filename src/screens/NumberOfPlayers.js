import { globalStyles } from "../styles/global_styles";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Colors } from "../constants/colors";
import PlayerNumber from "../components/PlayerNumber";

export default function NumberOfPlayers({navigation}) {
  return (
    <View style={globalStyles.screenContainer}>
      <View style={[globalStyles.screenContainer, { flexDirection: 'row' }]}>
        <Pressable
          onPress={() => navigation.navigate('OnePlayer')}
          style={({ pressed }) => [
            styles.pressableStyle,
            pressed ? styles.pressedStyle : styles.pressableStyle,
          ]}
        >
          <PlayerNumber iconName={'numeric-1-box'} iconText={'One'} />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('TwoPlayers')}
          style={({ pressed }) => [
            styles.pressableStyle,
            pressed ? styles.pressedStyle : styles.pressableStyle,
          ]}
        >
          <PlayerNumber iconName={'numeric-2-box'} iconText={'Two'} />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('ThreePlayers')}
          style={({ pressed }) => [
            styles.pressableStyle,
            pressed ? styles.pressedStyle : styles.pressableStyle,
          ]}
        >
          <PlayerNumber iconName={'numeric-3-box'} iconText={'Three'} />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('FourPlayers')}
          style={({ pressed }) => [
            styles.pressableStyle,
            pressed ? styles.pressedStyle : styles.pressableStyle,
          ]}
        >
          <PlayerNumber iconName={'numeric-4-box'} iconText={'Four'} />
        </Pressable>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Pressable
          onPress={() => navigation.navigate('FivePlayers')}
          style={({ pressed }) => [
            styles.pressableStyle,
            pressed ? styles.pressedStyle : styles.pressableStyle,
          ]}
        >
          <PlayerNumber iconName={'numeric-5-box'} iconText={'Five'} />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('SixPlayers')}
          style={({ pressed }) => [
            styles.pressableStyle,
            pressed ? styles.pressedStyle : styles.pressableStyle,
          ]}
        >
          <PlayerNumber iconName={'numeric-6-box'} iconText={'Six'} />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('SevenPlayers')}
          style={({ pressed }) => [
            styles.pressableStyle,
            pressed ? styles.pressedStyle : styles.pressableStyle,
          ]}
        >
          <PlayerNumber iconName={'numeric-7-box'} iconText={'Seven'} />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('EightPlayers')}
          style={({ pressed }) => [
            styles.pressableStyle,
            pressed ? styles.pressedStyle : styles.pressableStyle,
          ]}
        >
          <PlayerNumber iconName={'numeric-8-box'} iconText={'Eight+'} />
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  pressableStyle: {},
  pressedStyle:{
    opacity:0.8
  },
});