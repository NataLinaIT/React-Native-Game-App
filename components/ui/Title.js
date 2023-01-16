import {StyleSheet, Text} from 'react-native';
import COLORS from '../../constants/colors';

const Title = ({title}) => {
  return <Text style={styles.title}>{title}</Text>
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.accent,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: COLORS.accent,
    padding: 12
  }
});
