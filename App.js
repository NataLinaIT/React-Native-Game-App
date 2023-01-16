import {useState} from 'react';
import {StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import COLORS from './constants/colors';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  
  const handlePickedNumber = (number) => {
    setUserNumber(number);
  }
  
  let screen = <StartGameScreen onPickNumber={handlePickedNumber}/>;
  if(userNumber) {
    screen = <GameScreen userNumber={userNumber}/>
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
