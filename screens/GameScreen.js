import {StyleSheet, View, Text} from 'react-native';
import Title from '../components/Title';

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title title="Opponent's Guess"/>
      {/* <Text>GUESS</Text> */}
      <View>
        <Text>Higher or lower?</Text>
        {/* <Text>+ -</Text> */}
      </View>
      {/* <View>Log rounds</View> */}
    </View>
  )
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 40
  },
});
