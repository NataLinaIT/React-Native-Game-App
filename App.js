import {useState} from 'react';
import {StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import COLORS from './constants/colors';

import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);
  
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

  const handlePickedNumber = (number) => {
    setUserNumber(number);
    setIsGameOver(false)
  }

  const handleGameOver = (roundsNumber) => {
    setIsGameOver(true);
    setGuessRounds(roundsNumber)
  }

  const handleStartNewGame = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }
  
  let screen = <StartGameScreen onPickNumber={handlePickedNumber}/>;

  if(userNumber) {
    screen = <GameScreen
                userNumber={userNumber}
                onGameOver={handleGameOver}
              />
  }

  if(userNumber && isGameOver) {
    screen = <GameOverScreen
              roundNumber={guessRounds}
              userNumber={userNumber}
              onStartNewGAme={handleStartNewGame}
             />
  }

  return (
    <LinearGradient
      colors={[COLORS.primary700, COLORS.accent]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require('./assets/images/background.png')} 
        style={styles.rootScreen}
        resizeMode='cover'
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  }
});
