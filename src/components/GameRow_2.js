import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Colors} from '../constants/colors';
export default function GameRow_2(props) {
  const { theme, name, category,duration, location } = props;
  if (theme %2 === 0) {
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: Colors.black,
            borderColor: Colors.yellow,
            borderWidth: 10,
          },
        ]}
      >
        <Text style={[styles.textStyle, { color: Colors.yellow, flex: 4.4 }]}>
          {name}
        </Text>
        {/* <Text style={[styles.textStyle, { color: Colors.yellow }]}>
          {category}
        </Text> */}
        {/* <Text style={[styles.textStyle, { color: Colors.light }]}>
          {location}
        </Text> */}
        <Text style={[styles.textStyle, { color: Colors.yellow }]}>
          {duration}
        </Text>
      </View>
    );
  } else {
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: Colors.black,
            borderColor: Colors.light,
            borderWidth: 10,
          },
        ]}
      >
        <Text style={[styles.textStyle, { color: Colors.light, flex: 3.5 }]}>
          {name}
        </Text>
        <Text style={[styles.textStyle, { color: Colors.light }]}>
          {category}
        </Text>
        {/* <Text style={[styles.textStyle, { color: Colors.yellow }]}>
          {location}
        </Text> */}
        <Text style={[styles.textStyle, { color: Colors.light }]}>
          {duration}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '98%',
    height: 75,
    borderRadius: 20,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    margin: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  textStyle: {
    flex: 1,
    fontSize: 30,
    alignSelf: 'center',
  },
});
