import {StyleSheet} from 'react-native';

import globalStyles from './index';

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
  },
  grafCenter: {
    alignItems: 'center',
  },
  img: {
    width: 250,
    height: 250,
  },
  textContainer: {
    marginTop: 50,
  },
  value: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  label: {
    fontWeight: '700',
    color: '#3B82F6',
  },
});

export default styles;
