import {View, Image, StyleSheet, Text} from 'react-native';
import COLORS from '../constants/colors';

import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';

const GameOverScreen = ({roundNumber, userNumber, onStartNewGAme}) => {
  return (
    <View style={styles.rootContainer}>
      <Title title="GAME OVER!"/>
      <View style={styles.imageContainer}>
        <Image 
          source={require('../assets/images/success.png')}
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGAme}>Start New Game</PrimaryButton>
    </View>
  )
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: COLORS.primary800,
    overflow: 'hidden',
    margin: 36
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: COLORS.primary500
  }
});
