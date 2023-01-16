import {View, Text, Pressable, StyleSheet} from 'react-native'

const PrimaryButton = ({children}) => {
  function pressHandler() {
    console.log('Pressed!');
  }

  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={
          ({pressed}) => pressed ? [styles.innerContainer, styles.pressed] : styles.innerContainer
        }
        onPress={pressHandler}
        android_ripple={{color: '#640233'}}
      >
        <Text style={styles.buttonText}>
          {children}
        </Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden'
  },
  innerContainer: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.25
  }
});
