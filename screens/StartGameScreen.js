import {useState} from 'react';
import {Alert, StyleSheet, TextInput, View} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import COLORS from '../constants/colors';

const StartGameScreen = ({onPickNumber}) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const handleInputNumber = (value) => {
    setEnteredNumber(value);
  }

  const resetInput = () => {
    setEnteredNumber('');
  }

  const handleConfirm = () => {
    const number = parseInt(enteredNumber);

    if(isNaN(number) || number <=0 || number > 99 ) {
      Alert.alert(
        'Invalid number',
        'Number has to be a number between 1 and 99',
        [{text: 'Okay', style: 'destructive', onPress: resetInput}]
      );
      return;
    }

    onPickNumber(number)
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={handleInputNumber}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInput}>
            Reset
          </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={handleConfirm}>
            Confirm
          </PrimaryButton>
        </View>
      </View>
    </View>
  )
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: COLORS.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25
  },
  textInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: COLORS.accent,
    borderBottomWidth: 2,
    color: COLORS.accent,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  },
});
