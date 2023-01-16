import {View, Text, Pressable, StyleSheet} from 'react-native'
import COLORS from '../constants/colors';

const PrimaryButton = ({children, onPress}) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={
          ({pressed}) => pressed ? [styles.innerContainer, styles.pressed] : styles.innerContainer
        }
        onPress={onPress}
        android_ripple={{color: COLORS.primary600}}
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
    backgroundColor: COLORS.primary500,
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
