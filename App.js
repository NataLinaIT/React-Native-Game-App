import {useState} from 'react';
import {StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import COLORS from './constants/colors';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(true);
  
  const handlePickedNumber = (number) => {
    setUserNumber(number);
    setIsGameOver(false)
  }

  const handleGameOver = () => {
    setIsGameOver(true);
  }
  
  let screen = <StartGameScreen onPickNumber={handlePickedNumber}/>;

  if(userNumber) {
    screen = <GameScreen
                userNumber={userNumber}
                onGameOver={handleGameOver}
              />
  }

  if(userNumber && isGameOver) {
    screen = <GameOverScreen />
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
