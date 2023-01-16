import {useState} from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import {generateRandomBetween} from '../utils/helpers';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({userNumber}) => {
  const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const handleNextGuess = (direction) => {
    if(
      (direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert(
        'Don\'t lie!',
        'You know this is wrong...',
        [{text: 'Sorry!', style: 'cancel'}]
      )
      return;
    }

    if(direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title title="Opponent's Guess"/>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View>
          <PrimaryButton onPress={handleNextGuess.bind(this, 'lower')}>-</PrimaryButton>
          <PrimaryButton onPress={handleNextGuess.bind(this, 'greater')}>+</PrimaryButton>
        </View>
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
