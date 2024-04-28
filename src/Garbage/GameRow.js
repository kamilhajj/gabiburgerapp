import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';
export default function GameRow({name,category,duration}) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={[styles.subContainers, styles.nameContainer]}>
        <Text style={styles.textStyle}>{name}</Text>
      </View>
      <View style={[styles.subContainers, styles.categoryContainer]}>
        <Text style={styles.textStyle}>{category}</Text>
      </View>
      <View style={[styles.subContainers, styles.durationContainer]}>
        <Text style={styles.textStyle}>{duration}</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    width: '98%',
    height: 40,
    flexDirection: 'row',
    margin: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },
  subContainers: {
    backgroundColor: Colors.light,
    borderRadius: 20,
    marginHorizontal: 3,
  },
  nameContainer: {
    flex: 9,
  },
  categoryContainer: {
    flex: 7,
  },
  durationContainer: {
    flex: 4,
  },
  textStyle: {
    color: Colors.black,
    fontSize: 25,
    alignSelf: 'flex-start',
    marginLeft:20
  },
});
