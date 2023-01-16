import {View, StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

const Card = ({children}) => {
  return <View style={styles.container}>{children}</View>
}

export default Card;

const styles = StyleSheet.create({
  container: {
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
});
