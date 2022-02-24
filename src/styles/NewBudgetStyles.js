import {StyleSheet} from 'react-native';
import globalStyles from './index';

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
  },
  label: {
    textAlign: 'center',
    fontSize: 24,
    color: '#3B82F6',
  },
  input: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 30,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#1048A4',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default styles;
