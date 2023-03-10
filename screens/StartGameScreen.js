import {useState} from 'react';
import {Alert, StyleSheet, TextInput, Text, View} from 'react-native';
import COLORS from '../constants/colors';
import InstructionText from '../components/ui/InstructionText';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';

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
    <View style={styles.rootContainer}>
      <Title title='Guess My Number'/>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
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
      </Card>
    </View>
  )
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center'
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
